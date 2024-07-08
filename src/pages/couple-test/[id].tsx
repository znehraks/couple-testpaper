import { Layout } from '@/components/Layout';
import { useGetCoupleTest } from '@/services/useCoupleTests';
import { useAtomValue } from 'jotai';
import { TakingTestStore } from '@/store/TakingTestStore';
import { TakingTest } from '@/components/takingTest';
import { PDFDownloadButton } from '@/components/PDFDownloadButton';
import { useTimer } from '@/components/takingTest/hooks/useTimer';
import { useAppearPDFDownloadButton } from '@/components/takingTest/hooks/useAppearPDFDownloadButton';

export default function CoupleTestPage() {
  const { data, isLoading, isError } = useGetCoupleTest();
  const isTimeUp = useAtomValue(TakingTestStore.IsTimeUpAtom);
  useTimer();
  useAppearPDFDownloadButton();
  if (isLoading || isError || !data) return null;
  return (
    <Layout>
      <TakingTest.ReadyModal />
      <PDFDownloadButton />
      <TakingTest.TestPaperSection />
      {isTimeUp && <TakingTest.TimesUp />}
    </Layout>
  );
}
