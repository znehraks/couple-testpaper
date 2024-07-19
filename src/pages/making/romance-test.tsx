import { useCallback } from 'react';
import Questionnaire from '../../components/writingTest';
import { Layout } from '@/components/Layout';
import { ITestWithAnswerResult, TestType } from '@/types/utils';
import { useAddTest } from '@/services/useTests';
import { useAtomValue } from 'jotai';
import { WritingTestStore } from '@/store/WritingTestStore';
import { useLicenses } from '@/hooks/useLicenses';

export default function RomanceTestMakingPage() {
  const isAdOn = useAtomValue(WritingTestStore.IsAdOnAtom);
  const isCompleted = useAtomValue(WritingTestStore.IsCompletedAtom);
  const mutation = useAddTest({ testType: TestType.romance });
  const handleSubmit = useCallback(
    async (result: ITestWithAnswerResult) => {
      mutation.mutate(result);
    },
    [mutation],
  );
  useLicenses(['heartIcon', 'friendsIcon']);

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
