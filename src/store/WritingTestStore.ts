import { atom } from 'jotai';
import { ITest } from '@/types/utils';

export type Parent = 'father' | 'mother';
const MeAtom = atom<Parent | null>(null);
MeAtom.debugLabel = 'WritingTest/Me';

export type TestTaker =
  | 'forFriendsMale'
  | 'forFriendsFemale'
  | 'forCoupleMale'
  | 'forCoupleFemale'
  | 'forChildren'
  | 'forEachother';

const TestTakerAtom = atom<TestTaker | null>(null);
TestTakerAtom.debugLabel = 'WritingTest/TestTaker';

const StepAtom = atom<'SELECT_PARENT' | 'SELECT_TEST_TAKER' | 'READY' | 'TUTORIAL' | 'QUESTIONS' | 'COMPLETE'>(
  'SELECT_TEST_TAKER',
);
StepAtom.debugLabel = 'WritingTest/Step';

const CurrentTestQuestionIndexAtom = atom<number>(0);
CurrentTestQuestionIndexAtom.debugLabel = 'WritingTest/CurrentTestQuestionIndex';

const QuestionsAtom = atom<ITest[]>([]);
QuestionsAtom.debugLabel = 'WritingTest/Questions';

const AnswersAtom = atom<(number | string)[]>([]);
AnswersAtom.debugLabel = 'WritingTest/Answers';

const IsAdOnAtom = atom<boolean>(false);
IsAdOnAtom.debugLabel = 'WritingTest/IsAdOn';

const IsCompletedAtom = atom<boolean>(false);
IsCompletedAtom.debugLabel = 'WritingTest/IsCompleted';

const TempTestSheetIdAtom = atom<string | null>(null);
TempTestSheetIdAtom.debugLabel = 'WritingTest/TempTestSheetId';

export const WritingTestStore = {
  TestTakerAtom,
  MeAtom,
  StepAtom,
  CurrentTestQuestionIndexAtom,
  QuestionsAtom,
  AnswersAtom,
  IsAdOnAtom,
  IsCompletedAtom,
  TempTestSheetIdAtom,
};
