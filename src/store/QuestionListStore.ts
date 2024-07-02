import { ITestQuestion } from '@/types/utils';
import { atom } from 'jotai';

export const IsTestStarted = atom<boolean>(false);
export const IsTestEnded = atom<boolean>(false);

export const SelectedAnswersAtom = atom<{
  [index: number]: { question: ITestQuestion; selectedAnswer: { text: string; index: number } };
}>({});
