import styled from '@emotion/styled';

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 24px;
`;

export const StyledMenu = styled.div`
  transition: background-color 0.2s ease-in-out;
  width: 120px;
  height: 120px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
