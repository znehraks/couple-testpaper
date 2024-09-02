import { GoBackIcon, TimerIcon } from '@/components/icons/Icon';
import { StyledGoBackBtn, StyledTestHeaderWrapper, StyledTestScoreContainer } from './TestPaperLayout.styles';
import { useAtomValue } from 'jotai';
import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { TestType, testTypeMap } from '@/types/utils';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const TestPaperHeader = ({
  headerInfo,
  score,
}: {
  headerInfo: { testType: TestType; maker: string };
  score?: number;
}) => {
  const router = useRouter();
  const formatTimeLeft = useAtomValue(TakingTestStore.FormatTimeLeftAtom);
  const takingTestStatus = useAtomValue(TakingTestStore.TakingTestStatusAtom);
  const { testType, maker } = headerInfo;
  const isResultSheet = score !== undefined;

  return (
    <StyledTestHeaderWrapper id="test-header">
      {isResultSheet && (
        <>
          <StyledGoBackBtn
            onClick={() => {
              router.back();
            }}
          >
            <GoBackIcon size={42} fill="#555555" />
          </StyledGoBackBtn>
          <StyledTestScoreContainer>
            <Image src={`/${score}.png`} alt="score" layout="fill" objectFit="contain" />
          </StyledTestScoreContainer>
        </>
      )}
      {!isResultSheet && takingTestStatus === TakingTestStatus.ING && (
        <div className="test-timer">
          <TimerIcon size={36} fill={'#FF7979'} />
          <span>{formatTimeLeft}</span>
        </div>
      )}
      <div className="test-title">{`${dayjs().get('year') + 1}학년도 연애수학능력시험 ${isResultSheet ? '답안지' : '문제지'}`}</div>
      <div className="test-info">
        <div id="test-time">제 1교시</div>
        <div>{testTypeMap[testType]} 영역</div>
        <div id="test-odd">{maker} 유형</div>
      </div>
    </StyledTestHeaderWrapper>
  );
};
