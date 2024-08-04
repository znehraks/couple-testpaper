import { TestPaper } from '@/components/testPaper/TestPaper';
import { useIsMobile } from '@/hooks/useMobile';
import { IEntireTest } from '@/types/utils';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const TestPaperSectionWithAnswers = ({ entireTestData }: { entireTestData: IEntireTest }) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { testQuestionWithAnswers } = entireTestData;
  console.log('entireTestData', entireTestData);
  const testerAnswers = useMemo(() => {
    return (
      entireTestData.rankings?.find((ranking) => ranking.testerNickname === router.query.name)?.testerAnswers ?? []
    );
  }, [entireTestData.rankings, router.query.name]);

  console.log('testerAnswers', testerAnswers);

  const score = useMemo(() => {
    return (
      testQuestionWithAnswers.filter((question, index) => {
        return testerAnswers[index]?.text === question.answer;
      }).length * 10
    );
  }, [testQuestionWithAnswers, testerAnswers]);

  if (isMobile) {
    return (
      <TestPaper.MobileLayout>
        <TestPaper.MobileHeader
          headerInfo={{ testType: entireTestData.testType, maker: entireTestData.maker }}
          score={score}
        />
        <TestPaper.MobileQuestionLayout>
          {testQuestionWithAnswers.map((question, index) => (
            <TestPaper.Question
              isCorrect={testerAnswers[index]?.text === question.answer}
              submittedAnswerIndex={testerAnswers[index + 1]?.index}
              key={question.question}
              question={question}
              index={index}
            />
          ))}
        </TestPaper.MobileQuestionLayout>
      </TestPaper.MobileLayout>
    );
  }
  return (
    <TestPaper.Layout>
      <TestPaper.Header headerInfo={{ testType: entireTestData.testType, maker: entireTestData.maker }} score={score} />
      <TestPaper.BodyLayout>
        <TestPaper.QuestionLayout>
          {testQuestionWithAnswers.slice(0, Math.round(testQuestionWithAnswers.length / 2)).map((question, index) => (
            <TestPaper.Question
              submittedAnswerIndex={testerAnswers[index]?.index}
              isCorrect={testerAnswers[index]?.text === question.answer}
              key={index}
              question={question}
              index={index}
            />
          ))}
        </TestPaper.QuestionLayout>
        <TestPaper.QuestionLayout>
          {testQuestionWithAnswers.slice(Math.round(testQuestionWithAnswers.length / 2)).map((question, index) => (
            <TestPaper.Question
              submittedAnswerIndex={testerAnswers[index + 5]?.index}
              isCorrect={testerAnswers[index + 5]?.text === question.answer}
              key={index + 5}
              question={question}
              index={index + 5}
            />
          ))}
        </TestPaper.QuestionLayout>
      </TestPaper.BodyLayout>
    </TestPaper.Layout>
  );
};
