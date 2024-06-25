import styled from '@emotion/styled';
import { Choice } from './Choice';
import { ITestQuestion } from '@/types/utils';
import { useState } from 'react';

interface IQuestionProps {
  question: ITestQuestion;
  index: number;
}

export const Question = (props: IQuestionProps) => {
  const { question, index } = props;
  const [selectedChoiceNumber, setSelectedChoiceNumber] = useState<number>();
  return (
    <StyledTestQuestionBox key={index}>
      <StyledTestQuestionTitleContainer>
        {index + 1}. {question.question}
      </StyledTestQuestionTitleContainer>
      <StyledTestQuestionAnswerContainer>
        {question.choices.map((choice, choiceIndex) => (
          <Choice
            key={choiceIndex}
            index={choiceIndex}
            choice={choice}
            selected={selectedChoiceNumber === choiceIndex}
            setSelectedChoiceNumber={setSelectedChoiceNumber}
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
