import { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream } from 'fs';
import { IncomingForm, File as FormidableFile } from 'formidable';
import OpenAI from 'openai';

export const config = {
  api: {
    bodyParser: false,
  },
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface FormidableFiles {
  [key: string]: FormidableFile[];
}

const parseForm = (req: NextApiRequest): Promise<{ fields: any; files: FormidableFiles }> =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files: files as unknown as FormidableFiles });
    });
  });

const readFileAsync = (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const stream = createReadStream(path);
    stream.on('data', (chunk) => chunks.push(chunk as Buffer));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    stream.on('error', reject);
  });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { files } = await parseForm(req);
    const fileArray = files.file;

    if (!fileArray || fileArray.length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = fileArray[0]; // 첫 번째 파일만 처리

    const chatContent = await readFileAsync(file.filepath);
    const prompt = `Extract romantic questions from the following conversation:\n\n${chatContent}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert in relationship advice and creating engaging romantic questions from conversations.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
    });

    const questions = response.choices[0].message?.content?.trim().split('\n') || [];

    res.status(200).json({ questions });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
