import { useCallback, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useAddTest } from '@/services/useTests';
// import { useAtomValue } from 'jotai';
// import { WritingTestStore } from '@/store/WritingTestStore';
import { Spinner } from '@/components/common/Spinner';
import { useRouter } from 'next/router';
import WritingTest from '@/components/writingTest';
import { useSetAtom } from 'jotai';
import { WritingTestStore } from '@/store/WritingTestStore';
import { ITestWithAnswerResult } from '@/types/utils';

export default function TestMakingTypePage() {
  const router = useRouter();
  // const isAdOn = useAtomValue(WritingTestStore.IsAdOnAtom);
  // const isCompleted = useAtomValue(WritingTestStore.IsCompletedAtom);
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const mutation = useAddTest();
  const handleSubmit = useCallback(
    async (result: ITestWithAnswerResult) => {
      mutation.mutate(result);
    },
    [mutation],
  );

  useEffect(() => {
    if (router.query.testType === 'parents-test') {
      setStep('SELECT_PARENT');
      return;
    }

    if (router.query.testType === 'friends-test') {
      setStep('READY');
      return;
    }
    if (router.query.testType === 'office-test') {
      setStep('READY');
      return;
    }
  }, [router.query.testType, setStep]);

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
      {/* {router.query.testType === 'couple-test' && <CoupleQuestionnaire onSubmit={handleSubmit} />}
      {router.query.testType === 'friends-test' && <FriendsQuestionnaire onSubmit={handleSubmit} />}
      {router.query.testType === 'parents-test' && <ParentQuestionnaire onSubmit={handleSubmit} />} */}
      <WritingTest onSubmit={handleSubmit} />
    </Layout>
  );
}
