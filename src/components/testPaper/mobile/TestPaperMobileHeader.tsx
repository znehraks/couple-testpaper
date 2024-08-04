import { useAtomValue } from 'jotai';
import { TakingTestStore } from '@/store/TakingTestStore';
import { TimerIcon } from '@/components/icons/Icon';
import dayjs from 'dayjs';
import { TestType, testTypeMap } from '@/types/utils';
import { StyledMobileTestHeaderWrapper } from './TestPaperMobileLayout.styles';

export const TestPaperMobileHeader = ({
  headerInfo,
  score,
}: {
  headerInfo: { testType: TestType; maker: string };
  score?: number;
}) => {
  const formatTimeLeft = useAtomValue(TakingTestStore.FormatTimeLeftAtom);
  const isTestStarted = useAtomValue(TakingTestStore.IsTestStartedAtom);

  const { testType, maker } = headerInfo;
  return (
    <StyledMobileTestHeaderWrapper id="test-header">
      {isTestStarted && (
        <div className="test-timer">
          <TimerIcon size={18} fill={'#FF7979'} />
          <span>{formatTimeLeft}</span>
        </div>
      )}
      <div className="test-title">{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
      <div className="test-info">
        {score}
        <div id="test-time">제 1교시</div>
        <div>{testTypeMap[testType]} 영역</div>
        <div id="test-odd">{maker}</div>
      </div>
    </StyledMobileTestHeaderWrapper>
  );
};
