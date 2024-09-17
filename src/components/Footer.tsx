import styled from '@emotion/styled';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooterWrapper>
      &copy; {currentYear}{' '}
      <a href="https://github.com/znehraks" target="_black">
        znehraks
      </a>
      . All rights reserved.
    </StyledFooterWrapper>
  );
};

const StyledFooterWrapper = styled.div`
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-family: notoSans;
  font-size: 16px;
  * {
    font-family: notoSans;
  }
  @media (max-width: 501px) {
    font-size: 12px;
  }
`;
