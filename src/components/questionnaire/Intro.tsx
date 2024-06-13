import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { StyledMenu, StyledMenuContainer } from '../common/styles';
import { useAtomValue, useSetAtom } from 'jotai';
import { StepAtom, TestCategoryAtom } from '../store/questionnaireStore';
import { useMemo } from 'react';

export const Intro = () => {
  const setStep = useSetAtom(StepAtom);
  const testCategory = useAtomValue(TestCategoryAtom);

  const description = useMemo(() => {
    switch (testCategory) {
      case 'forAnyone':
        return (
          <>
            <StyledContentDescription>
              나에 관한 간단한 질문 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              연애와 관련된 질문 <strong>8</strong>개를 선택해서 출제해야 해요
            </StyledContentDescription>
          </>
        );
      case 'forCouple':
        return (
          <>
            <StyledContentDescription>
              나에 관한 간단한 질문 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              연애와 관련된 질문 <strong>8</strong>개를 선택해서 출제해야 해요
            </StyledContentDescription>
          </>
        );
      default:
        return '';
    }
  }, [testCategory]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>연애고사 출제하기</StyledContentTitle>
        <div>{description}</div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setStep(0);
          }}
        >
          문제 출제하기
        </StyledMenu>
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
  & > strong {
    font-weight: bold;
    color: #ff6b6b;
    font-size: 32px;
  }
`;
