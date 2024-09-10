import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useSetAtom } from 'jotai';
import { FriendsIcon, HeartIcon } from '../icons/Icon';
import { useEffect } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';
import { useLicenses } from '@/hooks/useLicenses';

export const CategoryIntro = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setTestCategory = useSetAtom(WritingTestStore.TestCategoryAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  const { sanitizeLicenseNames } = useLicenses(['friendsIcon']);
  useEffect(() => {
    setTestCategory(null);
    setQuestions([]);
    return () => {
      sanitizeLicenseNames();
    };
  }, [sanitizeLicenseNames, setQuestions, setTestCategory]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>응시자 유형 고르기</StyledContentTitle>
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
          친구
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
