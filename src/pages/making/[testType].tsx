import { useCallback } from 'react';
import { Layout } from '@/components/Layout';
import { ITestWithAnswerResult, TestType } from '@/types/utils';
import { useAddTest } from '@/services/useTests';
// import { useAtomValue } from 'jotai';
// import { WritingTestStore } from '@/store/WritingTestStore';
import { Spinner } from '@/components/common/Spinner';
import { useRouter } from 'next/router';
import RomanceQuestionnaire from '@/components/writingTest/Romance';
import ParentQuestionnaire from '@/components/writingTest/Parent';

export default function TestMakingTypePage() {
  const router = useRouter();
  // const isAdOn = useAtomValue(WritingTestStore.IsAdOnAtom);
  // const isCompleted = useAtomValue(WritingTestStore.IsCompletedAtom);
  const mutation = useAddTest({ testType: TestType.romance });
  const handleSubmit = useCallback(
    async (result: ITestWithAnswerResult) => {
      mutation.mutate(result);
    },
    [mutation],
  );

  // if (isAdOn) {
  //   return <div>보상형 동영상 광고</div>;
  // }
  if (
    mutation.isPending
    // || isCompleted
  ) {
    return <Spinner />;
  }

  return (
    <Layout>
      {/* {isAdOn && <div>보상형 동영상 광고</div>} */}
      {/* 동영상 시청 후, 콜백으로 시험지 페이지로 이동 */}
      {router.query.testType === 'romance-test' && <RomanceQuestionnaire onSubmit={handleSubmit} />}
      {router.query.testType === 'parent-test' && <ParentQuestionnaire onSubmit={handleSubmit} />}
    </Layout>
  );
}
