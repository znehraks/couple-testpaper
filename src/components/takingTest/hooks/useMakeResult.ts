import { useGetCoupleTestEntire } from '@/services/useCoupleTests';
import { TakingTestStore } from '@/store/TakingTestStore';
import { TestResultStore } from '@/store/TestResultStore';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useMakeResult = () => {
  const router = useRouter();
  const setIsTestEnded = useSetAtom(TakingTestStore.IsTestEndedAtom);
  const selectedAnswers = useAtomValue(TakingTestStore.SelectedAnswersAtom);
  const timeLeft = useAtomValue(TakingTestStore.TimeLeftAtom);
  const setTesterResult = useSetAtom(TestResultStore.TesterResultAtom);
  const { data } = useGetCoupleTestEntire();

  const testScore = useMemo(
    () =>
      data?.testQuestionWithAnswers.reduce((acc, question, index) => {
        if (question.answer === selectedAnswers[index]?.selectedAnswer.text) {
          return acc + 10;
        }
        return acc;
      }, 0) ?? 0,
    [data?.testQuestionWithAnswers, selectedAnswers],
  );
  const makeResult = useCallback(() => {
    setIsTestEnded(true);
    setTesterResult({
      testId: router.query.id as string,
      testDateTime: new Date().toISOString(),
      testAnswers: Object.values(selectedAnswers).map(({ selectedAnswer }) => selectedAnswer),
      testSpentTime: timeLeft,
      testScore,
    });
  }, [router.query.id, selectedAnswers, setIsTestEnded, setTesterResult, testScore, timeLeft]);

  return { makeResult };
};
