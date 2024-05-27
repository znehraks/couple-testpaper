import { QuestionsContainer } from './styles';
import { ITestQuestion } from '@/types/utils';

type QuestionListProps = {
  questions: ITestQuestion[];
};

const QuestionList = ({ questions }: QuestionListProps) => (
  <QuestionsContainer>
    {questions.map((question, index) => (
      <div key={index}>
        {question.question}
        {question.answers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
      </div>
    ))}
  </QuestionsContainer>
);

export default QuestionList;
