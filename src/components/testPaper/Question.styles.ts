import styled from '@emotion/styled';

export const StyledTestQuestionBox = styled.div`
  font-family: NanumMyeongjo;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 20%;
  * {
    font-family: NanumMyeongjo;
  }
  @media (max-width: 501px) {
    font-family: NanumMyeongjo;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 48px 0px;
    * {
      font-family: NanumMyeongjo;
    }
  }
`;

export const StyledTestQuestionTitleContainer = styled.div`
  word-break: keep-all;
  position: relative;
  user-select: none;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -30%);
    width: 100px;
    height: 100px;
    opacity: 0.8;
  }
`;

export const StyledTestQuestionAnswerContainer = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
