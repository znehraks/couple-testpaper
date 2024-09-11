import styled from '@emotion/styled';

export const StyledWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  padding: 8px;
  width: 100dvw;
  height: 100dvh;
`;
export const StyledContentWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: ${(props) => (props.isMobile ? '0' : '0 48px')};
`;
