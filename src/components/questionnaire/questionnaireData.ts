import { ITest } from '../store/questionnaireStore';
import {
  accomodation,
  currentStatus,
  drinkFood,
  drinkKakaotalk,
  movies,
  restaurant,
  schoolDays,
  simulation,
  weekendActivity,
} from './questionaireChoices';

// 답변을 비슷하게 한 사람 매칭 기능

// 추후에 부모님 고사도 비슷한 맥락으로 만들기

// 질문군을 나눠서 한 질문당 10개씩 준비해서 랜덤으로 나오게하기
// 보기도 너무 중복되지 않게하기

// 입력받는건 최대한 안귀찮게하기

// 시험지는 최대한 진짜 시험지 같이 디자인해서 만들기

/**
 * 반드시 포함해야할 질문
 **/

export enum QuestionType {
  REQUIRED = 'required',
  MY_INFO = 'myInfo',
  COMMON = 'common',
  COUPLE = 'couple',
}

export const requiredQuestions: ITest[] = [
  { type: QuestionType.REQUIRED, question: '당신의 이름은?', choices: [] }, // 주관식
  { type: QuestionType.REQUIRED, question: '나는 지금?', choices: currentStatus },
];

export const myInfoQuestions: ITest[] = [
  {
    type: QuestionType.MY_INFO,
    question: '내가 가장 좋아하는 영화는?',
    choices: movies,
  },
  {
    type: QuestionType.MY_INFO,
    question: '나에게 연예시뮬레이션 예능(하트O그널, 나는O로, 솔로O옥 등...)이란?',
    choices: simulation,
  },
  {
    type: QuestionType.MY_INFO,
    question: '주말에 주로 나는?',
    choices: weekendActivity,
  },
  {
    type: QuestionType.MY_INFO,
    question: '학창시절 나는?',
    choices: schoolDays,
  },
];

export const commonQuestions: ITest[] = [
  {
    type: QuestionType.COMMON,
    question: '오늘은 소개팅 당일 날, 내가 예약할 식당은?',
    choices: restaurant,
  },
  {
    type: QuestionType.COMMON,
    question: '연인과 술집에 왔다. 내가 시킬 안주는?',
    choices: drinkFood,
  },
  {
    type: QuestionType.COMMON,
    question: '연인끼리 여행을 간다면 숙소는?',
    choices: accomodation,
  },
  {
    type: QuestionType.COMMON,
    question: '술자리에서 연인에게 카톡이 왔을때 나는?',
    choices: drinkKakaotalk,
  },
  {
    type: QuestionType.COMMON,
    question: '나는 연애를 시작할 때, 상대방과 안맞는 점이 보이면?',
    choices: ['손절한다', '상대에게 맞춰준다', '나에게 상대를 맞추려한다', '일단 넘어가고 지켜본다', '신경쓰지 않는다'],
  },
  {
    type: QuestionType.COMMON,
    question: '나는 연애를 끝낼 때',
    choices: [
      '과감하게 내가 찬다',
      '과감하진 않아도 먼저 찬다',
      '상대방의 이별통보를 유도한다',
      '잠수를 탄다',
      '상대방과 동시에 이별을 통보한다',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: '연인과 말싸움이 붙었다. 이때 나는?',
    choices: [
      '무조건 이기고 본다',
      '무조건 져주고 본다',
      '상황에 따라 다르다',
      '일단 사과하되, 끝까지 밀리진 않는다.',
      '회피한다.',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: '연인과 만나는 주기는?',
    choices: [
      '매일봐도 부족하다',
      '주 1회면 적당하다',
      '주 2~3회면 적당하다',
      '2주에 1회면 적당하다',
      '월 1회면 적당하다',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: '내가 원하는 데이트 스타일은?',
    choices: [
      '집에서 활동적으로 만나기',
      '집에서 정적으로 만나기',
      '밖에서 활동적으로 놀기',
      '밖에서 정적으로 놀기',
      '비대면으로 만나기',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: '다음 중 내가 상대에게 가장 감동할 때는?',
    choices: [
      '닭다리 두 개를 다 양보해줄 때',
      '말하기 전에 기분을 알아 차릴 때',
      '화나게 한 사람을 같이 욕해줄 때',
      '자려고 누웠는데, 불을 대신 꺼줄 때',
      '그냥 가만히 둘 때',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: "이 중 다른건 다 안맞아도 '이건 꼭 맞아야한다'라고 생각하는 것은?",
    choices: ['경제관념', '옷 입는 스타일', '음식 취향', '대화 스타일', '속궁합'],
  },
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
