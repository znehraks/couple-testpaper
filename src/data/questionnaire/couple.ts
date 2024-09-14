import { ITest } from '@/types/utils';
import { QuestionType } from './common';

// 답변을 비슷하게 한 사람 매칭 기능

// 추후에 부모님 고사도 비슷한 맥락으로 만들기

// 질문군을 나눠서 한 질문당 10개씩 준비해서 랜덤으로 나오게하기
// 보기도 너무 중복되지 않게하기

// 입력받는건 최대한 안귀찮게하기

// 시험지는 최대한 진짜 시험지 같이 디자인해서 만들기

/**
 * 반드시 포함해야할 질문
 **/

export const coupleRequiredQuestions: ITest[] = [
  { type: QuestionType.REQUIRED, question: '당신의 이름은?', choices: [] }, // 주관식
  // {
  //   type: QuestionType.REQUIRED,
  //   question: '나는 지금?',
  //   choices: ['자발적 솔로', '비자발적 솔로', '연애중', '결혼', '기타'],
  // },
];

// 주관식으로 입력 받고, 시험지는 알아서 보기가 4개 채워져서 출제
export const coupleQuestions: ITest[] = [
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음 만난 날 내가 입었던 상의의 색깔은?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음 벚꽃 보러 갔던 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '너가 내게 처음으로 사랑한다고 말한 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 데이트한 날짜는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 데이트한 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '너가 나에게 처음으로 선물한 것은?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 키스한 날짜는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 키스한 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 손을 잡은 날짜는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 손을 잡은 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 여행간 날짜는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 여행간 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 날짜는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 시간은?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 장소는?',
    choices: [],
  },
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 내용은?',
    choices: [],
  },
];
