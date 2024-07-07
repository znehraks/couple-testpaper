import styled from '@emotion/styled';

interface IBackdropProps {
  zIndex?: number;
}
export const Backdrop = ({ zIndex = 999 }: IBackdropProps) => {
  return <StyledBackdropWrapper zIndex={zIndex} />;
};

const StyledBackdropWrapper = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ zIndex }) => zIndex};
  backdrop-filter: blur(4px);
`;
