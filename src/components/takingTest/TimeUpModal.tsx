import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { useAtom } from 'jotai';
import { TakingTestStore } from '@/store/TakingTestStore';
import { useIsMobile } from '@/hooks/useMobile';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

export const TimesUpModal = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isTimesUpModalOpen, setIsTimesUpModalOpen] = useAtom(TakingTestStore.IsTimesUpModalOpenAtom);
  const [timesUpModalStep, setTimesUpModalStep] = useAtom(TakingTestStore.TimesUpModalStepAtom);

  const buttonText = useMemo(() => {
    switch (timesUpModalStep) {
      case 0:
        return '결과 보기';
      case 1:
        return '입력 완료';
      default:
        return '결과 보기';
    }
  }, [timesUpModalStep]);

  const handleStep = useCallback(() => {
    if (timesUpModalStep < 2) {
      setTimesUpModalStep((prev) => prev + 1);
      return;
    }
    setIsTimesUpModalOpen(false);
    router.push(`/couple-test/${router.query.id}/result`);
  }, [router, setIsTimesUpModalOpen, setTimesUpModalStep, timesUpModalStep]);

  if (!isTimesUpModalOpen) return null;
  return (
    <Modal
      width={isMobile ? '350px' : undefined}
      header={
        <StyledModalHeaderWrapper>
          <span>시간이 다 됐어요.</span>
          <span>결과를 확인하러 가볼까요?.</span>
        </StyledModalHeaderWrapper>
      }
    >
      <StyledModalContentWrapper>
        <StyledStartButton
          whileHover={{
            scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
            transition: { duration: 6, repeat: Infinity, repeatType: 'loop' },
          }}
          onClick={handleStep}
        >
          <motion.span>{buttonText}</motion.span>
        </StyledStartButton>
      </StyledModalContentWrapper>
    </Modal>
  );
};

const StyledModalHeaderWrapper = styled(motion.div)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
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
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
