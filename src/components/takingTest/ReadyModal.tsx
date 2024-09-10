import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { TimerIcon } from '@/components/icons/Icon';
import { useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { useIsMobile } from '@/hooks/useMobile';

export const ReadyModal = () => {
  const isMobile = useIsMobile();
  const [takingTestStatus, setTakingTestStatus] = useAtom(TakingTestStore.TakingTestStatusAtom);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const alarmClockMoveOffset = useMemo(() => {
    if (isMobile) {
      return { scale: 1, x: 140, y: -280 };
    }
    return { scale: 2, x: 400, y: -350 };
  }, [isMobile]);

  if (takingTestStatus !== TakingTestStatus.READY) return null;
  return (
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
            onAnimationComplete={() => {
              setTakingTestStatus(TakingTestStatus.ING);
            }}
          >
            <TimerIcon size={24} fill={'#FF9999'} />
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
  );
};

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
    color: #ff9999;
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
      color: #ff9999;
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
