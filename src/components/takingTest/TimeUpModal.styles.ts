import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledModalHeaderWrapper = styled(motion.div)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  gap: 4px;
  & > span:not(:first-of-type) {
    font-size: 22px;
  }
  strong {
    font-weight: 600;
    color: #ff9999;
    font-size: 22px;
    text-decoration: underline;
  }
  & > span > strong {
    strong {
      font-size: 32px;
    }
  }
  @media (max-width: 500px) {
    font-size: 24px;
    & > span:not(:first-of-type) {
      font-size: 16px;
    }
    strong {
      font-weight: 600;
      color: #ff9999;
      font-size: 16px;
      text-decoration: underline;
    }
    & > span > strong {
      font-size: 24px;
    }
  }
`;

export const StyledModalContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  width: 50%;
  height: 100%;
  position: relative;
`;
export const StyledInput = styled.input`
  outline: 1px solid #aaa;
  padding: 8px 12px;
  font-size: 28px;
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  bottom: 64px;
  font-size: 22px;
  color: #ff9999;
  font-weight: 800;
`;

export const StyledSubmitButton = styled.button<{ disabled: boolean }>`
  transition: background 0.2s ease-in-out;
  font-size: 24px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  width: 120px;
  padding: 8px 12px;
  border-radius: 8px;

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}
`;

export const StyledStartButton = styled(motion.button)`
  transition: background 0.2s ease-in-out;
  width: 120px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 800;
  color: grey;
  position: relative;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
