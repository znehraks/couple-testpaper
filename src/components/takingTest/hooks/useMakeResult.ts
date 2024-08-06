import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { TestResultStore } from '@/store/TestResultStore';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useMakeResult = () => {
  const router = useRouter();
  const setTakingTestStatus = useSetAtom(TakingTestStore.TakingTestStatusAtom);
  const selectedAnswers = useAtomValue(TakingTestStore.SelectedAnswersAtom);
  const timeLeft = useAtomValue(TakingTestStore.TimeLeftAtom);
  const setTesterResult = useSetAtom(TestResultStore.TesterResultAtom);

  const makeResult = useCallback(() => {
    setTakingTestStatus(TakingTestStatus.FINISH);
    setTesterResult({
      testId: router.query.id as string,
      testDateTime: new Date().toISOString(),
      testAnswers: Object.values(selectedAnswers).map(({ selectedAnswer }) => selectedAnswer),
      testSpentTime: timeLeft,
    });
  }, [router.query.id, selectedAnswers, setTakingTestStatus, setTesterResult, timeLeft]);

  return { makeResult };
};
