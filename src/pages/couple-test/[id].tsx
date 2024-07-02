import { Layout } from '@/components/Layout';
import { QuestionList } from '@/components/testQuestion/QuestionList';
import { QuestionListMobile } from '@/components/testQuestion/QuestionListMobile';
import { useMobile } from '@/hooks/useMobile';
import { getCoupleTest } from '@/services/coupleTests';
import { ICoupleTestResult } from '@/types/utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { IsGeneratingPDFAtom } from '@/store';
import { generatePDF } from '@/services/generatePdf';
import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { TimerIcon } from '@/components/icons/Icon';

export default function CoupleTestPage() {
  const isMobile = useMobile();
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(true);
  const [, setIsGeneratingPDF] = useAtom(IsGeneratingPDFAtom);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQuery<ICoupleTestResult>({
    queryKey: ['coupleTest', id],
    queryFn: () => getCoupleTest(id as string),
  });

  useEffect(() => {
    if (data?.testQuestions.length === 0) {
      router.replace('/couple-test');
      return;
    }
  }, [router, data?.testQuestions.length]);

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <></>;
  }
  const { testQuestions, testType, maker, status } = data;

  // 시험지를 pdf파일로 만들어서 다운로드 받을 수 있도록 함
  // 응시 시작을 모달처럼 띄워서 뒤에 백드롭으로 어둡게처리하고, 응시 시작을 누르면 응시 시작되도록 함
  // 그 전까지는 눌러도 반응이 안되도록 함
  return (
    <Layout>
      <Modal
        header={
          <StyledModalHeaderWrapper>
            응시 시작 버튼을 누르면 <strong>10분</strong>간 문제를 풀 수 있습니다.
          </StyledModalHeaderWrapper>
        }
      >
        <StyledModalContentWrapper>
          <StyledStartButton>
            <TimerIcon size={24} fill={'#FF7979'} />
            응시 시작
          </StyledStartButton>
        </StyledModalContentWrapper>
      </Modal>
      <StyledPdfButton
        visible={isDownloadBtnVisible}
        onClick={async () => {
          setIsGeneratingPDF(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await generatePDF();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsGeneratingPDF(false);
        }}
      >
        시험지 다운로드
      </StyledPdfButton>
      {isMobile ? (
        <QuestionListMobile testType={testType} maker={maker} status={status} testQuestions={testQuestions} />
      ) : (
        <QuestionList testType={testType} maker={maker} status={status} testQuestions={testQuestions} />
      )}
    </Layout>
  );
}

const StyledPdfButton = styled(motion.button)<{ visible: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50%;
  transform: translateX(50%);
  transition:
    box-shadow,
    opacity 0.2s ease-in-out;
  font-size: 24px;
  padding: 4px 8px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 2;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  &:hover {
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModalHeaderWrapper = styled.div`
  & > strong {
    font-weight: 600;
    color: #ff7979;
    font-size: 38px;
    text-decoration: underline;
  }
`;

const StyledModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledStartButton = styled.button`
  transition: background 0.2s ease-in-out;
  width: 120px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 800;
  color: grey;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
