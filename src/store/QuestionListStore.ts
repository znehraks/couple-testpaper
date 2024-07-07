import { ITestQuestion } from '@/types/utils';
import { formatTime } from '@/utils';
import { atom } from 'jotai';

const IsTestStartedAtom = atom<boolean>(false);
IsTestStartedAtom.debugLabel = 'QuestionList/IsTestStarted';

const IsTestEndedAtom = atom<boolean>(false);
IsTestEndedAtom.debugLabel = 'QuestionList/IsTestEnded';

const SelectedAnswersAtom = atom<{
  [index: number]: { question: ITestQuestion; selectedAnswer: { text: string; index: number } };
}>({});
SelectedAnswersAtom.debugLabel = 'QuestionList/SelectedAnswers';

const TimeLeftAtom = atom<number>(600);
TimeLeftAtom.debugLabel = 'QuestionList/TimeLeft';

const FormatTimeLeftAtom = atom((get) => {
  return formatTime(get(TimeLeftAtom));
});
FormatTimeLeftAtom.debugLabel = 'QuestionList/FormatTimeLeft';

const IsTimeUpAtom = atom<boolean>(false);
IsTimeUpAtom.debugLabel = 'QuestionList/IsTimeUp';

export const QuestionListStore = {
  IsTestStartedAtom,
  IsTestEndedAtom,
  SelectedAnswersAtom,
  TimeLeftAtom,
  FormatTimeLeftAtom,
  IsTimeUpAtom,
};
