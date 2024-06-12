/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Intro } from './Intro';
import { Step } from './Step';
import { ITestQuestion } from '@/types/utils';
import { fiveChoiceQuestions, multipleChoiceQuestions, requiredQuestions } from './questionnaireData';
import { useAtom, useAtomValue } from 'jotai';
import { QuestionsAtom, StepAtom, TestCategoryAtom } from '../store/questionnaireStore';

// const simulationQuestions = [];
interface IQuestionnaireProps {
  onSubmit: (result: ITestQuestion[]) => void;
}
const Questionnaire = ({ onSubmit }: IQuestionnaireProps) => {
  const [step, setStep] = useAtom(StepAtom);
  const testCategory = useAtomValue(TestCategoryAtom);
  const [questions, setQuestions] = useAtom(QuestionsAtom);

  // 문제 바꾸기 혹은 선지 바꾸기 기능 추가하기
  // 문제를 드래그 앤 드롭으로 선택할 수 있도록 기능 추가?

  // 1,2번 응답에 따라, 뒷 질문 다르게 구성
  // 1번 이름 혹은 별명 -> 시험지에 사용할 이름
  // 2번 연애 상태 -> 연애 상태에 따라 질문 다르게 구성
  // 3번 시험지를 풀 상대 정하기 -> 연인에게 풀게할건지, 친구에게 풀게할건지, 아니면 불특정 다수에게 풀게할건지 선택
  useEffect(() => {
    if (!testCategory) return;
    if (testCategory === 'forAnyone') {
      const selectedMultipleChoiceQuestions = multipleChoiceQuestions.map((question) => {
        const choices = question[1] as string[];
        const shuffled = choices.sort(() => Math.random() - 0.5);
        return [question[0], [...shuffled.slice(0, 4), '이 중에 없다']];
      });
      const selectedFiveChoiceQuestions = fiveChoiceQuestions.map((question) => {
        return [question[0], question[1]];
      });
      setQuestions([...requiredQuestions, ...selectedMultipleChoiceQuestions, ...selectedFiveChoiceQuestions]);
    } else {
    }
  }, [setQuestions, testCategory]);

  useEffect(() => {
    setStep(0);
  }, [setStep]);

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {step === 0 && <Intro />}
      {step > 0 && testCategory && questions.length > 0 && <Step onSubmit={onSubmit} />}
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
