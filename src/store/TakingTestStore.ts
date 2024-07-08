import { ITestQuestion } from '@/types/utils';
import { formatTime } from '@/utils';
import { atom } from 'jotai';

const IsTestStartedAtom = atom<boolean>(false);
IsTestStartedAtom.debugLabel = 'TakingTest/IsTestStarted';

const IsTestEndedAtom = atom<boolean>(false);
IsTestEndedAtom.debugLabel = 'TakingTest/IsTestEnded';

const SelectedAnswersAtom = atom<{
  [index: number]: { question: ITestQuestion; selectedAnswer: { text: string; index: number } };
}>({});
SelectedAnswersAtom.debugLabel = 'TakingTest/SelectedAnswers';

const TimeLeftAtom = atom<number>(5);
TimeLeftAtom.debugLabel = 'TakingTest/TimeLeft';

const FormatTimeLeftAtom = atom((get) => {
  return formatTime(get(TimeLeftAtom));
});
FormatTimeLeftAtom.debugLabel = 'TakingTest/FormatTimeLeft';

const IsTimeUpAtom = atom<boolean>(false);
IsTimeUpAtom.debugLabel = 'TakingTest/IsTimeUp';

export const TakingTestStore = {
  IsTestStartedAtom,
  IsTestEndedAtom,
  SelectedAnswersAtom,
  TimeLeftAtom,
  FormatTimeLeftAtom,
  IsTimeUpAtom,
};
