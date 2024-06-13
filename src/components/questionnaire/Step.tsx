import { ITestQuestion } from '@/types/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useCallback, useMemo, useState } from 'react';
import { AnswersAtom, QuestionsAtom, StepAtom } from '../store/questionnaireStore';

interface IStepProps {
  onSubmit: (result: ITestQuestion[]) => void;
}
export const Step = ({ onSubmit }: IStepProps) => {
  const [step, setStep] = useAtom(StepAtom);
  const [questions] = useAtom(QuestionsAtom);
  const [, setAnswers] = useAtom(AnswersAtom);
  const [inputValue, setInputValue] = useState<string>('');
  const [tempAnswers, setTempAnswers] = useState<{ [step: number]: string }>({});

  console.log('questions', questions);
  console.log('step', step);
  console.log(questions[step]);
  const isSubjective = useMemo(() => {
    return questions[step].choices.length === 0;
  }, [questions, step]);
  const isValid = useMemo(() => {
    if (isSubjective && inputValue) {
      return true;
    }
    return tempAnswers[step] !== undefined;
  }, [inputValue, isSubjective, step, tempAnswers]);

  const handleGoBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, [setStep]);
  const handleGoNext = useCallback(() => {
    if (!isValid) {
      return;
    }
    if (step === 1) {
      setTempAnswers((prev) => ({ ...prev, [step]: inputValue }));
    } else {
      setAnswers((prev) => [...prev, tempAnswers[step]]);
    }
    setStep((prev) => prev + 1);
  }, [inputValue, isValid, setAnswers, setStep, step, tempAnswers]);

  const handleSubmit = useCallback(() => {
    const result = questions.map((question, index) => {
      return {
        questions,
        answers:tempAnswers
      };
    });
    onSubmit(result);
    setAnswers([]);
    setTempAnswers({});
    setStep(0);
  }, [onSubmit, questions, setAnswers, setStep, tempAnswers]);

  // const [quest, choices] = useMemo(() => questions[step - 1] as [string, string[]], [questions, step]);

  const { question, choices } = useMemo(() => questions[step], [questions, step]);

  const description = useMemo(() => {
    switch (step) {
      case 0:
        return '이름이 부담스럽다면 별명도 좋아요.';
      default:
        return '';
    }
  }, [step]);

  return (
    <StyledStepWrapper>
      <StyledContentTitleWrapper>
        <StyledContentTitle>{`${step + 1}. ${question}`}</StyledContentTitle>
        <StyledContentDescription>{description}</StyledContentDescription>
      </StyledContentTitleWrapper>
      <StyledQuestionContainer>
        {isSubjective ? (
          <StyledInput
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setAnswers((prev) => [...prev, inputValue]);
                setTempAnswers((prev) => ({ ...prev, [step]: inputValue }));
                setInputValue('');
                handleGoNext();
              }
            }}
          />
        ) : (
          <StyledChoiceContainer>
            {choices.map((choice, index) => (
              <div key={index}>
                <input
                  id={`choice-${index}`}
                  type="radio"
                  name="choice"
                  checked={tempAnswers[step] === choice}
                  value={choice}
                  onChange={(e) => {
                    setTempAnswers((prev) => ({ ...prev, [step]: e.target.value }));
                  }}
                />
                <label htmlFor={`choice-${index}`}>{choice}</label>
              </div>
            ))}
          </StyledChoiceContainer>
        )}
      </StyledQuestionContainer>
      <StyledContentButtonContainer>
        {step >= 0 && <StyledButton onClick={handleGoBack}>이전</StyledButton>}
        {step >= 0 && step < questions.length - 1 && (
          <StyledButton disabled={!isValid} onClick={handleGoNext}>
            다음
          </StyledButton>
        )}
        {step === questions.length - 1 && <StyledButton onClick={handleSubmit}>출제 완료</StyledButton>}
      </StyledContentButtonContainer>
    </StyledStepWrapper>
  );
};

const StyledStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
const StyledContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledContentTitle = styled(motion.h1)`
  font-size: 48px;
  text-align: center;
  word-break: keep-all;
`;

const StyledContentDescription = styled(motion.p)`
  font-size: 22px;
`;

const StyledContentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
const StyledButton = styled.button<{ disabled?: boolean }>`
  transition: background-color 0.2s ease-in-out;
  font-size: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const StyledQuestionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledChoiceContainer = styled.div`
  font-size: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

const StyledInput = styled.input`
  padding: 0 12px;
  font-size: 36px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
`;
