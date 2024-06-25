import { ITest } from '@/components/store/QuestionnaireStore';

export interface ITestQuestion extends ITest {
  answer: string;
}
