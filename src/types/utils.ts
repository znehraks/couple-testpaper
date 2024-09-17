import { QuestionType } from '@/data/questionnaire/common';

/**
 * 시험 종류
 * 연애고사, 부모님고사
 */
export enum TestType {
  friends = 'friends',
  parents = 'parents',
  couple = 'couple',
}

/**
 * 시험문제
 */
export interface ITest {
  /**
   * 문제 유형(필수질문, 개인적인 질문, 공통질문, 연인질문)
   */
  type: QuestionType;

  /**
   * 시험 문항
   */
  question: string;

  /**
   * 시험 문항 설명
   */
  description?: string;

  /**
   * 시험 선지
   */
  choices: string[];

  /**
   * 주관식으로 입력 받는 문제의 경우 입력창에 미리 표시할 텍스트
   */
  placeholder?: string;

  /**
   * 주관식으로 입력 받고, 시험지는 알아서 보기가 4개 채워져서 출제되는 문제에서 나머지 4개의 보기
   */
  randomChoices?: string[];
}
/**
 * 시험문제 + 답
 */
export interface ITestWithAnswer extends ITest {
  answer: string;
}

/**
 * 시험결과
 */
export interface ITestResult {
  /**
   * 시험 출제자
   */
  maker: string;
  /**
   * 출제자의 연애 상태
   */
  status: string;
  /**
   * 시험 문제들
   */
  testQuestions: ITest[];
}

/**
 * 시험결과 + 답
 */
export interface ITestWithAnswerResult {
  /**
   * 시험 출제자
   */
  maker: string;
  /**
   * 시험 타입
   */
  testType: TestType;
  /**
   * 출제자의 연애 상태
   */
  status: string;
  /**
   * 시험 문제와 답이 함께있는 타입
   */
  testQuestionWithAnswers: ITestWithAnswer[];
}

/**
 * 시험 순위
 */
export interface IRanking {
  /**
   * 응시자 닉네임
   */
  testerNickname: string;

  /**
   * 응시자 점수
   */
  testScore?: number;

  /**
   * 응시 시각
   */
  testDateTime: string;

  /**
   * 응시하는데에 걸린 시간
   */
  testSpentTime: number;

  /**
   * 응시자 답
   */
  testerAnswers: ISelectedAnswer[];
}

/**
 * 시험지 데이터를 추가하는 쿼리
 */
export interface IAddCoupleTestSheetQuery extends ITestResult {
  testType: TestType;
  createdAt: string;
  entireDocumentId: string;
}

/**
 * 시험지 데이터 api 응답
 */

export interface ITestSheet extends IAddCoupleTestSheetQuery {
  id: string;
}

/**
 * 시험 전체 데이터를 추가하는 쿼리
 */
export interface IAddCoupleTestEntireQuery extends ITestWithAnswerResult {
  testType: TestType;
  createdAt: string;
  rankings?: IRanking[];
}

/**
 * 시험 전체 데이터를 추가하고 오는 응답
 */

export interface IEntireTest extends IAddCoupleTestEntireQuery {
  id: string;
}

export const testTypeMap = {
  couple: '연인',
  friends: '친구',
  parents: '부모님',
};

/**
 * 응시 중에 응시자가 현재 선택한 문제와 답
 */
export interface ISelectedAnswer {
  text: string;
  index: number;
}

export interface ISelectedAnswersKeyMap {
  [index: number]: { question: ITest; selectedAnswer: ISelectedAnswer };
}
