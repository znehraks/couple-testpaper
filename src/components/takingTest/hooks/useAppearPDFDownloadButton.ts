import { IsDownloadBtnVisibleAtom } from '@/store';
import { TakingTestStore } from '@/store/TakingTestStore';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const useAppearPDFDownloadButton = () => {
  const isTimeUp = useAtomValue(TakingTestStore.IsTimeUpAtom);
  const setIsDownloadBtnVisible = useSetAtom(IsDownloadBtnVisibleAtom);
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleWheel = () => {
      if (isTimeUp) return;
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsDownloadBtnVisible(true);
      timeout = setTimeout(() => {
        setIsDownloadBtnVisible(false);
      }, 5000);
    };
    handleWheel();
    document.body.addEventListener('wheel', handleWheel);
    return () => {
      document.body.removeEventListener('wheel', handleWheel);
    };
  }, [isTimeUp, setIsDownloadBtnVisible]);
};
