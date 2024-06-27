import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { Question } from './Question';
import { ICoupleTestResult, testTypeMap } from '@/types/utils';

type QuestionListProps = {
  testType: ICoupleTestResult['testType'];
  testQuestions: ICoupleTestResult['testQuestions'];
  maker: ICoupleTestResult['maker'];
  status: ICoupleTestResult['status'];
};

const QuestionListMobile = ({ testQuestions, testType, maker }: QuestionListProps) => {
  // 내가 에 사람 이름을 넣어서 수정
  //  1,2번 문항은 제외하기
  //  다음 페이지로 넘기기 기능 추가

  return (
    <StyledTestWrapper>
      <StyledTestHeaderWrapper>
        <div>{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
        <div>
          <div>제 1교시</div>
          <div>{testTypeMap[testType]} 영역</div>
          <div id="test-odd">{maker}형asdfadsads</div>
        </div>
      </StyledTestHeaderWrapper>
      <StyledTestQuestionWrapper>
        {testQuestions.map((question, index) => (
          <Question key={index} question={question} index={index} />
        ))}
      </StyledTestQuestionWrapper>
    </StyledTestWrapper>
  );
};

export default QuestionListMobile;

const StyledTestWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 0px 24px;
  width: 100%;
  height: 70vh;
  font-size: 18px;
  overflow: hidden;
`;

const StyledTestHeaderWrapper = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  border-bottom: 2px solid #000000;
  padding-bottom: 8px;
  width: 100%;
  min-height: fit-content;
  & > div:first-of-type {
    font-family: NanumSquareB;
    font-size: 14px;
    text-align: center;
    word-break: keep-all;
  }
  & > div:last-of-type {
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

const StyledTestQuestionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 400px;
  width: 100%;
  min-height: fit-content;
  font-size: 24px;
  overflow-y: auto;
`;
