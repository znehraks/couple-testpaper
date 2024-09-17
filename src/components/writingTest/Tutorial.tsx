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
import { commonRequiredQuestions } from '@/data/questionnaire/common';
import { coupleQuestions, coupleRequiredQuestions } from '@/data/questionnaire/couple';

export const Tutorial = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const testTaker = useAtomValue(WritingTestStore.TestTakerAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  // TODO 유형별 문제 출제 -> 커플 문제처럼 올 주관식이면 현재 출제가 안됨 -> 디버그 필요
  // TODO 직장 동료들 끼리도 할수 있게 문제 출제
  useEffect(() => {
    switch (testTaker) {
      case 'forCoupleMale':
        {
          const selectedMyInfoQuestions = [...coupleQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 9)
            .map((quest) => {
              return {
                ...quest,
              };
            });
          setQuestions([...coupleRequiredQuestions, ...selectedMyInfoQuestions]);
        }
        break;
      case 'forCoupleFemale':
        {
          const selectedMyInfoQuestions = [...coupleQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 9)
            .map((quest) => {
              return {
                ...quest,
              };
            });
          setQuestions([...coupleRequiredQuestions, ...selectedMyInfoQuestions]);
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
          setQuestions([...commonRequiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
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
          setQuestions([...commonRequiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
        }
        break;
      case 'forFriendsAll':
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
          setQuestions([...commonRequiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
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
          setQuestions([...commonRequiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
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
          setQuestions([...commonRequiredQuestions, ...selectedMyInfoQuestions, ...selectedCommonQuestions]);
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
            1. 질문을 읽고, <strong>나에게 해당되는 답변을 선택</strong>해요.
          </StyledContentDescription>
          <StyledContentDescription
            fontSize={20}
            style={{
              paddingLeft: '8px',
            }}
          >
            1-1. 질문 혹은 선지가 마음에 들지 않는다면, <strong>직접 문제와 선지를 수정</strong>할 수 있어요.
          </StyledContentDescription>
          <StyledContentDescription>
            2. 출제 완료 후, 시험지 <strong>링크를 복사</strong>해요.
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
