import { atom } from 'jotai';
import { QuestionType } from '../data/questionnaireData';

export type TestCategory = 'forAnyone' | 'forCouple';
export const TestCategoryAtom = atom<TestCategory | null>(null);

export const StepAtom = atom<'CATEGORY_INTRO' | 'INTRO' | 'QUESTIONS'>('CATEGORY_INTRO');
export const CurrentTestQuestionIndexAtom = atom<number>(0);

export interface ITest {
  type: QuestionType;
  question: string;
  choices: string[];
}
export const QuestionsAtom = atom<ITest[]>([]);
export const AnswersAtom = atom<(number | string)[]>([]);
