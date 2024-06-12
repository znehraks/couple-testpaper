const circleNumberMap = ['①', '②', '③', '④', '⑤'];
import styled from '@emotion/styled';
import React from 'react';

interface IChoiceProps {
  index: number;
  answer: string;
  selected: boolean;
  setSelectedChoiceNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const Choice = (props: IChoiceProps) => {
  const { index, answer, selected, setSelectedChoiceNumber } = props;
  return (
    <ChoiceWrapper key={index} selected={selected}>
      <span
        onClick={() => {
          setSelectedChoiceNumber((prev) => {
            if (prev === index) {
              return undefined;
            }
            return index;
          });
        }}
      >
        {circleNumberMap[index]} {answer}
      </span>
    </ChoiceWrapper>
  );
};

const ChoiceWrapper = styled.div<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? '900' : 'normal')};
  & > span {
    user-select: none;
    cursor: pointer;
    color: ${(props) => (props.selected ? 'blue' : 'black')};
  }
`;
