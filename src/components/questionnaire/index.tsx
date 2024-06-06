/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Intro } from './Intro';
import { Step } from './Step';
import { ITestQuestion } from '@/types/utils';
import { fiveChoiceQuestions, multipleChoiceQuestions, requiredQuestions } from './questionnaireData';

// const simulationQuestions = [];
interface IQuestionnaireProps {
  onSubmit: (result: ITestQuestion[]) => void;
}
const Questionnaire = ({ onSubmit }: IQuestionnaireProps) => {
  const [step, setStep] = useState<number>(0);
  const [questions, setQuestions] = useState<(string | string[])[][]>([]);
  const [, setAnswers] = useState<(number | string)[]>([]);

  // 문제 바꾸기 혹은 선지 바꾸기 기능 추가하기
  // 문제를 드래그 앤 드롭으로 선택할 수 있도록 기능 추가?
  useEffect(() => {
    const selectedMultipleChoiceQuestions = multipleChoiceQuestions.map((question) => {
      const choices = question[1] as string[];
      const shuffled = choices.sort(() => Math.random() - 0.5);
      return [question[0], [...shuffled.slice(0, 4), '이 중에 없다']];
    });
    const selectedFiveChoiceQuestions = fiveChoiceQuestions.map((question) => {
      return [question[0], question[1]];
    });
    setQuestions([...requiredQuestions, ...selectedMultipleChoiceQuestions, ...selectedFiveChoiceQuestions]);
  }, []);

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {step === 0 && <Intro setStep={setStep} />}
      {step > 0 && (
        <Step step={step} setStep={setStep} questions={questions} setAnswers={setAnswers} onSubmit={onSubmit} />
      )}
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export default Questionnaire;
