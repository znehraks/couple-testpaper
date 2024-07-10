import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { useAtom } from 'jotai';
import { TakingTestStore, TimesUpModalStep } from '@/store/TakingTestStore';
import { useIsMobile } from '@/hooks/useMobile';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

export const TimesUpModal = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [, setIsTimesUpModalOpen] = useAtom(TakingTestStore.IsTimesUpModalOpenAtom);
  const [timesUpModalStep, setTimesUpModalStep] = useAtom(TakingTestStore.TimesUpModalStepAtom);
  const [isAllowedSocialLogin, setIsAllowedSocialLogin] = useAtom(TakingTestStore.IsAllowedSocialLoginAtom);

  const headerText = useMemo(() => {
    const initial = { y: 20, opacity: 0 };
    const animate = { y: 0, opacity: 1 };
    const transition = { duration: 0.5 };
    switch (timesUpModalStep) {
      case TimesUpModalStep.INTRO:
        return (
          <>
            <motion.span initial={initial} animate={animate} transition={{ ...transition }}>
              응시 종료!
            </motion.span>
            <motion.span initial={initial} animate={animate} transition={{ ...transition, delay: 1 }}>
              결과를 확인하러 가볼까요?.
            </motion.span>
          </>
        );
      case TimesUpModalStep.INPUT: {
        if (isAllowedSocialLogin) {
          return (
            <>
              <motion.span initial={initial} animate={animate} transition={transition}>
                로그인 하기
              </motion.span>
              <motion.span initial={initial} animate={animate} transition={{ ...transition, delay: 0.5 }}>
                로그인이 부담스럽다면,{' '}
                <motion.strong
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                  onClick={() => {
                    setIsAllowedSocialLogin(false);
                  }}
                >
                  여기
                </motion.strong>{' '}
                를 눌러 나를 확인할 수 있는 별명을 입력해주세요.
              </motion.span>
            </>
          );
        }
        return (
          <>
            <motion.span initial={initial} animate={animate} transition={transition}>
              이름 입력하기
            </motion.span>
            <motion.span initial={initial} animate={animate} transition={{ ...transition, delay: 0.5 }}>
              로그인을 하지 않으면, 광고 시청 후 결과를 확인할 수 있어요.
            </motion.span>
            <motion.strong
              initial={initial}
              animate={animate}
              transition={{ ...transition, delay: 1 }}
              style={{ display: 'inline-block', cursor: 'pointer' }}
              onClick={() => {
                setIsAllowedSocialLogin(true);
              }}
            >
              그냥 로그인 할래요
            </motion.strong>
          </>
        );
      }
      case TimesUpModalStep.AD:
        return (
          <>
            <motion.span initial={initial} animate={animate} transition={transition}>
              준비 끝
            </motion.span>
            <motion.span initial={initial} animate={animate} transition={{ ...transition, delay: 0.5 }}>
              이제 정말, 결과를 확인하러 가볼까요?.
            </motion.span>
          </>
        );
      default:
        return <></>;
    }
  }, [isAllowedSocialLogin, setIsAllowedSocialLogin, timesUpModalStep]);

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

  return (
    <Modal
      width={isMobile ? '350px' : undefined}
      header={
        <StyledModalHeaderWrapper key={`${timesUpModalStep}${isAllowedSocialLogin}`}>
          {headerText}
        </StyledModalHeaderWrapper>
      }
    >
      <StyledModalContentWrapper>
        {timesUpModalStep === TimesUpModalStep.INPUT && (
          <>{isAllowedSocialLogin ? <>소셜로그인</> : <>아이디 입력 인풋</>}</>
        )}
        {timesUpModalStep !== TimesUpModalStep.INPUT && (
          <StyledStartButton
            whileHover={{
              scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
              transition: { duration: 6, repeat: Infinity, repeatType: 'loop' },
            }}
            onClick={handleStep}
          >
            <motion.span>{buttonText}</motion.span>
          </StyledStartButton>
        )}
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
  & > span:not(:first-of-type) {
    font-size: 22px;
  }
  strong {
    font-weight: 600;
    color: #ff7979;
    font-size: 22px;
    text-decoration: underline;
  }
  & > span > strong {
    strong {
      font-size: 32px;
    }
  }
  @media (max-width: 500px) {
    font-size: 24px;
    & > span:not(:first-of-type) {
      font-size: 16px;
    }
    strong {
      font-weight: 600;
      color: #ff7979;
      font-size: 16px;
      text-decoration: underline;
    }
    & > span > strong {
      font-size: 24px;
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
