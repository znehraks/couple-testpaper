import { useState, useEffect, useCallback } from 'react';

export const useInactivityDetector = ({
  inactivityTime = 10000,
  enable = true,
}: {
  inactivityTime?: number;
  enable?: boolean;
}) => {
  const [isInactive, setIsInactive] = useState(false);

  const resetTimer = useCallback(() => {
    setIsInactive(false);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

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
  }, [enable, inactivityTime, resetTimer]);

  return isInactive;
};
