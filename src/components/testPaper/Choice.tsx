import React, { memo } from 'react';
import { ChoiceWrapper } from './Choice.styles';

const circleNumberMap = ['①', '②', '③', '④', '⑤'];
interface IChoiceProps {
  index: number;
  choice: string;
  selected: boolean;
  handleClickChoice?: (choiceIndex: number) => void;
}
export const Choice = memo(
  (props: IChoiceProps) => {
    const { index, choice, selected, handleClickChoice } = props;
    return (
      <ChoiceWrapper key={index} selected={selected}>
        <span
          onClick={() => {
            handleClickChoice?.(index);
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
