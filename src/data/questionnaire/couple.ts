import { ITest } from '@/types/utils';
import { QuestionType } from './common';

// 질문이 맘에 안들면, 직접 질문을 추가 혹은 수정하기
// 선지를 직접 다 추가 혹은 수정하기

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
  // 1
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음 만난 날 내가 입었던 상의의 색깔은?',
    choices: [
      '흰색',
      '검은색',
      '회색',
      '빨간색',
      '파란색',
      '노란색',
      '초록색',
      '분홍색',
      '주황색',
      '보라색',
      '갈색',
      '베이지색',
      '카키색',
      '남색',
      '하늘색 ',
      '청록색',
      '버건디색',
      '올리브색',
      '금색',
      '은색',
      '민트색',
      '라일락색',
      '코랄색',
      '크림색',
      '마젠타색',
      '와인색',
    ],
  },
  // 2
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음 벚꽃 보러 갔던 장소는?',
    choices: ['여의도', '진해', '제주도', '현충원', '춘천', '양평'],
  },
  // 3
  {
    type: QuestionType.COUPLE,
    question: '너가 내게 처음으로 사랑한다고 말한 장소는?',
    choices: [],
  },
  // 4
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 데이트한 날짜는?',
    choices: [],
  },
  // 5
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 데이트한 장소는?',
    choices: [],
  },
  // 6
  {
    type: QuestionType.COUPLE,
    question: '너가 나에게 처음으로 선물한 것은?',
    choices: [],
  },
  // 7
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 키스한 날짜는?',
    choices: [],
  },
  // 8
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 키스한 장소는?',
    choices: [],
  },
  // 9
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 손을 잡은 날짜는?',
    choices: [],
  },
  // 10
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 손을 잡은 장소는?',
    choices: [],
  },
  // 11
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 여행간 날짜는?',
    choices: [],
  },
  // 12
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 여행간 장소는?',
    choices: [],
  },
  // 13
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 날짜는?',
    choices: [],
  },
  // 14
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 시간은?',
    choices: [],
  },
  // 15
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 장소는?',
    choices: [],
  },
  // 16
  {
    type: QuestionType.COUPLE,
    question: '우리가 처음으로 연락한 내용은?',
    choices: [],
  },
];
