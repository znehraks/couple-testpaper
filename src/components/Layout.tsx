import styled from '@emotion/styled';
import { SideAdComponent } from './SideAdComponent';
import { useMobile } from '@/hooks/useMobile';
import { UpDownAdComponent } from './UpDownAdComponent';

interface ILayoutProps extends React.PropsWithChildren {
  children: React.ReactNode;
}
export const Layout = ({ children: content }: ILayoutProps) => {
  const isMobile = useMobile();
  return (
    <StyledWrapper isMobile={isMobile}>
      {isMobile ? (
        <>
          <SideAdComponent />
          <SideAdComponent side="right" />
        </>
      ) : (
        <>
          <UpDownAdComponent />
          <UpDownAdComponent side="down" />
        </>
      )}
      <StyledContentWrapper>{content}</StyledContentWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  width: 100vw;
  height: 100vh;
  padding: 8px;
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 48px;
  min-width: 1080px;
`;
