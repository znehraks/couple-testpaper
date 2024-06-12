import { atom } from 'jotai';

export type TestCategory = 'forAnyone' | 'forCouple';
export const TestCategoryAtom = atom<TestCategory | null>(null);
export const StepAtom = atom<number>(0);
export const QuestionsAtom = atom<(string | string[])[][]>([]);
export const AnswersAtom = atom<(number | string)[]>([]);
