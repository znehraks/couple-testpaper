/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Questionnaire from '../components/Questionnaire';
import QuestionList from '../components/QuestionList';
import { Container } from '../components/styles';

export default function Home() {
  const [questions, setQuestions] = useState<string[]>([]);

  const handleQuestionnaireSubmit = async (answers: { [key: string]: string }) => {
    const response = await fetch('/api/generate-questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });

    const data = await response.json();
    console.log('data', data);
    setQuestions(data.questions);
  };

  return (
    <Container>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        연애고사 문제 생성기
      </motion.h1>
      {questions.length === 0 ? (
        <Questionnaire onSubmit={handleQuestionnaireSubmit} />
      ) : (
        <QuestionList questions={questions} />
      )}
    </Container>
  );
}
