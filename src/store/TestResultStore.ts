import { ISelectedAnswer } from '@/types/utils';
import { atom } from 'jotai';

const TesterNicknameInputAtom = atom<string>('');
TesterNicknameInputAtom.debugLabel = 'TestResult/TesterNicknameInput';

export interface ITesterResult {
  testId: string;
  testerNickname?: string;
  testDateTime: string;
  testSpentTime: number;
  testAnswers: ISelectedAnswer[];
}
const TesterResultAtom = atom<ITesterResult | null>(null);
TesterResultAtom.debugLabel = 'TestResult/TesterResult';


export const TestResultStore = {
  TesterNicknameInputAtom,
  TesterResultAtom,
};
