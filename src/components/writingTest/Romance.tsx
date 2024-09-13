/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { CategoryIntro } from './CategoryIntro';
import { Step } from './Step';
import { ITestWithAnswerResult } from '@/types/utils';
import {
  commonQuestions,
  myInfoQuestions,
  requiredQuestions,
} from '../../data/questionnaire/romance/friends/questionnaireData';
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

  // 문제 바꾸기 혹은 선지 바꾸기 기능 추가하기
  // 문제를 드래그 앤 드롭으로 선택할 수 있도록 기능 추가?

  // 1,2번 응답에 따라, 뒷 질문 다르게 구성
  // 1번 이름 혹은 별명 -> 시험지에 사용할 이름
  // 2번 연애 상태 -> 연애 상태에 따라 질문 다르게 구성
  // 3번 시험지를 풀 상대 정하기 -> 연인에게 풀게할건지, 친구에게 풀게할건지, 아니면 불특정 다수에게 풀게할건지 선택
  useEffect(() => {
    if (!testCategory) return;
    if (testCategory === 'forAnyone') {
      // console.log(requiredQuestions.length); // 2
      // console.log(myInfoQuestions.length); // 4
      // console.log(commonQuestions.length); // 13

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
      // console.log('selectedMyInfoQuestions', selectedMyInfoQuestions);

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
      // console.log('selectedCommonQuestions', selectedCommonQuestions);
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
