import { useIsMobile } from '@/hooks/useMobile';
import { TestPaper } from '../testPaper/TestPaper';
import { ITestSheet } from '@/types/utils';

export const TestPaperSection = ({ testSheetData }: { testSheetData: ITestSheet }) => {
  const isMobile = useIsMobile();
  const { testQuestions } = testSheetData;
  if (isMobile) {
    return (
      <TestPaper.MobileLayout>
        <TestPaper.MobileHeader headerInfo={{ testType: testSheetData.testType, maker: testSheetData.maker }} />
        <TestPaper.MobileQuestionLayout>
          {testQuestions.map((question, index) => (
            <TestPaper.Question key={question.question} question={question} index={index} />
          ))}
        </TestPaper.MobileQuestionLayout>
        <TestPaper.MobileSubmitButton testQuestions={testSheetData.testQuestions} />
      </TestPaper.MobileLayout>
    );
  }
  return (
    <TestPaper.Layout>
      <TestPaper.Header headerInfo={{ testType: testSheetData.testType, maker: testSheetData.maker }} />
      <TestPaper.BodyLayout>
        <TestPaper.QuestionLayout>
          {testQuestions.slice(0, Math.round(testQuestions.length / 2)).map((question, index) => (
            <TestPaper.Question key={index} question={question} index={index} />
          ))}
        </TestPaper.QuestionLayout>
        <TestPaper.QuestionLayout>
          {testQuestions.slice(Math.round(testQuestions.length / 2)).map((question, index) => (
            <TestPaper.Question key={index + 5} question={question} index={index + 5} />
          ))}
        </TestPaper.QuestionLayout>
        <TestPaper.SubmitButton testQuestions={testSheetData.testQuestions} />
      </TestPaper.BodyLayout>
    </TestPaper.Layout>
  );
};
