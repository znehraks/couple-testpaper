import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { TakingTestStore } from '../../store/TakingTestStore';

import { Choice } from './Choice';
import {
  StyledTestQuestionAnswerContainer,
  StyledTestQuestionBox,
  StyledTestQuestionTitleContainer,
} from './Question.styles';
import { ITest } from '@/types/utils';

interface IQuestionProps {
  question: ITest;
  index: number;
}

export const Question = (props: IQuestionProps) => {
  const { question, index: questionIndex } = props;
  const [selectedAnswers, setSelectedAnswers] = useAtom(TakingTestStore.SelectedAnswersAtom);
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
