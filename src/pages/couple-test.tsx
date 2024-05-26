/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Questionnaire from '../components/questionnaire';
import { Layout } from '@/components/Layout';

export default function CoupleTestPage() {
  const [questions, setQuestions] = useState<string[]>([]);

  return (
    <Layout>
      {questions.length === 0 ? (
        <Questionnaire
          onSubmit={(answer) => {
            console.log(answer);
          }}
        />
      ) : (
        // <QuestionList questions={questions} />
        <></>
      )}
    </Layout>
  );
}
