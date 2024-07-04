import dayjs from 'dayjs';
import { Question } from './Question';
import { ICoupleTestResult, testTypeMap } from '@/types/utils';
import { useAtomValue } from 'jotai';
import { FormatTimeLeftAtom, IsTestStartedAtom, SelectedAnswersAtom } from '../../store/QuestionListStore';
import {
  StyledSubmitBtn,
  StyledTestHeaderWrapper,
  StyledTestQuestionWrapper,
  StyledTestSectionWrapper,
  StyledTestWrapper,
} from './QuestionList.styles';
import { TimerIcon } from '../icons/Icon';

type QuestionListProps = {
  testType: ICoupleTestResult['testType'];
  testQuestions: ICoupleTestResult['testQuestions'];
  maker: ICoupleTestResult['maker'];
  status: ICoupleTestResult['status'];
};
export const QuestionList = ({ testType, maker, testQuestions }: QuestionListProps) => {
  // 내가 에 사람 이름을 넣어서 수정
  //  1,2번 문항은 제외하기
  //  다음 페이지로 넘기기 기능 추가
  const selectedAnswers = useAtomValue(SelectedAnswersAtom);
  const formatTimeLeft = useAtomValue(FormatTimeLeftAtom);

  const isTestStarted = useAtomValue(IsTestStartedAtom);

  return (
    <>
      <StyledTestWrapper id="pdf-content">
        <StyledTestHeaderWrapper id="test-header">
          {isTestStarted && (
            <div className="test-timer">
              <TimerIcon size={36} fill={'#FF7979'} />
              <span>{formatTimeLeft}</span>
            </div>
          )}
          <div className="test-title">{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
          <div className="test-info">
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
          <StyledSubmitBtn
            id="question-list-submit"
            disabled={Object.keys(selectedAnswers).length !== testQuestions.length}
            onClick={() => {
              const score = testQuestions.reduce((acc, question, index) => {
                if (question.answer === selectedAnswers[index]?.selectedAnswer.text) {
                  return acc + 10;
                }
                return acc;
              }, 0);
              // 누르면 또 보상형 광고 노출
              // 그 페이지에서 다 본 후에, 결과 페이지로 이동해서, 결과 페이지에서는 결과를 보여주고, 결과를 저장하고, 결과를 공유할 수 있는 기능 추가
              // 바로 답 알려주지 말고, 또 풀게 한 다음 점수 확인 기능 추가
              console.log('score', score);
            }}
          >
            제출하기
          </StyledSubmitBtn>
        </StyledTestQuestionWrapper>
      </StyledTestWrapper>
    </>
  );
};
