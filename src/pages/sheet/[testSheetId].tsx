import { Layout } from '@/components/Layout';
import { useGetTestSheet } from '@/services/useTests';
import { useAtomValue } from 'jotai';
import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { TakingTest } from '@/components/takingTest/TakingTest';
import { PDFDownloadButton } from '@/components/PDFDownloadButton';
import { useTimer } from '@/components/takingTest/hooks/useTimer';
import { useAppearPDFDownloadButton } from '@/components/takingTest/hooks/useAppearPDFDownloadButton';
import { useRedirect } from '@/components/takingTest/hooks/useRedirect';
import { TestType } from '@/types/utils';
import { useLicenses } from '@/hooks/useLicenses';
import { useEffect } from 'react';
import { Spinner } from '@/components/common/Spinner';

export default function TestSheetPage() {
  const { data, isLoading, isError } = useGetTestSheet({ testType: TestType.romance });
  const takingTestStatus = useAtomValue(TakingTestStore.TakingTestStatusAtom);
  useTimer();
  useAppearPDFDownloadButton();
  useRedirect({
    redirectCondition: data?.testQuestions.length === 0,
    redirectPath: '/romance-test',
  });
  const { sanitizeLicenseNames } = useLicenses(['timerIcon']);
  useEffect(() => {
    return () => {
      sanitizeLicenseNames();
    };
  }, [sanitizeLicenseNames]);

  if (isLoading || isError || !data) return <Spinner />;

  return (
    <Layout>
      <TakingTest.ReadyModal />
      <PDFDownloadButton />
      <TakingTest.TestPaperSection testSheetData={data} />
      {takingTestStatus === TakingTestStatus.FINISH && <TakingTest.TimesUpModal data={data} />}
    </Layout>
  );
}
