/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { CategoryIntro } from './CategoryIntro';
import { Step } from './Step';
import { ITestWithAnswerResult } from '@/types/utils';
import { commonQuestions, myInfoQuestions, requiredQuestions } from '../../data/questionnaire/romance-friends';
import { useAtom, useAtomValue } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import { Intro } from './Intro';
import { StyledContentWrapper } from './styles';
import { Tutorial } from './Tutorial';
import { Complete } from './Complete';

interface IRomanceQuestionnaireProps {
  onSubmit: (result: ITestWithAnswerResult) => void;
}
const RomanceQuestionnaire = ({ onSubmit }: IRomanceQuestionnaireProps) => {
  const step = useAtomValue(WritingTestStore.StepAtom);
  const testCategory = useAtomValue(WritingTestStore.TestCategoryAtom);
  const [questions, setQuestions] = useAtom(WritingTestStore.QuestionsAtom);

  useEffect(() => {
    if (testCategory === 'forAnyone') {
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
    }
    // else if (testCategory === 'forCouple') {
    // }
  }, [setQuestions, testCategory]);

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {step === 'TUTORIAL' && <Tutorial />}
      {step === 'CATEGORY_INTRO' && <CategoryIntro />}
      {step === 'INTRO' && <Intro />}
      {step === 'QUESTIONS' && questions.length && <Step onSubmit={onSubmit} />}
      {step === 'COMPLETE' && <Complete />}
    </StyledContentWrapper>
  );
};

export default RomanceQuestionnaire;
