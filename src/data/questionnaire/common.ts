import { ITest } from '@/types/utils';

export enum QuestionType {
  REQUIRED = 'required',
  MY_INFO = 'myInfo',
  COMMON = 'common',
  COUPLE = 'couple',
}

export const currentStatus = ['자발적 솔로', '비자발적 솔로', '연애중', '결혼', '기타'];

export const requiredQuestions: ITest[] = [
  { type: QuestionType.REQUIRED, question: '당신의 이름은?', choices: [] }, // 주관식
  { type: QuestionType.REQUIRED, question: '나는 지금?', choices: currentStatus },
];
