import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useSetAtom } from 'jotai';
import { ChildIcon, HeartIcon, ParentIcon } from '../icons/Icon';
import { CSSProperties, ReactNode, useEffect, useMemo } from 'react';
import { TestTaker, WritingTestStore } from '../../store/WritingTestStore';
import { useRouter } from 'next/router';

export const SelectTestTaker = () => {
  const router = useRouter();
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setTestCategory = useSetAtom(WritingTestStore.TestTakerAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  useEffect(() => {
    setTestCategory(null);
    setQuestions([]);
  }, [setQuestions, setTestCategory]);
  // TODO route testType에 따라 응시자 다름

  const menus = useMemo(() => {
    const takersInfo: { type: TestTaker; title: string; icon?: ReactNode; fontColor?: CSSProperties['color'] }[] =
      (() => {
        switch (router.query.testType) {
          case 'couple-test':
            return [
              {
                type: 'forCoupleMale',
                title: '남자친구',
                fontColor: '#009edd',
                icon: <HeartIcon size={42} fill="#0099dd" />,
              },
              { type: 'forCoupleFemale', title: '여자친구', fontColor: '#ff9999', icon: <HeartIcon size={42} /> },
            ];
          case 'friends-test':
            return [
              { type: 'forFriendsMale', title: '남사친', fontColor: '#009edd' },
              { type: 'forFriendsFemale', title: '여사친', fontColor: '#ff9999' },
            ];
          case 'parents-test':
            return [
              { type: 'forChildren', title: '자녀', icon: <ChildIcon size={42} /> },
              { type: 'forEachother', title: '배우자', icon: <ParentIcon size={42} /> },
            ];
          default:
            return [];
        }
      })();

    return takersInfo.map((taker, index) => {
      return (
        <StyledMenu
          key={index}
          color={taker.fontColor}
          onClick={() => {
            setTestCategory(taker.type);
            setStep('READY');
          }}
        >
          {taker.icon}
          <div>{taker.title}</div>
        </StyledMenu>
      );
    });
  }, [router.query.testType, setStep, setTestCategory]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>응시자 고르기</StyledContentTitle>
        <div>
          <StyledContentDescription>내가 만들 시험을 응시 할 대상을 선택해주세요.</StyledContentDescription>
          <StyledContentDescription>대상에 따라 문제의 성격이 달라져요.</StyledContentDescription>
        </div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>{menus}</StyledMenuContainer>
    </>
  );
};
