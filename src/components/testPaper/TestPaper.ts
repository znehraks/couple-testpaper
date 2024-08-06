import { Choice } from './Choice';
import { Question } from './Question';
import { TestPaperHeader } from './desktop/TestPaperHeader';
import { TestPaperLayout } from './desktop/TestPaperLayout';
import { StyledTestQuestionWrapper, StyledTestSectionWrapper } from './desktop/TestPaperLayout.styles';
import { TestPaperMobileLayout } from './mobile/TestPaperMobileLayout';
import { TestPaperSubmitButton } from './desktop/TestPaperSubmitButton';
import { TestPaperMobileHeader } from './mobile/TestPaperMobileHeader';
import { StyledMobileTestQuestionWrapper } from './mobile/TestPaperMobileLayout.styles';
import { TestPaperMobileSubmitButton } from './mobile/TestPaperMobileSubmitButton';

export const TestPaper = {
  Choice,
  Question,
  Layout: TestPaperLayout,
  Header: TestPaperHeader,
  BodyLayout: StyledTestQuestionWrapper,
  QuestionLayout: StyledTestSectionWrapper,
  SubmitButton: TestPaperSubmitButton,
  MobileLayout: TestPaperMobileLayout,
  MobileHeader: TestPaperMobileHeader,
  MobileQuestionLayout: StyledMobileTestQuestionWrapper,
  MobileSubmitButton: TestPaperMobileSubmitButton,
};
