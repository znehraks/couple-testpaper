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

export const restaurant = [
  '회사 앞 카페',
  '적당한 소음이 있는 맥주집',
  '왁지지껄 시끄러운 요리주점',
  '분위기 있는 파스타집',
  '든든한 국밥집',
];

export const drinkFood = [
  '삼겹살',
  '족발',
  '치킨',
  '전',
  '낙지볶음',
  '두부김치',
  '닭발',
  '순대',
  '막창',
  '건어물',
  '멍게',
  '문어숙회',
  '홍어삼합',
  '육회',
  '장어구이',
  '오징어볶음',
  '닭똥집',
  '전어',
  '조개구이',
  '새우구이',
  '오돌뼈',
  '소라무침',
  '골뱅이무침',
  '명란젓',
  '꼬막무침',
  '장조림',
  '생선구이',
  '회',
  '게장',
  '전복구이',
  '가리비구이',
  '훈제연어',
  '고추튀김',
  '쭈꾸미볶음',
  '피순대',
  '막국수',
  '수육',
  '육사시미',
  '꼬치구이',
  '떡볶이',
  '어묵탕',
  '콩나물국',
  '순두부찌개',
  '김치찌개',
  '된장찌개',
  '부대찌개',
  '감자탕',
  '탕류',
  '해장국',
  '튀김',
];

export const simulation = ['이젠 지겹다', '딱히 관심 없다', '한번씩은 본다', '아직 재미있다', '매번 기대된다'];

export const weekendActivity = ['일한다', '집에서 쉰다', '친구들과 만난다', '데이트한다', '취미생활을 한다'];

export const accomodation = ['호텔', '에어비앤비', '펜션', '모텔', '노숙'];

export const schoolDays = ['극 인싸', '나름 인싸', '인싸도 아싸도 아니다', '나름 아싸', '극 아싸'];

export const drinkKakaotalk = [
  '바로 읽고 답장한다',
  '목록에서 읽고 나중에 답장한다',
  '읽지 않고 나중에 답장한다',
  '읽고 답장하지 않는다',
  '카톡을 삭제한다',
];

export const colors = [
  '빨간색',
  '파란색',
  '노란색',
  '초록색',
  '주황색',
  '보라색',
  '분홍색',
  '갈색',
  '회색',
  '검은색',
  '흰색',
  '하늘색',
  '남색',
  '자주색',
  '연두색',
  '은색',
  '금색',
  '베이지색',
  '와인색',
  '청록색',
];

export const friendsRequiredQuestions: ITest[] = [];

export const myInfoQuestions: ITest[] = [
  {
    type: QuestionType.MY_INFO,
    question: '연예시뮬레이션(하트O그널, 나는O로, 솔로O옥 등...)은?',
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
    question: '소개팅이 잡혔다. 내가 정한 약속 장소는?',
    choices: restaurant,
  },
  {
    type: QuestionType.COMMON,
    question: '연인과 공원에서 산책 중이다. 이때 나는?',
    choices: [
      '손을 꼭 잡고 걷는다',
      '가볍게 어깨 동무 한다',
      '그냥 나란히 걷는다',
      '연인을 업고 간다',
      '앞 뒤로 일렬로 걸어간다',
    ],
  },
  {
    type: QuestionType.COMMON,

    question: '나의 최애 안주는?',
    choices: [...drinkFood.sort(() => Math.random() - 0.5).slice(0, 4), '이 중에 없다'],
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
    question: '나는 연애를 끝낼 때 주로?',
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
      '밖에서 활동적으로 만나기',
      '밖에서 정적으로 만나기',
      '비대면으로 만나기',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: '다음 중 상대방이 가장 매력적으로 보이는 순간은?',
    choices: [
      '닭다리 두 개를 다 양보해줄 때',
      '보고 싶다고 하면 바로 달려와줄 때',
      '부탁하지 않아도 넷플X스 계정을 공유해줄 때',
      '자려고 누웠는데, 불을 대신 꺼줄 때',
      '화났을 때 눈치 껏 가만히 둘 때',
    ],
  },
  {
    type: QuestionType.COMMON,
    question: "이 중 다른건 다 안맞아도 '이건 꼭 맞아야한다'라고 생각하는 것은?",
    choices: ['경제관념', '옷 입는 스타일', '음식 취향', '대화 스타일', '속궁합'],
  },
];
