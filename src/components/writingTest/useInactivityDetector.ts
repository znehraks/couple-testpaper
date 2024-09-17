import { useState, useEffect, useCallback } from 'react';

export const useInactivityDetector = ({
  inactivityTime = 10000,
  enable = true,
  resetTrigger = [],
}: {
  inactivityTime?: number;
  enable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetTrigger?: any[];
}) => {
  const [isInactive, setIsInactive] = useState(false);

  const resetTimer = useCallback(() => {
    setIsInactive(false);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    resetTimer();
    if (!enable) return;
    const handleActivity = () => {
      resetTimer();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsInactive(true), inactivityTime);
    };

    // 포인터 이동 이벤트 리스너 추가
    window.addEventListener('pointermove', handleActivity);

    // 초기 타이머 설정
    timeoutId = setTimeout(() => setIsInactive(true), inactivityTime);

    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener('pointermove', handleActivity);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enable, inactivityTime, resetTimer, ...resetTrigger]);

  return isInactive;
};
