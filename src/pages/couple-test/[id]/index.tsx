import { Layout } from '@/components/Layout';
import { useGetCoupleTestSheet } from '@/services/useCoupleTests';
import { useAtomValue } from 'jotai';
import { TakingTestStore } from '@/store/TakingTestStore';
import { TakingTest } from '@/components/takingTest/TakingTest';
import { PDFDownloadButton } from '@/components/PDFDownloadButton';
import { useTimer } from '@/components/takingTest/hooks/useTimer';
import { useAppearPDFDownloadButton } from '@/components/takingTest/hooks/useAppearPDFDownloadButton';
import { useRedirect } from '@/components/takingTest/hooks/useRedirect';

export default function CoupleTestTakingPage() {
  const { data, isLoading, isError } = useGetCoupleTestSheet();
  const isTestEnded = useAtomValue(TakingTestStore.IsTestEndedAtom);
  useTimer();
  useAppearPDFDownloadButton();
  useRedirect({
    redirectCondition: data?.testQuestions.length === 0,
    redirectPath: '/couple-test',
  });

  if (isLoading || isError || !data) return null;
  return (
    <Layout>
      <TakingTest.ReadyModal />
      <PDFDownloadButton />
      <TakingTest.TestPaperSection />
      {isTestEnded && <TakingTest.TimesUpModal />}
    </Layout>
  );
}
