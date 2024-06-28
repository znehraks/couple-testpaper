import styled from '@emotion/styled';
import { Choice } from './Choice';
import { ITestQuestion } from '@/types/utils';
import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { SelectedAnswersAtom } from '../store/QuestionListStore';

interface IQuestionProps {
  question: ITestQuestion;
  index: number;
}

export const Question = (props: IQuestionProps) => {
  const { question, index: questionIndex } = props;
  const [selectedAnswers, setSelectedAnswers] = useAtom(SelectedAnswersAtom);
  const handleClickChoice = useCallback(
    (questionIndex: number) => (choiceIndex: number) => {
      setSelectedAnswers((prev) => {
        const temp = { ...prev };
        if (prev[questionIndex]?.selectedAnswer.index === choiceIndex) {
          delete temp[questionIndex];
          return temp;
        }
        return {
          ...prev,
          [questionIndex]: {
            question,
            selectedAnswer: {
              text: question.choices[choiceIndex],
              index: choiceIndex,
            },
          },
        };
      });
    },
    [question, setSelectedAnswers],
  );

  return (
    <StyledTestQuestionBox key={questionIndex}>
      <StyledTestQuestionTitleContainer>
        {questionIndex + 1}. {question.question}
      </StyledTestQuestionTitleContainer>
      <StyledTestQuestionAnswerContainer>
        {question.choices.map((choice, choiceIndex) => (
          <Choice
            key={choiceIndex}
            index={choiceIndex}
            choice={choice}
            selected={selectedAnswers[questionIndex]?.selectedAnswer.index === choiceIndex}
            handleClickChoice={handleClickChoice(questionIndex)}
          />
        ))}
      </StyledTestQuestionAnswerContainer>
    </StyledTestQuestionBox>
  );
};

const StyledTestQuestionBox = styled.div`
  font-family: NanumMyeongjo;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 20%;
  * {
    font-family: NanumMyeongjo;
  }
  @media (max-width: 501px) {
    font-family: NanumMyeongjo;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 48px 0px;
    * {
      font-family: NanumMyeongjo;
    }
  }
`;

const StyledTestQuestionTitleContainer = styled.div`
  word-break: keep-all;
`;

const StyledTestQuestionAnswerContainer = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
