/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import { QuestionsContainer } from './styles';

type QuestionListProps = {
  questions: string[];
};

const QuestionList = ({ questions }: QuestionListProps) => (
  <QuestionsContainer>
    {questions.map((question, index) => (
      <motion.div key={index} initial={{ x: -100 }} animate={{ x: 0 }}>
        {question} 
      </motion.div>
    ))}
  </QuestionsContainer>
);

export default QuestionList;
