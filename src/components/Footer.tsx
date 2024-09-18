import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

export const Footer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = process.env.NEXT_PUBLIC_COUPANG_IFRAME_URL!;
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterWrapper>
      <StyledCoupangAdWrapper>
        <div>이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</div>
        <div>
          <iframe
            ref={iframeRef}
            width="400"
            height="50"
            referrerPolicy="unsafe-url"
            title="Coupang Partners Advertisement"
          />
        </div>
      </StyledCoupangAdWrapper>
      <div>
        &copy; {currentYear}{' '}
        <a href="https://github.com/znehraks" target="_black">
          znehraks
        </a>
        . All rights reserved.
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    font-family: notoSans;
  }
  @media (max-width: 501px) {
    font-size: 12px;
  }
`;

const StyledCoupangAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    font-size: 11px;
    max-width: 400px;
  }
`;
