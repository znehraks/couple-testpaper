import { useAtomValue } from 'jotai';
import { StyledMobileSubmitBtn } from './TestPaperMobileLayout.styles';
import { TakingTestStore } from '@/store/TakingTestStore';
import { useGetCoupleTestSheet } from '@/services/useCoupleTests';
import { useMakeResult } from '../../hooks/useMakeResult';

export const TestPaperMobileSubmitButton = () => {
  const selectedAnswers = useAtomValue(TakingTestStore.SelectedAnswersAtom);
  const { makeResult } = useMakeResult();
  const { data, isLoading, isError } = useGetCoupleTestSheet();
  if (isLoading || isError || !data) return null;

  const { testQuestions: testQuestions } = data;

  return (
    <StyledMobileSubmitBtn
      id="question-list-submit"
      disabled={Object.keys(selectedAnswers).length !== testQuestions.length}
      onClick={makeResult}
      // 누르면 또 보상형 광고 노출
      // 그 페이지에서 다 본 후에, 결과 페이지로 이동해서, 결과 페이지에서는 결과를 보여주고, 결과를 저장하고, 결과를 공유할 수 있는 기능 추가
      // 바로 답 알려주지 말고, 또 풀게 한 다음 점수 확인 기능 추가
    >
      제출하기
    </StyledMobileSubmitBtn>
  );
};
