import { IsGeneratingPDFAtom } from '@/store';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isGeneratingPDF] = useAtom(IsGeneratingPDFAtom);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(document.body.clientWidth <= 501);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return !isGeneratingPDF && isMobile;
};
