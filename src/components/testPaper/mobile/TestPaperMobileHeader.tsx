import { useAtomValue } from 'jotai';
import { TakingTestStatus, TakingTestStore } from '@/store/TakingTestStore';
import { GoBackIcon, TimerIcon } from '@/components/icons/Icon';
import dayjs from 'dayjs';
import { TestType, testTypeMap } from '@/types/utils';
import { StyledMobileTestHeaderWrapper, StyledMobileTestScoreContainer } from './TestPaperMobileLayout.styles';
import { StyledGoBackBtn } from '../desktop/TestPaperLayout.styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const TestPaperMobileHeader = ({
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
    <StyledMobileTestHeaderWrapper id="test-header">
      {isResultSheet && (
        <>
          <StyledGoBackBtn
            onClick={() => {
              router.back();
            }}
          >
            <GoBackIcon size={24} fill="#555555" />
          </StyledGoBackBtn>
          <StyledMobileTestScoreContainer>
            <Image src={`/${score}.png`} alt="score" layout="fill" objectFit="contain" />
          </StyledMobileTestScoreContainer>
        </>
      )}
      {!score && takingTestStatus === TakingTestStatus.ING && (
        <div className="test-timer">
          <TimerIcon size={20} fill={'#FF9999'} />
          <span>{formatTimeLeft}</span>
        </div>
      )}
      <div className="test-title">{`${dayjs().get('year') + 1}학년도 연애수학능력시험 문제지`}</div>
      <div className="test-info">
        <div id="test-time">제 1교시</div>
        <div>{testTypeMap[testType]} 영역</div>
        <div id="test-odd">{maker}</div>
      </div>
    </StyledMobileTestHeaderWrapper>
  );
};
