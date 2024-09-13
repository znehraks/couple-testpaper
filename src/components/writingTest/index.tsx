/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { SelectTestTaker } from './SelectTestTaker';
import { Step } from './Step';
import { ITestWithAnswerResult } from '@/types/utils';
import { commonQuestions, myInfoQuestions } from '../../data/questionnaire/friends';
import { useAtom, useAtomValue } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import { Ready } from './Ready';
import { StyledContentWrapper } from './styles';
import { Tutorial } from './Tutorial';
import { Complete } from './Complete';
import { requiredQuestions } from '@/data/questionnaire/common';
import { useRouter } from 'next/router';
import { SelectParent } from './SelectParent';

interface IWritingTestProps {
  onSubmit: (result: ITestWithAnswerResult) => void;
}
const WritingTest = ({ onSubmit }: IWritingTestProps) => {
  const router = useRouter();
  const step = useAtomValue(WritingTestStore.StepAtom);
  const testCategory = useAtomValue(WritingTestStore.TestTakerAtom);
  const [questions, setQuestions] = useAtom(WritingTestStore.QuestionsAtom);

  useEffect(() => {
    // TODO 이부분을 router에 따라 분기처리 해야함 아니면, Tutorial에서 분기처리 해야함
    const selectedMyInfoQuestions = [...myInfoQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map((quest) => {
        if (quest.choices.length <= 5) {
          return quest;
        }
        return {
          ...quest,
          choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
        };
      });

    const selectedCommonQuestions = [...commonQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8)
      .map((quest) => {
        if (quest.choices.length <= 5) {
          return quest;
        }
        return {
          ...quest,
          choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
        };
      });
    setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
  }, [setQuestions, testCategory]);

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* 부모님 고사일때에만 자기 자신이 아빠인지 엄마인지 선택 */}
      {router.query.testType === 'parents-test' && step === 'SELECT_PARENT' && <SelectParent />}
      {step === 'SELECT_TEST_TAKER' && <SelectTestTaker />}
      {step === 'READY' && <Ready />}
      {step === 'TUTORIAL' && <Tutorial />}
      {step === 'QUESTIONS' && questions.length && <Step onSubmit={onSubmit} />}
      {step === 'COMPLETE' && <Complete />}
    </StyledContentWrapper>
  );
};

export default WritingTest;
