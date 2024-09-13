import styled from '@emotion/styled';
import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';

export const Tutorial = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setTestCategory = useSetAtom(WritingTestStore.TestTakerAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  useEffect(() => {
    setTestCategory(null);
    setQuestions([]);
  }, [setQuestions, setTestCategory]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>시험 출제 방법</StyledContentTitle>
        <StyledTutorialDescriptionContainer>
          <StyledContentDescription>
            1. 주어진 문제에 대한 <strong>답을 선택</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription>
            2. 시험지 <strong>링크를 복사</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription>
            3. 응시자에게 <strong>시험지 링크를 전달</strong>하면 끝.
          </StyledContentDescription>
        </StyledTutorialDescriptionContainer>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setStep('QUESTIONS');
          }}
        >
          출제 시작
        </StyledMenu>
      </StyledMenuContainer>
    </>
  );
};

const StyledTutorialDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    width: 100%;
  }
`;
