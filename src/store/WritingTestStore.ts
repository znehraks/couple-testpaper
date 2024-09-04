import { atom } from 'jotai';
import { ITest } from '@/types/utils';

export type TestCategory = 'forAnyone' | 'forCouple';
const TestCategoryAtom = atom<TestCategory | null>(null);
TestCategoryAtom.debugLabel = 'WritingTest/TestCategory';

const StepAtom = atom<'TUTORIAL' | 'CATEGORY_INTRO' | 'INTRO' | 'QUESTIONS' | 'COMPLETE'>('TUTORIAL');
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
  TestCategoryAtom,
  StepAtom,
  CurrentTestQuestionIndexAtom,
  QuestionsAtom,
  AnswersAtom,
  IsAdOnAtom,
  IsCompletedAtom,
  TempTestSheetIdAtom,
};
