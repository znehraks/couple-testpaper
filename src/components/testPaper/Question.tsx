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
import Image from 'next/image';

interface IQuestionProps {
  question: ITest;
  index: number;
  submittedAnswerIndex?: number;
  isCorrect?: boolean;
}

export const Question = (props: IQuestionProps) => {
  const { question, index: questionIndex, submittedAnswerIndex, isCorrect } = props;

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

  // 원래 답은 갖고있되, 표시해주진말고, 사용자가 입력한 answer도(ranking 등에) 갖고있어야함
  return (
    <StyledTestQuestionBox key={questionIndex}>
      <StyledTestQuestionTitleContainer onDragStart={(e) => e.preventDefault()}>
        {isCorrect !== undefined && (
          <div>
            <Image src={isCorrect ? '/correct.png' : '/wrong.png'} alt="correct" layout="fill" objectFit="cover" />
          </div>
        )}
        {questionIndex + 1}. {question.question}
      </StyledTestQuestionTitleContainer>
      <StyledTestQuestionAnswerContainer>
        {question.choices.map((choice, choiceIndex) => (
          <Choice
            key={choiceIndex}
            index={choiceIndex}
            choice={choice}
            selected={
              submittedAnswerIndex !== undefined
                ? submittedAnswerIndex === choiceIndex
                : selectedAnswers[questionIndex]?.selectedAnswer.index === choiceIndex
            }
            handleClickChoice={!submittedAnswerIndex ? handleClickChoice(questionIndex) : undefined}
          />
        ))}
      </StyledTestQuestionAnswerContainer>
    </StyledTestQuestionBox>
  );
};
