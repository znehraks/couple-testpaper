import { StyledTestWrapper } from './TestPaperLayout.styles';
import { ReactNode } from 'react';

export const TestPaperLayout = ({ children }: { children: ReactNode }) => {
  return <StyledTestWrapper id="pdf-content">{children}</StyledTestWrapper>;
};
