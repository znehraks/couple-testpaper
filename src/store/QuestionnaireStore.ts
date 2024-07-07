import { atom } from 'jotai';
import { QuestionType } from '../data/questionnaireData';

export type TestCategory = 'forAnyone' | 'forCouple';
const TestCategoryAtom = atom<TestCategory | null>(null);
TestCategoryAtom.debugLabel = 'TestCategory';

const StepAtom = atom<'CATEGORY_INTRO' | 'INTRO' | 'QUESTIONS'>('CATEGORY_INTRO');
StepAtom.debugLabel = 'Step';

const CurrentTestQuestionIndexAtom = atom<number>(0);
CurrentTestQuestionIndexAtom.debugLabel = 'CurrentTestQuestionIndex';

export interface ITest {
  type: QuestionType;
  question: string;
  choices: string[];
}
const QuestionsAtom = atom<ITest[]>([]);
QuestionsAtom.debugLabel = 'Questions';

const AnswersAtom = atom<(number | string)[]>([]);
AnswersAtom.debugLabel = 'Answers';

export const QuestionnaireStore = {
  TestCategoryAtom,
  StepAtom,
  CurrentTestQuestionIndexAtom,
  QuestionsAtom,
  AnswersAtom,
};
