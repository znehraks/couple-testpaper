import { StyledMobileTestWrapper } from './TestPaperMobileLayout.styles';
import { ReactNode } from 'react';

export const TestPaperMobileLayout = ({ children }: { children: ReactNode }) => {
  return <StyledMobileTestWrapper id="pdf-content">{children}</StyledMobileTestWrapper>;
};
