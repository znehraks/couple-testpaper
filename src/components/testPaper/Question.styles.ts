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
`;

export const StyledTestQuestionAnswerContainer = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
