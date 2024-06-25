import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { StyledMenu, StyledMenuContainer } from '../common/styles';
import { useSetAtom } from 'jotai';
import { FriendsIcon, HeartIcon } from '../icons/Icon';
import { useEffect } from 'react';
import { QuestionsAtom, TestCategoryAtom, StepAtom } from '../store/QuestionnaireStore';

export const CategoryIntro = () => {
  const setStep = useSetAtom(StepAtom);
  const setTestCategory = useSetAtom(TestCategoryAtom);
  const setQuestions = useSetAtom(QuestionsAtom);

  useEffect(() => {
    setTestCategory(null);
    setQuestions([]);
  }, [setQuestions, setTestCategory]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>연애고사 출제하기</StyledContentTitle>
        <div>
          <StyledContentDescription>이 문제를 풀 대상을 선택해주세요.</StyledContentDescription>
          <StyledContentDescription>대상에 따라 문제의 성격이 달라져요.</StyledContentDescription>
        </div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setTestCategory('forAnyone');
            setStep('INTRO');
          }}
        >
          <FriendsIcon size={42} />
          친구 및 지인
        </StyledMenu>
        <StyledMenu
          onClick={() => {
            setTestCategory('forCouple');
            setStep('INTRO');
          }}
        >
          <HeartIcon size={42} />
          연인
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
`;
