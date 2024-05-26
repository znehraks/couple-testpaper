/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Intro } from './Intro';

type QuestionnaireProps = {
  onSubmit: (answers: { [key: string]: string }) => void;
};

const fixedQuestions = [
  '당신의 이름은?', // 주관식
  '나는 지금?', // 솔로, 연애중, 결혼, 이혼, 미혼, 기타 ??
];
// 답변을 비슷하게 한 사람 매칭 기능

// 추후에 부모님 고사도 비슷한 맥락으로 만들기

// 질문군을 나눠서 한 질문당 10개씩 준비해서 랜덤으로 나오게하기
// 보기도 너무 중복되지 않게하기

// 입력받는건 최대한 안귀찮게하기

// 시험지는 최대한 진짜 시험지 같이 디자인해서 만들기

const likeQuestions = [];

const questions = [
  '이 중에 내가 가장 좋아하는 영화는?', // 최근에 개봉한 영화들 3개, 이 중에 없다 1개
  '이 중에 내가 가장 좋아하는 음식은?', // 한식, 중식, 일식, 양식, 에 포함되는 음식 3개, 이 중에 없다 1개
  '연예시뮬레이션 예능은?', // 이젠 지겹다, 딱히 관심 없다, 아직 재미있다, 매번 기대된다.

  '주말에 주로 나는?', // 집에서 쉰다, 친구들과 만난다, 데이트한다, 취미생활을 한다.
  '연인끼리 여행을 간다면 숙소는?', // 호텔, 에어비앤비, 펜션, 노숙, 모텔, 중 3개 이 중에 없다.
  '학창시절 나는?', // 인싸, 아싸, 둘 다 아니다.
  '술자리에서 연인에게 카톡이 왔을때 나는?', // 바로 읽고 답장, 읽고 나중에 답장, 읽지 않고 나중에 답장, 읽고 답장하지 않는다.
];

const simulationQuestions = [];

const Questionnaire = ({ onSubmit }: QuestionnaireProps) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, question: string) => {
    setAnswers({
      ...answers,
      [question]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {step === 0 && <Intro setStep={setStep} />}
      {step > 0 && <>문제들</>}
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

const StyledContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContentTitle = styled(motion.h1)`
  font-size: 32px;
  text-align: center;
`;

const StyledContentDescription = styled(motion.p)`
  font-size: 18px;
`;

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledMenu = styled.div`
  width: 120px;
  height: 120px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
`;

export default Questionnaire;
