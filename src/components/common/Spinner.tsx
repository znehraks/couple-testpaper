import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </StyledSpinnerWrapper>
  );
};

const StyledSpinner = styled(motion.div)`
  width: 64px;
  height: 64px;
  border: 8px solid #eb8291;
  border-top: 4px solid transparent;
  border-radius: 50%;
`;

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  @supports (height: webkit-fill-available) {
    height: webkit-fill-available;
  }
`;
