import { useCallback, useEffect, useState } from 'react';
import Questionnaire from '../../components/questionnaire';
import { Layout } from '@/components/Layout';
import { ITestQuestion } from '@/types/utils';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { useRouter } from 'next/router';

export default function CoupleTestPage() {
  const [testQuestions, setTestQuestions] = useState<ITestQuestion[]>([]);
  const [isAdOn, setIsAdOn] = useState(false);
  const [completed, setCompleted] = useState(true);
  const router = useRouter();
  const handleSubmit = useCallback(
    async (result: ITestQuestion[]) => {
      try {
        const res = await addDoc(collection(db, 'couple-tests'), {
          testType: 'couple',
          testQuestions: result,
          createdAt: new Date()?.toLocaleDateString(),
        });
        console.log('res', res);
        setTestQuestions(result);
        setIsAdOn(true);
        setCompleted(true);
        router.push(`/couple-test/${res.id}`);
      } catch (e) {
        console.error(e);
      } finally {
        console.log(4);
      }
    },
    [router],
  );

  return (
    <Layout>
      {/* {isAdOn && <div>보상형 동영상 광고</div>} */}
      {/* 동영상 시청 후, 콜백으로 시험지 페이지로 이동 */}
      <Questionnaire onSubmit={handleSubmit} />
    </Layout>
  );
}
