import { ISelectedAnswersKeyMap } from '@/types/utils';
import { formatTime } from '@/utils';
import { atom } from 'jotai';

const IsTestStartedAtom = atom<boolean>(false);
IsTestStartedAtom.debugLabel = 'TakingTest/IsTestStarted';

const IsTestEndedAtom = atom<boolean>(false);
IsTestEndedAtom.debugLabel = 'TakingTest/IsTestEnded';

const SelectedAnswersAtom = atom<ISelectedAnswersKeyMap>({});
SelectedAnswersAtom.debugLabel = 'TakingTest/SelectedAnswers';

const TimeLeftAtom = atom<number>(30);
TimeLeftAtom.debugLabel = 'TakingTest/TimeLeft';

const FormatTimeLeftAtom = atom((get) => {
  return formatTime(get(TimeLeftAtom));
});
FormatTimeLeftAtom.debugLabel = 'TakingTest/FormatTimeLeft';

const IsTimeUpAtom = atom<boolean>(false);
IsTimeUpAtom.debugLabel = 'TakingTest/IsTimeUp';

export enum TimesUpModalStep {
  INTRO,
  INPUT,
  AD,
}
const TimesUpModalStepAtom = atom<TimesUpModalStep>(TimesUpModalStep.INTRO);
TimesUpModalStepAtom.debugLabel = 'TakingTest/TimesUpModalStep';

// TODO 나중에 소셜로그인 기능 추가 후에 도입하기
const IsAllowedSocialLoginAtom = atom<boolean>(false);
IsAllowedSocialLoginAtom.debugLabel = 'TakingTest/IsAllowedSocialLoginAtom';

export const TakingTestStore = {
  IsTestStartedAtom,
  IsTestEndedAtom,
  SelectedAnswersAtom,
  TimeLeftAtom,
  FormatTimeLeftAtom,
  IsTimeUpAtom,
  TimesUpModalStepAtom,
  IsAllowedSocialLoginAtom,
};
