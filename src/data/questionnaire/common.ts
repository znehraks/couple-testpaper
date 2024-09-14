import { ITest } from '@/types/utils';

export enum QuestionType {
  REQUIRED = 'required',
  MY_INFO = 'myInfo',
  COMMON = 'common',
  COUPLE = 'couple',
}

export const requiredQuestions: ITest[] = [
  { type: QuestionType.REQUIRED, question: '당신의 이름은?', choices: [] }, // 주관식
];
