const circleNumberMap = ['①', '②', '③', '④', '⑤'];
import styled from '@emotion/styled';
import React, { memo } from 'react';

interface IChoiceProps {
  index: number;
  choice: string;
  selected: boolean;
  handleClickChoice: (choiceIndex: number) => void;
}
export const Choice = memo(
  (props: IChoiceProps) => {
    const { index, choice, selected, handleClickChoice } = props;
    return (
      <ChoiceWrapper key={index} selected={selected}>
        <span
          onClick={() => {
            handleClickChoice(index);
          }}
        >
          {circleNumberMap[index]} {choice}
        </span>
      </ChoiceWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected;
  },
);

const ChoiceWrapper = styled.div<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? '900' : 'normal')};
  & > span {
    user-select: none;
    cursor: pointer;
    color: ${(props) => (props.selected ? 'blue' : 'black')};
  }
`;
