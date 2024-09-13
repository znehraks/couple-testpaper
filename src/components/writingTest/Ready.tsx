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

export const Ready = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const testTaker = useAtomValue(WritingTestStore.TestTakerAtom);

  const description = useMemo(() => {
    switch (testTaker) {
      case 'forCoupleMale':
        return (
          <>
            <StyledContentDescription>
              남자친구가 나에 대해 더 잘 알 수 있도록 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forCoupleFemale':
        return (
          <>
            <StyledContentDescription>
              여자친구가 나에 대해 더 잘 알 수 있도록 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forFriendsMale':
        return (
          <>
            <StyledContentDescription>남사친이 나에 대해 더 잘 알 수 있도록 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forFriendsFemale':
        return (
          <>
            <StyledContentDescription>여사친이 나에 대해 더 잘 알 수 있도록 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forChildren':
        return (
          <>
            <StyledContentDescription>자녀가 나에 대해 더 잘 알 수 있도록 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forEachother':
        return (
          <>
            <StyledContentDescription>배우자가 나에 대해 더 잘 알 수 있도록 문제를 출제해요.</StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>약 10</strong>개 정도로 구성되어 있어요.
            </StyledContentDescription>
          </>
        );
      default:
        return '';
    }
  }, [testTaker]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>출제 준비</StyledContentTitle>
        <div>{description}</div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setStep('TUTORIAL');
          }}
        >
          문제 출제하기
        </StyledMenu>
      </StyledMenuContainer>
    </>
  );
};
