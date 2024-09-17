import {
  StyledContentDescription,
  StyledContentDescriptionWrapper,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { WritingTestStore } from '../../store/WritingTestStore';
import { FatherIcon, MotherIcon } from '../icons/Icon';

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
        <StyledContentTitle>당신은 누구신가요?</StyledContentTitle>
        <StyledContentDescriptionWrapper>
          <StyledContentDescription>집에서 당신은 어떤 이름으로 불리우고 계신가요?</StyledContentDescription>
        </StyledContentDescriptionWrapper>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu
          color="#5a3d2b"
          onClick={() => {
            setMe('father');
            setStep('SELECT_TEST_TAKER');
          }}
        >
          <FatherIcon size={48} fill={'#5a3d2b'} />
          <div>아버지</div>
        </StyledMenu>
        <StyledMenu
          color="#5a3d2b"
          onClick={() => {
            setMe('mother');
            setStep('SELECT_TEST_TAKER');
          }}
        >
          <MotherIcon size={48} fill={'#5a3d2b'} />
          <div>어머니</div>
        </StyledMenu>
      </StyledMenuContainer>
    </>
  );
};
