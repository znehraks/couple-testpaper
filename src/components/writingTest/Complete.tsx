import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import ClipboardJS from 'clipboard';
import { useAtomValue, useSetAtom } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import {
  StyledContentDescription,
  StyledContentDescriptionWrapper,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledMenu,
  StyledMenuContainer,
} from './styles';

export const Complete = () => {
  const tempTestSheetId = useAtomValue(WritingTestStore.TempTestSheetIdAtom);
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const [copySuccessAlertVisible, setCopySuccessAlertVisible] = useState(false);
  const clipboardRef = useRef(null);

  useEffect(() => {
    let clipboard: ClipboardJS;
    if (typeof window !== 'undefined') {
      const baseURL = new URL(window.location.href).origin;
      const copyText = `${baseURL}/sheet/${tempTestSheetId}`;

      clipboard = new ClipboardJS('.copy-btn', {
        text: () => copyText,
      });

      clipboard.on('success', () => {
        setCopySuccessAlertVisible(true);
      });

      clipboard.on('error', () => {
        console.error('Failed to copy text');
      });
    }

    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, [tempTestSheetId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copySuccessAlertVisible) {
      timer = setTimeout(() => {
        setCopySuccessAlertVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [copySuccessAlertVisible]);

  return (
    <>
      {copySuccessAlertVisible && <StyledCopySuccessAlert>링크가 복사되었습니다.</StyledCopySuccessAlert>}
      <StyledContentTitleWrapper>
        <StyledContentTitle>출제 완료</StyledContentTitle>
        <StyledContentDescriptionWrapper>
          <StyledContentDescription>버튼을 눌러 링크를 복사하고, 응시자에게 공유해요.</StyledContentDescription>
        </StyledContentDescriptionWrapper>
      </StyledContentTitleWrapper>
      <StyledMenuContainer>
        <StyledMenu className="copy-btn" fontSize={18} ref={clipboardRef}>
          시험지 링크 복사
        </StyledMenu>
      </StyledMenuContainer>
      <StyledGoToFirstStepButton
        onClick={() => {
          setStep('HOWTO');
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
  @media (max-width: 501px) {
    top: 20px;
  }
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
