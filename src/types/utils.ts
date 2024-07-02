import { ITest } from '@/store/QuestionnaireStore';

export interface ITestQuestion extends ITest {
  answer: string;
}

export interface ITestResult {
  maker: string;
  status: string;
  testQuestions: ITestQuestion[];
}

export interface ICoupleTestResult extends ITestResult {
  testType: 'couple';
  createdAt: string;
}

export const testTypeMap = {
  couple: '연애',
  parent: '부모님',
};
