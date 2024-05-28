import styled from '@emotion/styled';
import { ITestQuestion } from '@/types/utils';
import dayjs from 'dayjs';

type QuestionListProps = {
  questions: ITestQuestion[];
};

const circleNumberMap = ['①', '②', '③', '④', '⑤'];
const QuestionList = ({ questions }: QuestionListProps) => {
  console.log('questions', questions);
  // 내가 에 사람 이름을 넣어서 수정
  //  1,2번 문항은 제외하기
  //  다음 페이지로 넘기기 기능 추가
  return (
    <StyledTestWrapper>
      <StyledTestHeaderWrapper>
        <div>{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
        <div>
          <div>제 1교시</div>
          <div>연애 영역</div>
          <div>홀수형</div>
        </div>
      </StyledTestHeaderWrapper>
      <StyledTestQuestionWrapper>
        <StyledTestSectionWrapper>
          {questions.slice(0, Math.round(questions.length / 2)).map((question, index) => (
            <StyledTestQuestionBox key={index}>
              <StyledTestQuestionTitleContainer>
                {index + 1}. {question.question}
              </StyledTestQuestionTitleContainer>
              <StyledTestQuestionAnswerContainer>
                {question.answers.map((answer, index) => (
                  <div key={index}>
                    {circleNumberMap[index]} {answer}
                  </div>
                ))}
              </StyledTestQuestionAnswerContainer>
            </StyledTestQuestionBox>
          ))}
        </StyledTestSectionWrapper>
        <StyledTestSectionWrapper>
          {questions.slice(Math.round(questions.length / 2)).map((question, index) => (
            <StyledTestQuestionBox key={index}>
              <StyledTestQuestionTitleContainer>
                {index + 5 + 1}. {question.question}
              </StyledTestQuestionTitleContainer>
              <StyledTestQuestionAnswerContainer>
                {question.answers.map((answer, index) => (
                  <div key={index}>
                    {circleNumberMap[index]} {answer}
                  </div>
                ))}
              </StyledTestQuestionAnswerContainer>
            </StyledTestQuestionBox>
          ))}
        </StyledTestSectionWrapper>
      </StyledTestQuestionWrapper>
    </StyledTestWrapper>
  );
};

export default QuestionList;

const StyledTestWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  padding: 72px 48px 24px 48px;
  overflow-y: auto;
  height: 100%;
`;

const StyledTestHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 2px solid #000000;
  padding-bottom: 8px;
  min-height: 100px;
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

    & > div:first-of-type {
      font-family: NanumMyeongjoBold;
      border: 1px solid #000000;
      border-radius: 20px;
      padding: 4px 8px;
    }
    & > div:nth-of-type(2) {
      font-family: NanumMyeongjoExtraBold;
      font-size: 42px;
      margin-right: 16px;
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
  min-height: 1000px;
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

const StyledTestQuestionBox = styled.div`
  font-family: NanumMyeongjo;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 20%;
  * {
    font-family: NanumMyeongjo;
  }
`;

const StyledTestQuestionTitleContainer = styled.div`
  word-break: keep-all;
`;

const StyledTestQuestionAnswerContainer = styled.div`
  padding-left: 6px;
`;
