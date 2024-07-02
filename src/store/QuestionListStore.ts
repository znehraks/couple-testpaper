import { ITestQuestion } from '@/types/utils';
import { atom } from 'jotai';

export const SelectedAnswersAtom = atom<{
  [index: number]: { question: ITestQuestion; selectedAnswer: { text: string; index: number } };
}>({});
