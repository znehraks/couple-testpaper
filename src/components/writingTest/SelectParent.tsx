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

export const SelectParent = () => {
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setMe = useSetAtom(WritingTestStore.MeAtom);
  const setQuestions = useSetAtom(WritingTestStore.QuestionsAtom);
  useEffect(() => {
    setMe(null);
    setQuestions([]);
  }, [setMe, setQuestions]);
  // TODO route testType에 따라 응시자 다름

  return (
    <>
      <StyledContentTitleWrapper>
        <StyledContentTitle>당신은 누구인가요?</StyledContentTitle>
        <div>
          <StyledContentDescription>집에서 당신은 어떤 이름으로 불리우고 계신가요?</StyledContentDescription>
        </div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          onClick={() => {
            setMe('father');
            setStep('SELECT_TEST_TAKER');
          }}
        >
          <div>아버지</div>
        </StyledMenu>
        <StyledMenu
          onClick={() => {
            setMe('mother');
            setStep('SELECT_TEST_TAKER');
          }}
        >
          <div>어머니</div>
        </StyledMenu>
      </StyledMenuContainer>
    </>
  );
};
