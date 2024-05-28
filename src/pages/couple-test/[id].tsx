import { Layout } from '@/components/Layout';
import QuestionList from '@/components/QuestionList';

const testData = [
  {
    question: '당신의 이름은?',
    answers: [],
    answerKeys: ['유정민'],
  },
  {
    question: '나는 지금?',
    answers: ['자발적 솔로', '비자발적 솔로', '연애중', '결혼', '기타'],
    answerKeys: ['비자발적 솔로'],
  },
  {
    question: '내가 가장 좋아하는 영화는?',
    answers: ['어메이징 스파이더맨 2', '맨 오브 스틸', '조커', '해리 포터와 죽음의 성물 2부', '이 중에 없다'],
    answerKeys: ['어메이징 스파이더맨 2'],
  },
  {
    question: '오늘은 소개팅 당일 날, 내가 예약할 식당은?',
    answers: ['기타', '일식', '한식', '양식', '이 중에 없다'],
    answerKeys: ['한식'],
  },
  {
    question: '연인과 술집에 왔다. 내가 시킬 안주는?',
    answers: ['족발', '삼겹살', '소라무침', '피순대', '이 중에 없다'],
    answerKeys: ['소라무침'],
  },
  {
    question: '나에게 연예시뮬레이션 예능(하트O그널, 나는O로, 솔로O옥 등...)이란?',
    answers: ['이젠 지겹다', '딱히 관심 없다', '한번씩은 본다', '아직 재미있다', '매번 기대된다'],
    answerKeys: ['아직 재미있다'],
  },
  {
    question: '주말에 주로 나는?',
    answers: ['일한다', '집에서 쉰다', '친구들과 만난다', '데이트한다', '취미생활을 한다'],
    answerKeys: ['데이트한다'],
  },
  {
    question: '연인끼리 여행을 간다면 숙소는?',
    answers: ['호텔', '에어비앤비', '펜션', '모텔', '노숙'],
    answerKeys: ['에어비앤비'],
  },
  {
    question: '학창시절 나는?',
    answers: ['극 인싸', '나름 인싸', '인싸도 아싸도 아니다', '나름 아싸', '극 아싸'],
    answerKeys: ['나름 아싸'],
  },
  {
    question: '술자리에서 연인에게 카톡이 왔을때 나는?',
    answers: [
      '바로 읽고 답장한다',
      '목록에서 읽고 나중에 답장한다',
      '읽지 않고 나중에 답장한다',
      '읽고 답장하지 않는다',
      '카톡을 삭제한다',
    ],
    answerKeys: ['카톡을 삭제한다'],
  },
];
export default function CoupleTestPage() {
  return (
    <Layout>
      <QuestionList questions={testData} />
    </Layout>
  );
}
