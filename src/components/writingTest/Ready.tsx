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
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#009edd',
                }}
              >
                남자친구(남편)
              </span>
              가 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forCoupleFemale':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  color: '#eb8291',
                  fontWeight: 'bold',
                }}
              >
                여자친구(아내)
              </span>
              가 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forFriendsMale':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  color: '#009edd',
                  fontWeight: 'bold',
                }}
              >
                남사친
              </span>
              이 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forFriendsFemale':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  color: '#eb8291',
                  fontWeight: 'bold',
                }}
              >
                여사친
              </span>
              이 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forFriendsAll':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                친구들
              </span>
              이 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forChildren':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  color: '#eb8291',
                  fontWeight: 'bold',
                }}
              >
                자녀
              </span>
              가 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
            </StyledContentDescription>
          </>
        );
      case 'forEachother':
        return (
          <>
            <StyledContentDescription>
              <span
                style={{
                  color: '#947463',
                  fontWeight: 'bold',
                }}
              >
                배우자
              </span>
              가 나에 대해 얼마나 알고 있는지 테스트하는 문제를 출제해요.
            </StyledContentDescription>
            <StyledContentDescription>
              문제는 <strong>총 10문항</strong> 출제할 수 있어요.
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
