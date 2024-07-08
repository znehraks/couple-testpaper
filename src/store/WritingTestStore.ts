import { atom } from 'jotai';
import { QuestionType } from '../data/questionnaireData';

export type TestCategory = 'forAnyone' | 'forCouple';
const TestCategoryAtom = atom<TestCategory | null>(null);
TestCategoryAtom.debugLabel = 'WritingTest/TestCategory';

const StepAtom = atom<'CATEGORY_INTRO' | 'INTRO' | 'QUESTIONS'>('CATEGORY_INTRO');
StepAtom.debugLabel = 'WritingTest/Step';

const CurrentTestQuestionIndexAtom = atom<number>(0);
CurrentTestQuestionIndexAtom.debugLabel = 'WritingTest/CurrentTestQuestionIndex';

export interface ITest {
  type: QuestionType;
  question: string;
  choices: string[];
}
const QuestionsAtom = atom<ITest[]>([]);
QuestionsAtom.debugLabel = 'WritingTest/Questions';

const AnswersAtom = atom<(number | string)[]>([]);
AnswersAtom.debugLabel = 'WritingTest/Answers';

const IsAdOnAtom = atom<boolean>(false);
IsAdOnAtom.debugLabel = 'WritingTest/IsAdOn';

const IsCompletedAtom = atom<boolean>(false);
IsCompletedAtom.debugLabel = 'WritingTest/IsCompleted';

export const WritingTestStore = {
  TestCategoryAtom,
  StepAtom,
  CurrentTestQuestionIndexAtom,
  QuestionsAtom,
  AnswersAtom,
  IsAdOnAtom,
  IsCompletedAtom,
};
