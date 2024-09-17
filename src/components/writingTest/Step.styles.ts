import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
`;

export const StyledHelperText = styled(motion.p)`
  font-size: 20px;
  color: #e7617c;
  font-weight: 800;
  position: absolute;
  bottom: 46px;
`;

export const StyledContentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
export const StyledButton = styled.button<{ disabled?: boolean }>`
  transition: background-color 0.2s ease-in-out;
  font-size: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.1)' : '#ffffff')};
  color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.3)' : '#000000')};
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
`;

export const StyledQuestionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledChoiceContainer = styled.div`
  position: relative;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  @media (max-width: 501px) {
    font-size: 24px;
    & > div > input {
      margin-top: 6px;
    }
  }
`;

export const StyledContentChoiceTooltipWrapper = styled.div`
  width: 280px;
  position: absolute;
  font-size: 22px;
  display: flex;
  flex-direction: row;
  left: 100%;
  top: 50%;
  & > div:last-of-type {
    margin-top: 6px;
  }
`;

export const StyledInput = styled.input`
  padding: 0 12px;
  font-size: 36px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 501px) {
    width: 60%;
  }
`;
