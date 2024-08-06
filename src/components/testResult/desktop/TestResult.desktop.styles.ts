import styled from '@emotion/styled';

export const StyledTestResultWrapper = styled.div`
  width: 768px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 64px;
  position: relative;
`;

export const StyledHelpText = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  z-index: 2;
  background-color: white;
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 4px 8px;
`;

export const StyledTestResultHeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
`;

// export const StyledSearchInputContainer = styled.div<{ isFocused: boolean }>`
//   position: relative;
//   width: 180px;
//   height: 100%;
//   transition: opacity 0.2s ease-in-out;
//   opacity: ${({ isFocused }) => (isFocused ? 1 : 0.3)};
//   & > div:first-of-type {
//     position: absolute;
//     bottom: 0;
//     transform: translateY(-50%);
//   }
// `;

// export const StyledSearchInput = styled.input`
//   width: 100%;
//   font-size: 28px;
//   border-bottom: 1px solid grey;
//   padding-left: 24px;
// `;

export const StyledTestResultBodyWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledTestResultBodyTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  font-size: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div:last-of-type {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 24px;
  }
`;
export const StyledTestResultBodyTop3Wrapper = styled.div`
  flex: 1;
  width: 100%;
  gap: 24px;
  min-height: 300px;
  background-color: aliceblue;
  position: relative;
  border-radius: 12px;
  & > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.2s ease-in-out;
    /* 트로피, 등수 */
    & > div:first-of-type {
      font-size: 60px;
      font-weight: 600;
      letter-spacing: 4px;
      position: relative;
      & > div:last-of-type {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-45%, -75%);
        min-width: fit-content;
      }
    }
    /* 닉네임 */
    & > div:nth-of-type(2) {
      font-size: 36px;
      font-weight: 700;
    }
    /* 점수 */
    & > div:nth-of-type(3) {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 1px;
      & > span:first-of-type {
        font-weight: 700;
        font-size: 30px;
      }
    }
  }
  /* 1위 */
  & > div:first-of-type {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  /* 2위 */
  & > div:nth-of-type(2) {
    top: 35%;
    left: 25%;
    transform: translateX(-50%);
  }
  /* 3위 */
  & > div:nth-of-type(3) {
    top: 35%;
    left: 75%;
    transform: translateX(-50%);
  }
`;
export const StyledTestResultBodyBelow3Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  max-height: 50%;
  overflow: auto;
  & > div {
    padding: 4px 12px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid grey;
    & > div:first-of-type {
      width: 30%;
    }
    & > div:nth-of-type(2) {
      width: 40%;
    }
    & > div:nth-of-type(3) {
      width: 15%;
    }
    & > div:last-of-type {
      width: 15%;
    }
  }
  & > div:first-of-type {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
  }
  & > div:not(:first-of-type) {
    cursor: pointer;
    &:hover {
      background-color: aliceblue;
    }
  }
`;
