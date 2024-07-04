import { ITestQuestion } from '@/types/utils';
import { formatTime } from '@/utils';
import { atom } from 'jotai';

export const IsTestStartedAtom = atom<boolean>(false);
export const IsTestEndedAtom = atom<boolean>(false);

export const SelectedAnswersAtom = atom<{
  [index: number]: { question: ITestQuestion; selectedAnswer: { text: string; index: number } };
}>({});

export const TimeLeftAtom = atom<number>(600);
export const FormatTimeLeftAtom = atom((get) => {
  return formatTime(get(TimeLeftAtom));
});
export const IsTimeUpAtom = atom<boolean>(false);
