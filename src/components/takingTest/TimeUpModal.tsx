import { motion } from 'framer-motion';
import { Modal } from '@/components/common/Modal';
import { useAtom } from 'jotai';
import { TakingTestStore, TimesUpModalStep } from '@/store/TakingTestStore';
import { useIsMobile } from '@/hooks/useMobile';
import { useCallback, useMemo } from 'react';
import { useInput } from './hooks/useInput';
import { TestResultStore } from '@/store/TestResultStore';
import {
  StyledErrorMessage,
  StyledInput,
  StyledInputContainer,
  StyledModalContentWrapper,
  StyledModalHeaderWrapper,
  StyledStartButton,
  StyledSubmitButton,
} from './TimeUpModal.styles';
import { useAddTakedTestResult } from '@/services/useTests';
import { ITestSheet, TestType } from '@/types/utils';

export const TimesUpModal = ({ data }: { data: ITestSheet }) => {
  const isMobile = useIsMobile();
  const [timesUpModalStep, setTimesUpModalStep] = useAtom(TakingTestStore.TimesUpModalStepAtom);
  const {
    value: nickname,
    onChange: handleChangeNicknameInput,
    isDirty: isNicknameInputDirty,
  } = useInput({ name: 'nickname', initialValue: '' });

  const [testerResult, setTesterResult] = useAtom(TestResultStore.TesterResultAtom);

  const { mutateAsync } = useAddTakedTestResult({ testType: TestType.romance });
  // const initialize = useCallback(() => {
  //   setTimesUpModalStep(TimesUpModalStep.INTRO);
  //   // TODO 시험보느라 더럽혀졌던 state들 초기화
  // }, [setTimesUpModalStep]);

  const headerContent = useMemo(() => {
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
        return (
          <>
            <motion.span initial={initial} animate={animate} transition={transition}>
              이름 입력하기
            </motion.span>
            <motion.span initial={initial} animate={animate} transition={{ ...transition, delay: 0.5 }}>
              나를 확인할 수 있는 별명을 입력해주세요.
            </motion.span>
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
  }, [timesUpModalStep]);

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

  const handleStep = useCallback(async () => {
    if (timesUpModalStep < TimesUpModalStep.AD) {
      setTimesUpModalStep((prev) => prev + 1);
      return;
    }

    if (!testerResult || !testerResult.testerNickname) return;

    await mutateAsync({
      entireDocumentId: data?.entireDocumentId,
      newRanking: {
        testDateTime: testerResult.testDateTime,
        testerNickname: testerResult.testerNickname,
        testSpentTime: testerResult.testSpentTime,
        testerAnswers: testerResult.testAnswers,
      },
    });

    // TODO 시험 개별 결과 정보도 저장
    // TODO initialize하기
  }, [data?.entireDocumentId, mutateAsync, setTimesUpModalStep, testerResult, timesUpModalStep]);

  const isNicknameEmpty = useMemo(() => {
    return nickname.trim().length === 0;
  }, [nickname]);
  const isNicknameTooLong = useMemo(() => {
    return nickname.trim().length > 8;
  }, [nickname]);

  const disabledNicknameInput = useMemo(() => {
    return isNicknameEmpty || isNicknameTooLong;
  }, [isNicknameEmpty, isNicknameTooLong]);

  const handleCompleteNicknameInput = useCallback(() => {
    if (disabledNicknameInput) return;
    setTesterResult((prev) => {
      if (!prev) return prev;
      return { ...prev, testerNickname: nickname };
    });
    setTimesUpModalStep((prev) => prev + 1);
  }, [disabledNicknameInput, nickname, setTesterResult, setTimesUpModalStep]);

  return (
    <Modal
      width={isMobile ? '350px' : undefined}
      header={<StyledModalHeaderWrapper key={`${timesUpModalStep}`}>{headerContent}</StyledModalHeaderWrapper>}
    >
      <StyledModalContentWrapper>
        {timesUpModalStep === TimesUpModalStep.INPUT && (
          <StyledInputContainer>
            <StyledInput name="nickname" value={nickname} onChange={handleChangeNicknameInput} />
            <StyledErrorMessage>
              {isNicknameInputDirty && isNicknameEmpty && '이름을 입력해주세요.'}
              {isNicknameTooLong && '이름은 8자 이내로 입력해주세요.'}
            </StyledErrorMessage>
            <StyledSubmitButton disabled={disabledNicknameInput} onClick={handleCompleteNicknameInput}>
              입력완료
            </StyledSubmitButton>
          </StyledInputContainer>
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
