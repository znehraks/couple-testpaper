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
  font-size: 24px;
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
  position: relative;
`;

export const StyledContentTitleTooltipWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 22px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  & > div:last-of-type {
    margin-top: 4px;
  }
  @media (max-width: 501px) {
    font-size: 12px;
  }
`;

export const StyledContentTitle = styled(motion.h1)<{
  mobileFontSize?: number;
}>`
  padding: 8px;
  font-size: 48px;
  text-align: center;
  word-break: keep-all;
  @media (max-width: 501px) {
    font-size: ${({ mobileFontSize }) => (mobileFontSize ? mobileFontSize : 28)}px;
  }
`;
export const StyledContentDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContentDescription = styled(motion.p)<{ fontSize?: number }>`
  word-break: keep-all;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 22)}px;
  & > strong {
    font-weight: bold;
    color: #ff6b6b;
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 4 : 28)}px;
  }
  @media (max-width: 501px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize - 4 : 18)}px;
    & > strong {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : 20)}px;
    }
  }
`;
