import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { Question } from './Question';
import { ICoupleTestResult, testTypeMap } from '@/types/utils';
import { useAtomValue } from 'jotai';
import { SelectedAnswersAtom } from '../store/QuestionListStore';
import { css } from '@emotion/react';

type QuestionListProps = {
  testType: ICoupleTestResult['testType'];
  testQuestions: ICoupleTestResult['testQuestions'];
  maker: ICoupleTestResult['maker'];
  status: ICoupleTestResult['status'];
};
const QuestionList = ({ testType, maker, testQuestions }: QuestionListProps) => {
  // 내가 에 사람 이름을 넣어서 수정
  //  1,2번 문항은 제외하기
  //  다음 페이지로 넘기기 기능 추가
  const selectedAnswers = useAtomValue(SelectedAnswersAtom);

  return (
    <>
      <StyledTestWrapper id="pdf-content">
        <StyledTestHeaderWrapper id="test-header">
          <div>{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
          <div>
            <div id="test-time">제 1교시</div>
            <div>{testTypeMap[testType]} 영역</div>
            <div id="test-odd">{maker} 유형</div>
          </div>
        </StyledTestHeaderWrapper>
        <StyledTestQuestionWrapper>
          <StyledTestSectionWrapper>
            {testQuestions.slice(0, Math.round(testQuestions.length / 2)).map((question, index) => (
              <Question key={index} question={question} index={index} />
            ))}
          </StyledTestSectionWrapper>
          <StyledTestSectionWrapper>
            {testQuestions.slice(Math.round(testQuestions.length / 2)).map((question, index) => (
              <Question key={index + 5} question={question} index={index + 5} />
            ))}
          </StyledTestSectionWrapper>
          <StyledSubmitBtn disabled={Object.keys(selectedAnswers).length !== testQuestions.length}>
            제출하기
          </StyledSubmitBtn>
        </StyledTestQuestionWrapper>
      </StyledTestWrapper>
    </>
  );
};

export default QuestionList;

const StyledTestWrapper = styled.div`
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

const StyledTestHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #000000;
  padding-bottom: 16px;
  width: 100%;
  min-height: 120px;
  & > div:first-of-type {
    font-family: NanumSquareB;
    font-size: 20px;
    text-align: center;
  }
  & > div:last-of-type {
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

const StyledTestQuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 1;
  min-height: 1200px;
`;

const StyledTestSectionWrapper = styled.div`
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
