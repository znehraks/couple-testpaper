import { useIsMobile } from '@/hooks/useMobile';
import { TestPaper } from './testPaper/TestPaper';
import { useGetCoupleTest } from '@/services/useCoupleTests';

export const TestPaperSection = () => {
  const isMobile = useIsMobile();
  const { data, isLoading, isError } = useGetCoupleTest();
  if (isLoading || isError || !data) return null;
  const { testQuestions } = data;

  console.log('data', data);
  console.log('testQuestions', testQuestions);

  if (isMobile) {
    return (
      <TestPaper.MobileLayout>
        <TestPaper.MobileHeader />
        <TestPaper.MobileQuestionLayout>
          {testQuestions.map((question, index) => (
            <TestPaper.Question key={question.question} question={question} index={index} />
          ))}
        </TestPaper.MobileQuestionLayout>
        <TestPaper.MobileSubmitButton />
      </TestPaper.MobileLayout>
    );
  }
  return (
    <TestPaper.Layout>
      <TestPaper.Header />
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
        <TestPaper.SubmitButton />
      </TestPaper.BodyLayout>
    </TestPaper.Layout>
  );
};
