import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { StyledMenu, StyledMenuContainer } from '../common/styles';

interface IIntroProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Intro = ({ setStep }: IIntroProps) => {
  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>연애고사 출제하기</StyledContentTitle>
        <div>
          <StyledContentDescription>이곳에서는 간단한 질문을 통해</StyledContentDescription>
          <StyledContentDescription>나의 연애관에 대한 시험 문제를 출제합니다.</StyledContentDescription>
        </div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu onClick={() => setStep((prev) => prev + 1)}>시작하기</StyledMenu>
      </StyledMenuContainer>
    </>
  );
};

const StyledContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContentTitle = styled(motion.h1)`
  font-size: 58px;
  text-align: center;
`;

const StyledContentDescription = styled(motion.p)`
  font-size: 24px;
`;
