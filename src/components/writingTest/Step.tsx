import { ITestWithAnswerResult } from '@/types/utils';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';
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
import { EditableText } from '../EditableText';

interface IStepProps {
  onSubmit: (result: ITestWithAnswerResult) => void;
}
export const Step = ({ onSubmit }: IStepProps) => {
  const [currentTestQuestionIndex, setCurrentTestQuestionIndex] = useAtom(
    WritingTestStore.CurrentTestQuestionIndexAtom,
  );
  const [, setStep] = useAtom(WritingTestStore.StepAtom);
  const [questions, setQuestions] = useAtom(WritingTestStore.QuestionsAtom);
  const [inputValue, setInputValue] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [tempAnswers, setTempAnswers] = useState<{ [step: number]: string }>({});
  const { question, choices } = useMemo(
    () => questions[currentTestQuestionIndex],
    [questions, currentTestQuestionIndex],
  );

  const [tempQuestion, setTempQuestion] = useState(question);
  const [tempChoices, setTempChoices] = useState(choices);

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
      setStep('READY');
      return;
    }
    setCurrentTestQuestionIndex((prev) => prev - 1);
  }, [currentTestQuestionIndex, setCurrentTestQuestionIndex, setStep]);

  const handleGoNext = useCallback(() => {
    if (!isValid || !tempQuestion || tempQuestion.length === 0) {
      return;
    }
    setQuestions((prev) => {
      const _prev = [...prev];
      _prev[currentTestQuestionIndex] = {
        ..._prev[currentTestQuestionIndex],
        question: tempQuestion,
        choices: tempChoices,
      };
      return _prev;
    });
    if (currentTestQuestionIndex === 0) {
      setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: inputValue }));
    }
    setCurrentTestQuestionIndex((prev) => prev + 1);
    setTempQuestion(questions[currentTestQuestionIndex + 1].question);
    setTempChoices(questions[currentTestQuestionIndex + 1].choices);
  }, [
    isValid,
    tempQuestion,
    setQuestions,
    currentTestQuestionIndex,
    setCurrentTestQuestionIndex,
    questions,
    tempChoices,
    inputValue,
  ]);

  const handleSubmit = useCallback(() => {
    const _testQuestionWithAnswers = questions.map((question, index) => {
      return {
        ...question,
        answer: tempAnswers[index],
      };
    });
    onSubmit({
      testQuestionWithAnswers: _testQuestionWithAnswers.slice(1),
      maker: _testQuestionWithAnswers[0].answer,
      status: _testQuestionWithAnswers[1].answer,
    });
    setTempAnswers({});
    setCurrentTestQuestionIndex(0);
  }, [onSubmit, questions, setCurrentTestQuestionIndex, tempAnswers]);

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

  if (!questions.length) return null;

  return (
    <StyledStepWrapper>
      <StyledContentTitleWrapper>
        <StyledContentTitle mobileFontSize={question.length > 10 ? 24 : 28}>
          {`${currentTestQuestionIndex + 1}. `}
          <EditableText
            initialText={tempQuestion}
            onTextChange={setTempQuestion}
            isEditable={currentTestQuestionIndex !== 0}
          />
        </StyledContentTitle>

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
                  style={{
                    transform: 'scale(1.5)',
                  }}
                  id={`choice-${index}`}
                  type="radio"
                  name="choice"
                  checked={tempAnswers[currentTestQuestionIndex] === choice}
                  value={choice}
                  onChange={(e) => {
                    setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: e.target.value }));
                  }}
                />
                <EditableText
                  initialText={choice}
                  onTextChange={(newText) => {
                    const _tempChoices = [...tempChoices];
                    _tempChoices[index] = newText;
                    setTempChoices(_tempChoices);
                  }}
                  isEditable={true}
                />
              </div>
            ))}
          </StyledChoiceContainer>
        )}
      </StyledQuestionContainer>
      {currentTestQuestionIndex === 0 && <StyledHelperText>{helperText}</StyledHelperText>}
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
