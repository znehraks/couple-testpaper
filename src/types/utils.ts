import { ITest } from '@/store/WritingTestStore';

export interface ITestWithAnswer extends ITest {
  answer: string;
}

export interface ITestResult {
  maker: string;
  status: string;
  testQuestions: ITest[];
}
export interface ITestWithAnswerResult {
  maker: string;
  status: string;
  testQuestionWithAnswers: ITestWithAnswer[];
}

export interface IRanking {
  testerNickname: string;
  testScore: number;
  testDateTime: string;
  testSpentTime: number;
}
export interface IAddCoupleTestSheetPayload extends ITestResult {
  testType: 'couple';
  createdAt: string;
  entireDocumentId: string;
}

export interface IAddCoupleTestSheetResponse extends IAddCoupleTestSheetPayload {
  id: string;
}
export interface IAddCoupleTestEntirePayload extends ITestWithAnswerResult {
  testType: 'couple';
  createdAt: string;
  rankings?: IRanking[];
}

export interface IAddCoupleTestEntireResponse extends IAddCoupleTestEntirePayload {
  id: string;
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
  [index: number]: { question: ITest; selectedAnswer: ISelectedAnswer };
}
