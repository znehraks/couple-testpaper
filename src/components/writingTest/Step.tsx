import { ITestWithAnswerResult, TestType } from '@/types/utils';
import { useAtom, useAtomValue } from 'jotai';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';
import {
  StyledButton,
  StyledChoiceContainer,
  StyledContentButtonContainer,
  StyledContentChoiceTooltipWrapper,
  StyledHelperText,
  StyledInput,
  StyledQuestionContainer,
  StyledStepWrapper,
} from './Step.styles';
import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleTooltipWrapper,
  StyledContentTitleWrapper,
} from './styles';
import { EditableText } from '../EditableText';
import { useRouter } from 'next/router';
import { useInactivityDetector } from './useInactivityDetector';
import { TooltipArrowIcon } from '../icons/Icon';
import { useIsMobile } from '@/hooks/useMobile';

interface IStepProps {
  onSubmit: (result: ITestWithAnswerResult) => void;
}
export const Step = ({ onSubmit }: IStepProps) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const testTaker = useAtomValue(WritingTestStore.TestTakerAtom);
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
  const [isTitleTwinkleOff, setIsTitleTwinkleOff] = useState(false);
  const [isChoiceTwinkleOffMap, setIsChoiceTwinkleOffMap] = useState<{ [index: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

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
    setIsTitleTwinkleOff(false);
    setTempQuestion(questions[currentTestQuestionIndex - 1].question);
    setTempChoices(questions[currentTestQuestionIndex - 1].choices);
    setInputValue('');
    setIsChoiceTwinkleOffMap({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
  }, [currentTestQuestionIndex, questions, setCurrentTestQuestionIndex, setStep]);

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
    setInputValue('');
    setTempQuestion(questions[currentTestQuestionIndex + 1].question);
    setTempChoices(questions[currentTestQuestionIndex + 1].choices);
    setIsTitleTwinkleOff(false);
    setIsChoiceTwinkleOffMap({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
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
    if (!testTaker) return;
    const _testQuestionWithAnswers = questions.map((question, index) => {
      if (index === questions.length - 1) {
        return {
          ...question,
          question: tempQuestion,
          choices: tempChoices,
          answer: tempAnswers[index],
        };
      }
      return {
        ...question,
        answer: tempAnswers[index],
      };
    });

    onSubmit({
      testType: (router.query.testType as string).split('-')[0] as TestType,
      testQuestionWithAnswers: _testQuestionWithAnswers.slice(1),
      maker: _testQuestionWithAnswers[0].answer,
      testTaker,
    });
    setTempAnswers({});
    setCurrentTestQuestionIndex(0);
  }, [
    onSubmit,
    questions,
    router.query.testType,
    setCurrentTestQuestionIndex,
    tempAnswers,
    tempChoices,
    tempQuestion,
    testTaker,
  ]);

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

  const isInacitve = useInactivityDetector({
    inactivityTime: 3000,
    resetTrigger: [currentTestQuestionIndex, isTitleTwinkleOff, isChoiceTwinkleOffMap],
  });

  const isContentTitleTooltipVisible = isInacitve && !isTitleTwinkleOff && currentTestQuestionIndex !== 0;

  if (!questions.length) return null;

  return (
    <StyledStepWrapper>
      <StyledContentTitleWrapper>
        {isContentTitleTooltipVisible && (
          <StyledContentTitleTooltipWrapper>
            <TooltipArrowIcon size={isMobile ? 12 : 24} fill="#000" />
            <div>문제를 수정하고 싶다면 클릭 후 수정해주세요.</div>
          </StyledContentTitleTooltipWrapper>
        )}
        <StyledContentTitle mobileFontSize={question.length > 20 ? 22 : 28}>
          {`${currentTestQuestionIndex + 1}. `}
          <EditableText
            key={`question-${currentTestQuestionIndex}`}
            isTwinkle={isContentTitleTooltipVisible}
            initialText={tempQuestion}
            maxLength={40}
            onTextChange={setTempQuestion}
            onClick={() => {
              setIsTitleTwinkleOff(true);
            }}
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
            {choices.map((choice, index) => {
              const isTooltipVisible =
                isInacitve &&
                isTitleTwinkleOff &&
                !isChoiceTwinkleOffMap[index] &&
                Math.min(
                  ...Object.entries(isChoiceTwinkleOffMap)
                    .filter((item) => item[1] === false)
                    .map((item) => Number(item[0])),
                ) === index;
              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                  }}
                >
                  <input
                    style={{
                      transform: 'scale(1.5)',
                    }}
                    id={`choice-${index}`}
                    type="radio"
                    name="choice"
                    checked={tempAnswers[currentTestQuestionIndex] === tempChoices[index]}
                    value={tempChoices[index]}
                    onChange={() => {
                      setTempAnswers((prev) => ({ ...prev, [currentTestQuestionIndex]: tempChoices[index] }));
                    }}
                  />
                  <EditableText
                    key={`choice-${currentTestQuestionIndex}-${index}`}
                    initialText={choice}
                    maxLength={20}
                    onTextChange={(newText) => {
                      const _tempChoices = [...tempChoices];
                      _tempChoices[index] = newText;
                      setTempChoices(_tempChoices);
                    }}
                    onClick={() => {
                      setIsChoiceTwinkleOffMap((prev) => ({ ...prev, [index]: true }));
                    }}
                    isEditable={true}
                    isTwinkle={isTooltipVisible}
                  />
                  {isTooltipVisible && (
                    <StyledContentChoiceTooltipWrapper>
                      <TooltipArrowIcon size={isMobile ? 12 : 24} fill="#000" />
                      <div>선택지를 수정하고 싶다면 클릭 후 수정해주세요.</div>
                    </StyledContentChoiceTooltipWrapper>
                  )}
                </div>
              );
            })}
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
