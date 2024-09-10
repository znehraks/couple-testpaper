import styled from '@emotion/styled';
import {
  StyledContentDescription,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';
import { useAtomValue, useSetAtom } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import { useCallback, useEffect, useState } from 'react';

export const Complete = () => {
  const tempTestSheetId = useAtomValue(WritingTestStore.TempTestSheetIdAtom);
  const setStep = useSetAtom(WritingTestStore.StepAtom);

  const [copySuccessAlertVisible, setCopySuccessAlertVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copySuccessAlertVisible) {
      timer = setTimeout(() => {
        setCopySuccessAlertVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [copySuccessAlertVisible]);

  const handleCopyLink = useCallback(() => {
    if (typeof window !== 'undefined') {
      const baseURL = new URL(window.location.href).origin;
      navigator.clipboard.writeText(`${baseURL}/sheet/${tempTestSheetId}`);
      setCopySuccessAlertVisible(true);
    }
  }, [tempTestSheetId]);

  return (
    <>
      {copySuccessAlertVisible && <StyledCopySuccessAlert>링크가 복사되었습니다.</StyledCopySuccessAlert>}
      <StyledContentTitleWrapper>
        <StyledContentTitle>출제 완료</StyledContentTitle>
        <div>
          <StyledContentDescription>버튼을 눌러 링크를 복사하고, 응시자에게 공유해요.</StyledContentDescription>
        </div>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu onClick={handleCopyLink}>시험지 링크 복사</StyledMenu>
      </StyledMenuContainer>
      <StyledGoToFirstStepButton
        onClick={() => {
          setStep('TUTORIAL');
        }}
      >
        문제를 다시 출제할래요.
      </StyledGoToFirstStepButton>
    </>
  );
};

const StyledCopySuccessAlert = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  color: #555555;
`;

const StyledGoToFirstStepButton = styled.span`
  align-self: center;
  width: fit-content;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid #555555;
`;
