import { ITestQuestion } from '@/types/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

interface IStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questions: (string | string[])[][];
  setAnswers: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  onSubmit: (result: ITestQuestion[]) => void;
}
export const Step = ({ step, setStep, questions, setAnswers, onSubmit }: IStepProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tempAnswers, setTempAnswers] = useState<{ [step: number]: string }>({});

  const handleGoBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, [setStep]);
  const handleGoNext = useCallback(() => {
    if (step === 1) {
      setTempAnswers((prev) => ({ ...prev, [step]: inputValue }));
    } else {
      setAnswers((prev) => [...prev, tempAnswers[step]]);
    }
    setStep((prev) => prev + 1);
  }, [inputValue, setAnswers, setStep, step, tempAnswers]);

  const handleSubmit = useCallback(() => {
    const result = questions.map((question, index) => {
      return {
        question: question[0] as string,
        answers: question[1] as string[],
        answerKeys: [tempAnswers[index + 1]],
      };
    });
    setAnswers([]);
    setTempAnswers({});
    setStep(0);
    onSubmit(result);
  }, [onSubmit, questions, setAnswers, setStep, tempAnswers]);

  const isSubjective = useMemo(() => {
    return questions[step - 1][1].length === 0;
  }, [questions, step]);

  const [quest, choices] = useMemo(() => questions[step - 1] as [string, string[]], [questions, step]);

  return (
    <StyledStepWrapper>
      <StyledContentTitleWrapper>
        <StyledContentTitle>{`${step}. ${quest}`}</StyledContentTitle>
        <StyledContentDescription>{isSubjective ? '주관식' : '객관식'}</StyledContentDescription>
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
        {step > 0 && <StyledButton onClick={handleGoBack}>이전</StyledButton>}
        {step > 0 && step < questions.length && <StyledButton onClick={handleGoNext}>다음</StyledButton>}
        {step === questions.length && <StyledButton onClick={handleSubmit}>출제 완료</StyledButton>}
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
const StyledButton = styled.button`
  transition: background-color 0.2s ease-in-out;
  font-size: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
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
  font-size: 24px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
`;
