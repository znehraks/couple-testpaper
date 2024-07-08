import { IsDownloadBtnVisibleAtom } from '@/store';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const useAppearPDFDownloadButton = () => {
  const setIsDownloadBtnVisible = useSetAtom(IsDownloadBtnVisibleAtom);
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleWheel = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsDownloadBtnVisible(true);
      timeout = setTimeout(() => {
        setIsDownloadBtnVisible(false);
      }, 5000);
    };
    handleWheel();
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [setIsDownloadBtnVisible]);
};
