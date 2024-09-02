import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useAtomValue, useSetAtom } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import { useMemo } from 'react';

export const Intro = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const testCategory = useAtomValue(WritingTestStore.TestCategoryAtom);

  const description = useMemo(() => {
    switch (testCategory) {
      case 'forAnyone':
        return (
          <>
            <StyledContentDescription>
              <strong>친구 혹은 지인</strong>에게
            </StyledContentDescription>
            <StyledContentDescription>
              나에 관한 간단한 문제 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              나와 상대방과 관련된 문제 <strong>8</strong>개를 선택해서 출제해야 해요
            </StyledContentDescription>
          </>
        );
      case 'forCouple':
        return (
          <>
            <StyledContentDescription>
              나에 관한 간단한 문제 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              나와 연인과 관련된 문제 <strong>8</strong>개를 선택해서 출제해야 해요
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
            setStep('QUESTIONS');
          }}
        >
          문제 출제하기
        </StyledMenu>
      </StyledMenuContainer>
    </>
  );
};
