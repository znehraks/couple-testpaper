import { ITest } from '@/types/utils';

export enum QuestionType {
  REQUIRED = 'required',
  MY_INFO = 'myInfo',
  COMMON = 'common',
  COUPLE = 'couple',
  FRIENDS = 'friends',
  PARENTS = 'parents',
}

export const requiredQuestions: ITest[] = [
  {
    type: QuestionType.REQUIRED,
    question: '당신의 이름은?',
    description: '이름이 부담스럽다면 별명도 좋아요.',
    choices: [],
  }, // 주관식
];
