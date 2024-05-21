/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { motion } from 'framer-motion';
import FileUpload from '../components/FileUpload';
import QuestionList from '../components/QuestionList';
import { Container } from '../components/styles';

export default function Home() {
  const [questions, setQuestions] = useState<string[]>([]);

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setQuestions(data.questions);
  };

  return (
    <Container>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        연애고사 문제 생성기
      </motion.h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {questions.length > 0 && <QuestionList questions={questions} />}
    </Container>
  );
}
