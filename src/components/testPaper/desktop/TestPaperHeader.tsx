import { TimerIcon } from '@/components/icons/Icon';
import { StyledTestHeaderWrapper, StyledTestScoreContainer } from './TestPaperLayout.styles';
import { useAtomValue } from 'jotai';
import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { TestType, testTypeMap } from '@/types/utils';
import dayjs from 'dayjs';
import Image from 'next/image';

export const TestPaperHeader = ({
  headerInfo,
  score,
}: {
  headerInfo: { testType: TestType; maker: string };
  score?: number;
}) => {
  const formatTimeLeft = useAtomValue(TakingTestStore.FormatTimeLeftAtom);
  const takingTestStatus = useAtomValue(TakingTestStore.TakingTestStatusAtom);
  const { testType, maker } = headerInfo;

  return (
    <StyledTestHeaderWrapper id="test-header">
      <StyledTestScoreContainer>
        {score !== undefined && <Image src={`/${score}.png`} alt="score" layout="fill" objectFit="cover" />}
      </StyledTestScoreContainer>
      {score === undefined && takingTestStatus === TakingTestStatus.ING && (
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
  );
};
