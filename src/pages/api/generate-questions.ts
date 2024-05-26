import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { answers } = req.body;
    const prompt = `Create romantic relationship exam questions based on the following user profile:\n\n${JSON.stringify(
      answers,
      null,
      2,
    )}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a test question creator who uses the answers provided by users to create a quiz that requires the other party to guess the answers given by the user.
            For example, if a user said he likes kimbap, an example of a test question you should ask is, What is this user's favorite food? 1. Pizza 2. Chicken 3. Gimbap The questions must be presented in multiple choice or descriptive form. And all answers must be written in Korean. And separate each questions with /`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
    });

    const questions = response.choices[0].message?.content?.trim().split('/') || [];
    res.status(200).json({ questions });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
