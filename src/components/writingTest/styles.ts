import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledMenu = styled.div<{ color?: CSSProperties['color'] }>`
  transition: background-color 0.2s ease-in-out;
  width: 120px;
  height: 120px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: ${({ color }) => color};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 501px) {
    width: 100px;
    height: 100px;
    &:hover {
      background-color: unset;
    }
  }
`;

export const StyledContentWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const StyledContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledContentTitle = styled(motion.h1)<{
  mobileFontSize?: number;
}>`
  font-size: 48px;
  text-align: center;
  word-break: keep-all;
  @media (max-width: 501px) {
    font-size: ${({ mobileFontSize }) => (mobileFontSize ? mobileFontSize : 28)}px;
  }
`;

export const StyledContentDescription = styled(motion.p)`
  font-size: 24px;
  & > strong {
    font-weight: bold;
    color: #ff6b6b;
    font-size: 32px;
  }
  @media (max-width: 501px) {
    font-size: 20px;
    & > strong {
      font-size: 24px;
    }
  }
`;
