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
          <UpDownAdComponent />
          <UpDownAdComponent side="down" />
        </>
      ) : (
        <>
          <SideAdComponent />
          <SideAdComponent side="right" />
        </>
      )}
      <StyledContentWrapper isMobile={isMobile}>{content}</StyledContentWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  padding: 8px;
`;
const StyledContentWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: ${(props) => (props.isMobile ? '0' : '0 48px')};
`;
