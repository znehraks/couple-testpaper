import { ITestQuestion } from '@/types/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useCallback, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { AnswersAtom, QuestionsAtom, CurrentTestQuestionIndexAtom, StepAtom } from '../store/QuestionnaireStore';

interface IStepProps {
  onSubmit: (result: ITestQuestion[]) => void;
}
export const Step = ({ onSubmit }: IStepProps) => {
  const [currentTestQuestionIndex, setCurrentTestQuestionIndex] = useAtom(CurrentTestQuestionIndexAtom);
  const [, setStep] = useAtom(StepAtom);
  const [questions] = useAtom(QuestionsAtom);
  const [, setAnswers] = useAtom(AnswersAtom);
  const [inputValue, setInputValue] = useState<string>('');
  const [tempAnswers, setTempAnswers] = useState<{ [step: number]: string }>({});

  const isSubjective = useMemo(() => {
    return questions[currentTestQuestionIndex].choices.length === 0;
  }, [questions, currentTestQuestionIndex]);
  const isValid = useMemo(() => {
    if (isSubjective && inputValue) {
      return true;
    }
    return tempAnswers[currentTestQuestionIndex] !== undefined;
  }, [inputValue, isSubjective, currentTestQuestionIndex, tempAnswers]);

  const handleGoBack = useCallback(() => {
    if (currentTestQuestionIndex === 0) {
      setStep('INTRO');
      return;
    }
    setCurrentTestQuestionIndex((prev) => prev - 1);
  }, [currentTestQuestionIndex, setCurrentTestQuestionIndex, setStep]);

  const handleGoNext = useCallback(() => {
    if (!isValid) {
      return;
    }
    if (currentTestQuestionIndex === 1) {
      setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: inputValue }));
    } else {
      setAnswers((prev) => [...prev, tempAnswers[currentTestQuestionIndex]]);
    }
    setCurrentTestQuestionIndex((prev) => prev + 1);
  }, [inputValue, isValid, setAnswers, setCurrentTestQuestionIndex, currentTestQuestionIndex, tempAnswers]);

  const handleSubmit = useCallback(() => {
    const result = questions.map((question, index) => {
      return {
        ...question,
        answer: tempAnswers[index],
      };
    });
    onSubmit(result);
    setAnswers([]);
    setTempAnswers({});
    setCurrentTestQuestionIndex(0);
  }, [onSubmit, questions, setAnswers, setCurrentTestQuestionIndex, tempAnswers]);

  const { question, choices } = useMemo(
    () => questions[currentTestQuestionIndex],
    [questions, currentTestQuestionIndex],
  );

  const description = useMemo(() => {
    switch (currentTestQuestionIndex) {
      case 0:
        return '이름이 부담스럽다면 별명도 좋아요.';
      default:
        return '';
    }
  }, [currentTestQuestionIndex]);

  return (
    <StyledStepWrapper>
      <StyledContentTitleWrapper>
        <StyledContentTitle>{`${currentTestQuestionIndex + 1}. ${question}`}</StyledContentTitle>
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
                setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: inputValue }));
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
                  checked={tempAnswers[currentTestQuestionIndex] === choice}
                  value={choice}
                  onChange={(e) => {
                    setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: e.target.value }));
                  }}
                />
                <label htmlFor={`choice-${index}`}>{choice}</label>
              </div>
            ))}
          </StyledChoiceContainer>
        )}
      </StyledQuestionContainer>
      <StyledContentButtonContainer>
        {currentTestQuestionIndex >= 0 && <StyledButton onClick={handleGoBack}>이전</StyledButton>}
        {currentTestQuestionIndex >= 0 && currentTestQuestionIndex < questions.length - 1 && (
          <StyledButton disabled={!isValid} onClick={handleGoNext}>
            다음
          </StyledButton>
        )}
        {currentTestQuestionIndex === questions.length - 1 && (
          <StyledButton onClick={handleSubmit}>출제 완료</StyledButton>
        )}
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.1)' : '#ffffff')};
  color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.3)' : '#000000')};
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
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
