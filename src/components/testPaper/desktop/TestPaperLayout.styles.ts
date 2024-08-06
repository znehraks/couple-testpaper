import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTestWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 48px 24px 48px;
  overflow-y: auto;
  width: 980px;
  height: auto;
`;

export const StyledTestHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #000000;
  padding-bottom: 16px;
  width: 100%;
  min-height: 120px;
  position: relative;
  & > .test-timer {
    position: absolute;
    right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span {
      font-family: NanumMyeongjoBold;
    }
  }
  & > .test-title {
    font-family: NanumSquareB;
    font-size: 20px;
    text-align: center;
  }
  & > .test-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 18px;

    & > div:first-of-type {
      font-family: NanumMyeongjoBold;
      border: 1px solid #000000;
      border-radius: 20px;
      padding: 4px 8px;
    }
    & > div:nth-of-type(2) {
      font-family: NanumMyeongjoExtraBold;
      font-size: 42px;
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
export const StyledGoBackBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const StyledTestScoreContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
`;

export const StyledTestQuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 1;
  min-height: 1200px;
`;

export const StyledTestSectionWrapper = styled.div`
  padding: 24px;
  width: 50%;
  height: 100%;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #000;
  }
`;

export const StyledSubmitBtn = styled.button<{ disabled: boolean }>`
  position: absolute;
  font-size: 24px;
  padding: 4px 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  bottom: 0;
  right: 0;
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
