import { ITest } from '@/store/WritingTestStore';

export interface ITestQuestion extends ITest {
  answer: string;
}

export interface ITestResult {
  maker: string;
  status: string;
  testQuestions: ITestQuestion[];
}

export interface IRanking {
  testerNickname: string;
  testScore: number;
  testDateTime: string;
  testSpentTime: number;
}

export interface ICoupleTestResult extends ITestResult {
  testType: 'couple';
  createdAt: string;
  rankings?: IRanking[];
}

export const testTypeMap = {
  couple: '연애',
  parent: '부모님',
};

export interface ISelectedAnswer {
  text: string;
  index: number;
}
export interface ISelectedAnswersKeyMap {
  [index: number]: { question: ITestQuestion; selectedAnswer: ISelectedAnswer };
}
