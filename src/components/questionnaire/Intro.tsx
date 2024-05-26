import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface IIntroProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
export const Intro = ({ setStep }: IIntroProps) => {
  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>연애고사 출제하기</StyledContentTitle>
        <StyledContentDescription>이곳에서는 간단한 질문을 통해</StyledContentDescription>
        <StyledContentDescription>
          <strong>연애관</strong>에 대한 문제를 출제합니다.
        </StyledContentDescription>
      </StyledContentTitleWrapper>
      <StyledMenuContainer onClick={() => setStep((prev) => prev + 1)}>
        <StyledMenu>시작하기</StyledMenu>
      </StyledMenuContainer>
    </>
  );
};
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
