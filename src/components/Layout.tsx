import { SideAdComponent } from './SideAdComponent';
import { useMobile } from '@/hooks/useMobile';
import { UpDownAdComponent } from './UpDownAdComponent';
import { StyledContentWrapper, StyledWrapper } from './Layout.styles';

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
