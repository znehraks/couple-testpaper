import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledMobileTestWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
  height: 80dvh;
  font-size: 18px;
  overflow: hidden;
  position: relative;
`;

export const StyledMobileTestHeaderWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  border-bottom: 2px solid #000000;
  padding-bottom: 8px;
  width: 100%;
  min-height: fit-content;
  position: relative;
  & > .test-timer {
    position: absolute;
    right: 4px;
    top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span {
      font-size: 12px;
      font-family: NanumMyeongjoBold;
    }
  }
  & > .test-title {
    font-family: NanumSquareB;
    font-size: 14px;
    text-align: center;
    word-break: keep-all;
  }
  & > .test-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-size: 10px;

    & > div:first-of-type {
      font-family: NanumMyeongjoBold;
      border: 1px solid #000000;
      border-radius: 20px;
      padding: 4px 8px;
    }
    & > div:nth-of-type(2) {
      font-family: NanumMyeongjoExtraBold;
      font-size: 24px;
      margin-right: 12px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    & > div:last-of-type {
      font-family: NanumMyeongjoBold;
      border: 1px solid #000000;
      border-radius: 4px;
      padding: 4px 8px;
    }
  }
`;
export const StyledMobileTestScoreContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  width: 65px;
  height: 65px;
`;

export const StyledMobileTestQuestionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 250px;
  width: 100%;
  min-height: fit-content;
  font-size: 18px;
  overflow-y: auto;
  margin-bottom: 24px;
  padding: 0 20px;
`;

export const StyledMobileSubmitBtn = styled.button<{ disabled: boolean }>`
  position: absolute;
  font-size: 24px;
  padding: 4px 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  bottom: 12px;
  right: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.1)' : '#ffffff')};
  color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.3)' : '#000000')};
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
`;
