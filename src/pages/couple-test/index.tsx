import { useState } from 'react';
import Questionnaire from '../../components/questionnaire';
import { Layout } from '@/components/Layout';
import { ITestQuestion } from '@/types/utils';

export default function CoupleTestPage() {
  const [testQuestions, setTestQuestions] = useState<ITestQuestion[]>([]);
  const [isAdOn, setIsAdOn] = useState(false);
  const [completed, setCompleted] = useState(true);
  const handleSubmit = (result: ITestQuestion[]) => {
    setTestQuestions(result);
    console.log('result', result);
    setIsAdOn(true);
    setCompleted(true);
  };

  return (
    <Layout>
      {/* {isAdOn && <div>보상형 동영상 광고</div>} */}
      {/* 동영상 시청 후, 콜백으로 시험지 페이지로 이동 */}
      <Questionnaire onSubmit={handleSubmit} />
    </Layout>
  );
}
