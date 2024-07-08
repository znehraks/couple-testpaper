import { useCallback } from 'react';
import Questionnaire from '../../components/writingTest';
import { Layout } from '@/components/Layout';
import { ITestResult } from '@/types/utils';
import { useAddCoupleTest } from '@/services/useCoupleTests';
import { useAtomValue } from 'jotai';
import { WritingTestStore } from '@/store/WritingTestStore';

export default function CoupleTestPage() {
  const isAdOn = useAtomValue(WritingTestStore.IsAdOnAtom);
  const isCompleted = useAtomValue(WritingTestStore.IsCompletedAtom);
  const mutation = useAddCoupleTest();
  const handleSubmit = useCallback(
    async (result: ITestResult) => {
      mutation.mutate(result);
    },
    [mutation],
  );

  if (isAdOn) {
    return <div>보상형 동영상 광고</div>;
  }
  if (mutation.isPending || isCompleted) {
    return null;
  }
  return (
    <Layout>
      {/* {isAdOn && <div>보상형 동영상 광고</div>} */}
      {/* 동영상 시청 후, 콜백으로 시험지 페이지로 이동 */}
      <Questionnaire onSubmit={handleSubmit} />
    </Layout>
  );
}
