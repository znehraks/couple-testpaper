import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useMakeResult } from './useMakeResult';

export const useTimer = () => {
  const takingTestStatus = useAtomValue(TakingTestStore.TakingTestStatusAtom);
  const [isTimeUp, setIsTimeUp] = useAtom(TakingTestStore.IsTimeUpAtom);
  const setTimeLeft = useSetAtom(TakingTestStore.TimeLeftAtom);
  const { makeResult } = useMakeResult();

  useEffect(() => {
    if (takingTestStatus !== TakingTestStatus.ING) return;
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
  }, [setIsTimeUp, setTimeLeft, takingTestStatus]);

  useEffect(() => {
    if (isTimeUp) makeResult();
  }, [isTimeUp, makeResult]);
};
