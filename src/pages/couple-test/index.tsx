import { useCallback, useState } from 'react';
import Questionnaire from '../../components/questionnaire';
import { Layout } from '@/components/Layout';
import { ITestQuestion } from '@/types/utils';
import { useRouter } from 'next/router';
import { addCoupleTest } from '@/services/coupleTests';
import { useMutation } from '@tanstack/react-query';

export default function CoupleTestPage() {
  const mutation = useMutation({
    mutationFn: addCoupleTest,
    onSuccess: ({ id }) => {
      setIsAdOn(true);
      setCompleted(true);
      // 바로 이렇게 push하지말고, 광고 시청 후에 push하도록 수정
      router.push(`/couple-test/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const [, setIsAdOn] = useState(false);
  const [, setCompleted] = useState(true);
  const router = useRouter();
  const handleSubmit = useCallback(
    async (result: ITestQuestion[]) => {
      mutation.mutate(result);
    },
    [mutation],
  );

  return (
    <Layout>
      {/* {isAdOn && <div>보상형 동영상 광고</div>} */}
      {/* 동영상 시청 후, 콜백으로 시험지 페이지로 이동 */}
      <Questionnaire onSubmit={handleSubmit} />
    </Layout>
  );
}
