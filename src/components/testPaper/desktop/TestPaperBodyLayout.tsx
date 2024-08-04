import { ReactNode } from 'react';
import { StyledTestQuestionWrapper } from './TestPaperLayout.styles';

export const TestPaperBodyLayout = ({ children }: { children: ReactNode }) => {
  return <StyledTestQuestionWrapper>{children}</StyledTestQuestionWrapper>;
};
