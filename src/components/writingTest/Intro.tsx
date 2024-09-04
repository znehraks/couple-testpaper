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
            <StyledContentDescription>친구들이 풀 수 있는 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              나에 관한 간단한 문항 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              연인과 관련된 문항 <strong>8</strong>개를 선택해서 출제해야 해요
            </StyledContentDescription>
          </>
        );
      case 'forCouple':
        return (
          <>
            <StyledContentDescription>연인과 나만이 풀 수 있는 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              나에 관한 간단한 문항 <strong>2</strong>개와
            </StyledContentDescription>
            <StyledContentDescription>
              나와 연인과 관련된 문항 <strong>8</strong>개를 선택해서 출제해야 해요
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
        <StyledContentTitle>출제 준비</StyledContentTitle>
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
