import {
  StyledContentDescription,
  StyledContentDescriptionWrapper,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useSetAtom } from 'jotai';
import { AllFriendsIcon, ChildrenIcon, FemaleIcon, HeartIcon, MaleIcon, ParentIcon } from '../icons/Icon';
import { CSSProperties, ReactNode, useEffect, useMemo } from 'react';
import { TestTaker, WritingTestStore } from '../../store/WritingTestStore';
import { useRouter } from 'next/router';

export const SelectTestTaker = () => {
  const router = useRouter();
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setTestTaker = useSetAtom(WritingTestStore.TestTakerAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  useEffect(() => {
    setTestTaker(null);
    setQuestions([]);
  }, [setQuestions, setTestTaker]);
  // TODO route testType에 따라 응시자 다름

  const menus = useMemo(() => {
    const takersInfo: {
      type: TestTaker;
      title: string;
      subTitle?: string;
      icon?: ReactNode;
      fontColor?: CSSProperties['color'];
    }[] = (() => {
      switch (router.query.testType) {
        case 'couple-test':
          return [
            {
              type: 'forCoupleMale',
              title: '남자친구',
              subTitle: '남편',
              fontColor: '#009edd',
              icon: <HeartIcon size={48} fill="#0099dd" />,
            },
            {
              type: 'forCoupleFemale',
              title: '여자친구',
              subTitle: '아내',
              fontColor: '#eb8291',
              icon: <HeartIcon size={48} fill="#eb8291" />,
            },
          ];
        case 'friends-test':
          return [
            {
              type: 'forFriendsMale',
              title: '남사친',
              fontColor: '#009edd',
              icon: <MaleIcon size={48} fill="#009edd" />,
            },
            {
              type: 'forFriendsFemale',
              title: '여사친',
              fontColor: '#eb8291',
              icon: <FemaleIcon size={48} fill="#eb8291" />,
            },
            {
              type: 'forFriendsAll',
              title: '모든 친구',
              fontColor: '#666666',
              icon: <AllFriendsIcon size={48} fill="#666666" />,
            },
          ];
        case 'parents-test':
          return [
            {
              type: 'forChildren',
              title: '자녀',
              fontColor: '#eb8291',
              icon: <ChildrenIcon size={48} fill="#eb8291" />,
            },
            {
              type: 'forEachother',
              title: '배우자',
              fontColor: '#947463',
              icon: <ParentIcon size={48} fill="#947463" />,
            },
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
            setTestTaker(taker.type);
            setStep('READY');
          }}
        >
          {taker.icon}
          <div>
            <span>{taker.title}</span>
            {taker.subTitle && <small>{`(${taker.subTitle})`}</small>}
          </div>
        </StyledMenu>
      );
    });
  }, [router.query.testType, setStep, setTestTaker]);

  const description = useMemo(() => {
    switch (router.query.testType) {
      case 'couple-test':
        return (
          <>
            <StyledContentDescription>내가 출제한 문제를 풀 응시자를 선택해요.</StyledContentDescription>
          </>
        );
      case 'friends-test':
        return (
          <>
            <StyledContentDescription>
              {'친구 한명을 위한 문제는 '}
              <span
                style={{
                  color: '#009edd',
                  fontWeight: 'bold',
                }}
              >
                남사친
              </span>
              {' / '}
              <span
                style={{
                  color: '#eb8291',
                  fontWeight: 'bold',
                }}
              >
                여사친
              </span>
              {' 유형을 선택하고,'}
            </StyledContentDescription>
            <StyledContentDescription>
              여러 친구들을 위한 문제는{' '}
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                모든 친구
              </span>
              를 선택해요.
            </StyledContentDescription>
          </>
        );
      case 'parents-test':
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
              {' 혹은 '}
              <span
                style={{
                  color: '#947463',
                  fontWeight: 'bold',
                }}
              >
                배우자
              </span>
              가 나에 대해 잘 알고 있는지,
            </StyledContentDescription>
            <StyledContentDescription>테스트하는 문제를 출제해요.</StyledContentDescription>
          </>
        );
      default:
        return <></>;
    }
  }, [router.query.testType]);

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>응시자 고르기</StyledContentTitle>
        <StyledContentDescriptionWrapper>{description}</StyledContentDescriptionWrapper>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>{menus}</StyledMenuContainer>
    </>
  );
};
