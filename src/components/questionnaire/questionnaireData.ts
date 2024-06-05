import {
  accomodation,
  colors,
  currentStatus,
  drinkFood,
  drinkKakaotalk,
  movies,
  restaurant,
  schoolDays,
  simulation,
  weekendActivity,
} from './questionaireChoices';

/**
 * 반드시 포함해야할 질문
 **/
export const requiredQuestions = [
  ['당신의 이름은?', []], // 주관식
  ['나는 지금?', currentStatus],
];
// 답변을 비슷하게 한 사람 매칭 기능

// 추후에 부모님 고사도 비슷한 맥락으로 만들기

// 질문군을 나눠서 한 질문당 10개씩 준비해서 랜덤으로 나오게하기
// 보기도 너무 중복되지 않게하기

// 입력받는건 최대한 안귀찮게하기

// 시험지는 최대한 진짜 시험지 같이 디자인해서 만들기

export const multipleChoiceQuestions = [
  ['내가 가장 좋아하는 영화는?', movies], // 4개 랜덤 + 이 중에 없다.
  ['오늘은 소개팅 당일 날, 내가 예약할 식당은?', restaurant],
  ['연인과 술집에 왔다. 내가 시킬 안주는?', drinkFood], // 4개 랜덤 + 이 중에 없다.
];

export const fiveChoiceQuestions = [
  ['나에게 연예시뮬레이션 예능(하트O그널, 나는O로, 솔로O옥 등...)이란?', simulation],
  ['주말에 주로 나는?', weekendActivity],
  ['연인끼리 여행을 간다면 숙소는?', accomodation],
  ['학창시절 나는?', schoolDays],
  ['술자리에서 연인에게 카톡이 왔을때 나는?', drinkKakaotalk],
];

export const commonQuestions = [
  [
    '상대에게 내가 가장 감동할 때는?',
    [
      '기쁜날 같이 기뻐해줄 때',
      '슬픈날 같이 슬퍼해줄 때',
      '화난날 같이 화내줄 때',
      '무서울 때 옆에서 지켜줄 때',
      '그냥 가만히 둘 때',
    ],
  ],
  [
    "다른건 다 안맞아도 '이건 꼭 맞아야한다'라고 생각하는 것은?",
    ['경제관념', '옷 입는 스타일', '음식 취향', '대화 스타일', '그런거 없다'],
  ],
];

export const soloQuestions = [
  [
    '나는 연애를 시작할 때, 상대방과 안맞는 점이 보이면 주로?',
    ['손절한다', '상대에게 맞춰준다', '나에게 상대를 맞추려한다', '일단 넘어가고 지켜본다', '신경쓰지 않는다'],
  ],
  [
    '나는 연애를 끝낼 때',
    ['과감하게 내가 찬다', '과감하진 않아도 먼저 찬다', '상대방의 이별통보를 유도한다', '잠수를 탄다', '동시에 찬다'],
  ],
]; // 솔로, 기타에 해당

export const coupleQuestions = [
  ['너와 처음 만난 날 내가 입었던 상의의 색깔은?', colors],
  ['우리가 처음 벚꽃 보러 갔던 장소는?', ['한강', '남산', '현충원', '진해', '이 중에 없다']],
  ['너가 내게 처음으로 사랑한다고 말한 장소는?', []],
]; // 연애중, 결혼에 해당
