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
import { useLicenses } from '@/hooks/useLicenses';

export const Tutorial = () => {
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
        <StyledContentTitle>시험 출제 방법</StyledContentTitle>
        <StyledTutorialDescriptionContainer>
          <StyledContentDescription>
            1. 내가 만들 시험지를 풀 <strong>응시자 유형을 선택</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription>
            2. 주어진 문제에 대한 <strong>답을 선택</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription>
            3. 시험지 <strong>링크를 복사</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription>
            4. 응시자에게 <strong>시험지 링크를 전달</strong>하면 끝.
          </StyledContentDescription>
        </StyledTutorialDescriptionContainer>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setStep('CATEGORY_INTRO');
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
