import { useGetCoupleTest } from '@/services/useCoupleTests';
import { TakingTestStore } from '@/store/TakingTestStore';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useTimer = () => {
  const router = useRouter();
  const { data } = useGetCoupleTest();
  const isTestStarted = useAtomValue(TakingTestStore.IsTestStartedAtom);
  const setIsTimeUp = useSetAtom(TakingTestStore.IsTimeUpAtom);
  const setTimeLeft = useSetAtom(TakingTestStore.TimeLeftAtom);

  useEffect(() => {
    if (!isTestStarted) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(intervalId);
          setIsTimeUp(true);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isTestStarted, setIsTimeUp, setTimeLeft]);

  useEffect(() => {
    if (data?.testQuestions.length === 0) {
      router.replace('/couple-test');
      return;
    }
  }, [router, data?.testQuestions.length]);
};
