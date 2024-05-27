import { useState } from 'react';
import Questionnaire from '../components/questionnaire';
import { Layout } from '@/components/Layout';
import { ITestQuestion } from '@/types/utils';
import QuestionList from '@/components/QuestionList';

export default function CoupleTestPage() {
  const [testQuestions, setTestQuestions] = useState<ITestQuestion[]>([]);
  const handleSubmit = (result: ITestQuestion[]) => {
    setTestQuestions(result);
  };
  return (
    <Layout>
      {testQuestions.length === 0 ? (
        <Questionnaire onSubmit={handleSubmit} />
      ) : (
        <QuestionList questions={testQuestions} />
      )}
    </Layout>
  );
}
