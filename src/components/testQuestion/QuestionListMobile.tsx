import dayjs from 'dayjs';
import { Question } from './Question';
import { ICoupleTestResult, testTypeMap } from '@/types/utils';
import { StyledTestHeaderWrapper, StyledTestQuestionWrapper, StyledTestWrapper } from './QuestionListMobile.styles';

type QuestionListProps = {
  testType: ICoupleTestResult['testType'];
  testQuestions: ICoupleTestResult['testQuestions'];
  maker: ICoupleTestResult['maker'];
  status: ICoupleTestResult['status'];
};

export const QuestionListMobile = ({ testQuestions, testType, maker }: QuestionListProps) => {
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
          <div id="test-odd">{maker}</div>
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
