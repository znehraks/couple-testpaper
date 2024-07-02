import styled from '@emotion/styled';

export const ChoiceWrapper = styled.div<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? '900' : 'normal')};
  & > span {
    user-select: none;
    cursor: pointer;
    color: ${(props) => (props.selected ? 'blue' : 'black')};
  }
`;
