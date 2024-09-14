import styled from '@emotion/styled';
import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';
import { commonQuestions, myInfoQuestions } from '@/data/questionnaire/friends';
import { requiredQuestions } from '@/data/questionnaire/common';

export const Tutorial = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const testTaker = useAtomValue(WritingTestStore.TestTakerAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  // TODO 유형별 문제 출제
  // TODO 직장 동료들 끼리도 할수 있게 문제 출제
  useEffect(() => {
    switch (testTaker) {
      case 'forCoupleMale':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forCoupleFemale':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forFriendsMale':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forFriendsFemale':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forChildren':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forEachother':
        {
          const selectedMyInfoQuestions = [...myInfoQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });

          const selectedCommonQuestions = [...commonQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
            .map((quest) => {
              if (quest.choices.length <= 5) {
                return quest;
              }
              return {
                ...quest,
                choices: [...quest.choices].sort(() => Math.random() - 0.5).slice(0, 5),
              };
            });
          setQuestions([...requiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      default:
        break;
    }
  }, [setQuestions, testTaker]);

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
