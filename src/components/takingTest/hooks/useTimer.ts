import { TakingTestStore } from '@/store/TakingTestStore';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useMakeResult } from './useMakeResult';

export const useTimer = () => {
  const isTestStarted = useAtomValue(TakingTestStore.IsTestStartedAtom);
  const isTestEnded = useAtomValue(TakingTestStore.IsTestEndedAtom);
  const [isTimeUp, setIsTimeUp] = useAtom(TakingTestStore.IsTimeUpAtom);
  const setTimeLeft = useSetAtom(TakingTestStore.TimeLeftAtom);
  const { makeResult } = useMakeResult();

  useEffect(() => {
    if (!isTestStarted || isTestEnded) return;
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
  }, [isTestEnded, isTestStarted, setIsTimeUp, setTimeLeft]);

  useEffect(() => {
    if (isTimeUp) makeResult();
  }, [isTimeUp, makeResult]);
};
