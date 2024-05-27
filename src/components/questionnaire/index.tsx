/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Intro } from './Intro';
import { Step } from './Step';
import { ITestQuestion } from '@/types/utils';
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
} from '@/data/data';

// 반드시 포함해야할 질문
const requiredQuestions = [
  ['당신의 이름은?', []], // 주관식
  ['나는 지금?', currentStatus],
];
// 답변을 비슷하게 한 사람 매칭 기능

// 추후에 부모님 고사도 비슷한 맥락으로 만들기

// 질문군을 나눠서 한 질문당 10개씩 준비해서 랜덤으로 나오게하기
// 보기도 너무 중복되지 않게하기

// 입력받는건 최대한 안귀찮게하기

// 시험지는 최대한 진짜 시험지 같이 디자인해서 만들기

const multipleChoiceQuestions = [
  ['내가 가장 좋아하는 영화는?', movies], // 4개 랜덤 + 이 중에 없다.
  ['오늘은 소개팅 당일 날, 내가 예약할 식당은?', restaurant],
  ['연인과 술집에 왔다. 내가 시킬 안주는?', drinkFood], // 4개 랜덤 + 이 중에 없다.
];

const fiveChoiceQuestions = [
  ['나에게 연예시뮬레이션 예능(하트O그널, 나는O로, 솔로O옥 등...)이란?', simulation],
  ['주말에 주로 나는?', weekendActivity],
  ['연인끼리 여행을 간다면 숙소는?', accomodation],
  ['학창시절 나는?', schoolDays],
  ['술자리에서 연인에게 카톡이 왔을때 나는?', drinkKakaotalk],
];

const commonQuestions = [
  [
    '내가 가장 감동할 때는?',
    [
      '기쁜날 같이 기뻐해줄 때',
      '슬픈날 같이 슬퍼해줄 때',
      '화난날 같이 화내줄 때',
      '무서울 때 옆에서 지켜줄 때',
      '그냥 가만히 둘 때',
    ],
  ],
];

const soloQuestions = [
  ['나는 연애를 시작할 때', ['천천히', '빠르게']],
  ['나는 연애를 끝낼 때', ['천천히', '빠르게']],
  ['나는 연인과의 관계를 정의할 때', ['천천히', '빠르게']],
]; // 솔로, 기타에 해당

const coupleQuestions = [
  ['너와 처음 만난 날 내가 입었던 상의의 색깔은?', colors],
  ['너가 내게 처음으로 사랑한다고 말한 날은?', []],
  ['너가 내게 처음으로 사랑한다고 말한 장소는?', []],
]; // 연애중, 결혼에 해당

const marriedQuestions = [['프로포즈 당시 내가 입었던 옷의 색깔은?', colors]];

const simulationQuestions = [];
interface IQuestionnaireProps {
  onSubmit: (result: ITestQuestion[]) => void;
}
const Questionnaire = ({ onSubmit }: IQuestionnaireProps) => {
  const [step, setStep] = useState<number>(0);
  const [questions, setQuestions] = useState<(string | string[])[][]>([]);
  const [answers, setAnswers] = useState<(number | string)[]>([]);

  // 문제 바꾸기 혹은 선지 바꾸기 기능 추가하기
  // 문제를 드래그 앤 드롭으로 선택할 수 있도록 기능 추가?
  useEffect(() => {
    const selectedMultipleChoiceQuestions = multipleChoiceQuestions.map((question) => {
      const choices = question[1] as string[];
      const shuffled = choices.sort(() => Math.random() - 0.5);
      return [question[0], [...shuffled.slice(0, 4), '이 중에 없다']];
    });
    console.log('selectedMultipleChoiceQuestions', selectedMultipleChoiceQuestions);
    const selectedFiveChoiceQuestions = fiveChoiceQuestions.map((question) => {
      return [question[0], question[1]];
    });
    console.log('selectedFiveChoiceQuestions', selectedFiveChoiceQuestions);
    setQuestions([...requiredQuestions, ...selectedMultipleChoiceQuestions, ...selectedFiveChoiceQuestions]);
  }, []);
  console.log('questions', questions);
  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {step === 0 && <Intro setStep={setStep} />}
      {step > 0 && <Step step={step} setStep={setStep} questions={questions} setAnswers={setAnswers} />}
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export default Questionnaire;
