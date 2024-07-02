import { ITestResult } from '@/types/utils';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnswersAtom, QuestionsAtom, CurrentTestQuestionIndexAtom, StepAtom } from '../../store/QuestionnaireStore';
import {
  StyledButton,
  StyledChoiceContainer,
  StyledContentButtonContainer,
  StyledHelperText,
  StyledInput,
  StyledQuestionContainer,
  StyledStepWrapper,
} from './Step.styles';
import { StyledContentDescription, StyledContentTitle, StyledContentTitleWrapper } from './styles';

interface IStepProps {
  onSubmit: (result: ITestResult) => void;
}
export const Step = ({ onSubmit }: IStepProps) => {
  const [currentTestQuestionIndex, setCurrentTestQuestionIndex] = useAtom(CurrentTestQuestionIndexAtom);
  const [, setStep] = useAtom(StepAtom);
  const [questions] = useAtom(QuestionsAtom);
  const [, setAnswers] = useAtom(AnswersAtom);
  const [inputValue, setInputValue] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [tempAnswers, setTempAnswers] = useState<{ [step: number]: string }>({});

  const isSubjective = useMemo(() => {
    return questions[currentTestQuestionIndex].choices.length === 0;
  }, [questions, currentTestQuestionIndex]);
  const isValid = useMemo(() => {
    if (isSubjective) {
      if (inputValue && inputValue.length > 0 && inputValue.length <= 8) {
        return true;
      }
      return false;
    }
    return tempAnswers[currentTestQuestionIndex] !== undefined;
  }, [isSubjective, inputValue, tempAnswers, currentTestQuestionIndex]);

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
    if (currentTestQuestionIndex === 0) {
      setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: inputValue }));
    } else {
      setAnswers((prev) => [...prev, tempAnswers[currentTestQuestionIndex]]);
    }
    setCurrentTestQuestionIndex((prev) => prev + 1);
  }, [inputValue, isValid, setAnswers, setCurrentTestQuestionIndex, currentTestQuestionIndex, tempAnswers]);

  const handleSubmit = useCallback(() => {
    const testQuestions = questions.map((question, index) => {
      return {
        ...question,
        answer: tempAnswers[index],
      };
    });

    onSubmit({
      testQuestions: testQuestions.slice(2),
      maker: testQuestions[0].answer,
      status: testQuestions[1].answer,
    });
    setAnswers([]);
    setTempAnswers({});
    setCurrentTestQuestionIndex(0);
  }, [onSubmit, questions, setAnswers, setCurrentTestQuestionIndex, tempAnswers]);

  const { question, choices } = useMemo(
    () => questions[currentTestQuestionIndex],
    [questions, currentTestQuestionIndex],
  );

  console.log(tempAnswers);

  const description = useMemo(() => {
    switch (currentTestQuestionIndex) {
      case 0:
        return '이름이 부담스럽다면 별명도 좋아요.';
      default:
        return '';
    }
  }, [currentTestQuestionIndex]);

  useEffect(() => {
    if (inputValue.length <= 8) {
      setHelperText('');
    }
  }, [inputValue.length]);

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
              if (inputValue.length >= 8) {
                setHelperText('이름은 8자 까지 가능해요.');
                setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: e.target.value.slice(0, 8) }));
              }
              setInputValue(e.target.value.slice(0, 8));
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
      <StyledHelperText>{helperText}</StyledHelperText>
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
