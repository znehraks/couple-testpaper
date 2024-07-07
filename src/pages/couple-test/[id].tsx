import { Layout } from '@/components/Layout';
import { QuestionList } from '@/components/testQuestion/QuestionList';
import { QuestionListMobile } from '@/components/testQuestion/QuestionListMobile';
import { useMobile } from '@/hooks/useMobile';
import { getCoupleTest } from '@/services/coupleTests';
import { ICoupleTestResult } from '@/types/utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import { useAtom, useSetAtom } from 'jotai';
import { IsGeneratingPDFAtom } from '@/store';
import { generatePDF } from '@/services/generatePdf';
import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { TimerIcon } from '@/components/icons/Icon';
import { QuestionListStore } from '@/store/QuestionListStore';

export default function CoupleTestPage() {
  const isMobile = useMobile();
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(true);
  const [, setIsGeneratingPDF] = useAtom(IsGeneratingPDFAtom);
  const [isTestStarted, setIsTestStarted] = useAtom(QuestionListStore.IsTestStartedAtom);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQuery<ICoupleTestResult>({
    queryKey: ['coupleTest', id],
    queryFn: () => getCoupleTest(id as string),
  });
  const setTimeLeft = useSetAtom(QuestionListStore.TimeLeftAtom);
  const [isTimeUp, setIsTimeUp] = useAtom(QuestionListStore.IsTimeUpAtom);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    if (!isTestStarted) return;
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
  }, [isTestStarted, setIsTimeUp, setTimeLeft]);

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

  const alarmClockMoveOffset = useMemo(() => {
    if (isMobile) {
      return { scale: 1, x: 140, y: -280 };
    }
    return { scale: 2, x: 400, y: -350 };
  }, [isMobile]);

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

  return (
    <Layout>
      {isTimeUp && <p>Time's up!</p>}
      <motion.div>
        {!isTestStarted && (
          <Modal
            width={isMobile ? '350px' : undefined}
            header={
              <StyledModalHeaderWrapper
                initial={{ opacity: 1 }}
                animate={isAnimationStarted && { opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <span>
                  응시 시작 버튼을 누르면 <strong>10분</strong>간 문제를 풀 수 있습니다.
                </span>
                <span>응시 도중 새로고침을 하면, 처음부터 다시 응시해야 합니다.</span>
              </StyledModalHeaderWrapper>
            }
          >
            <StyledModalContentWrapper>
              <StyledStartButton
                whileHover={{
                  x: [-2, 2, -2, 2, -2, 2, -2, 2, -2, 2],
                  transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
                }}
                onClick={() => setIsAnimationStarted(true)}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={isAnimationStarted ? alarmClockMoveOffset : {}}
                  transition={{ duration: 1 }}
                  onAnimationComplete={() => setIsTestStarted(true)}
                >
                  <TimerIcon size={24} fill={'#FF7979'} />
                </motion.div>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={isAnimationStarted && { opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  응시 시작
                </motion.span>
              </StyledStartButton>
            </StyledModalContentWrapper>
          </Modal>
        )}
      </motion.div>

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

const StyledPdfButton = styled.button<{ visible: boolean }>`
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

const StyledModalHeaderWrapper = styled(motion.div)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  gap: 4px;
  & > span:last-of-type {
    font-size: 22px;
  }
  & > span > strong {
    font-weight: 600;
    color: #ff7979;
    font-size: 32px;
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    & > span:last-of-type {
      font-size: 16px;
    }
    & > span > strong {
      font-weight: 600;
      color: #ff7979;
      font-size: 26px;
      text-decoration: underline;
    }
  }
`;

const StyledModalContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledStartButton = styled(motion.button)`
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
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
