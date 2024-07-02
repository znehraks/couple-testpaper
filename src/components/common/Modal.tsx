import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { Backdrop } from './Backdrop';

interface IModalProps extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}
export const Modal = (props: IModalProps) => {
  const { width = '450px', height = '300px' } = props;
  return (
    <>
      <Backdrop />
      <StyledModalWrapper width={width} height={height}>
        <div>{props.header}</div>
        <div>{props.children}</div>
        <div>{props.footer}</div>
      </StyledModalWrapper>
    </>
  );
};

const StyledModalWrapper = styled.div<{ width: CSSProperties['width']; height: CSSProperties['height'] }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px 12px;
  }
  & > div:first-of-type {
    font-size: 32px;
    align-self: stretch;
  }
  & > div:nth-of-type(2) {
    flex: 1;
    font-size: 24px;
    align-self: stretch;
  }
  & > div:last-of-type {
    font-size: 24px;
    align-self: stretch;
  }
`;
