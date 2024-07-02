import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface IBackdropProps {
  zIndex?: number;
}
export const Backdrop = ({ zIndex = 999 }: IBackdropProps) => {
  return (
    <StyledBackdropWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} zIndex={zIndex} />
  );
};

const StyledBackdropWrapper = styled(motion.div)<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ zIndex }) => zIndex};
  backdrop-filter: blur(4px);
`;
