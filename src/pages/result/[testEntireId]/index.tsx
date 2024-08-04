import { useGetTestEntire } from '@/services/useTests';
import { TestType } from '@/types/utils';
import { Layout } from '@/components/Layout';
import { useLicenses } from '@/hooks/useLicenses';
import { useEffect, useMemo, useState } from 'react';
import { TrophyIcon } from '@/components/icons/Icon';
import { orderBy } from 'lodash-es';
import { useRouter } from 'next/router';
import {
  StyledTestResultBodyBelow3Wrapper,
  StyledTestResultBodyTitleWrapper,
  StyledTestResultBodyTop3Wrapper,
  StyledTestResultBodyWrapper,
  StyledTestResultHeaderWrapper,
  StyledTestResultWrapper,
} from '@/components/testResult/desktop/TestResult.desktop.styles';

export default function TestResultPage() {
  const router = useRouter();
  const { data } = useGetTestEntire({ testType: TestType.romance });
  const { sanitizeLicenseNames } = useLicenses(['trophyIcon', 'magnifierIcon']);
  //   const { isFocused, ...inputProps } = useInput({ name: 'search', initialValue: '' });
  const [currentSortIndex, setCurrentSortIndex] = useState<'testScore' | 'testSpentTime'>('testScore');
  useEffect(() => {
    return () => {
      sanitizeLicenseNames();
    };
  }, [sanitizeLicenseNames]);

  const sortedRankings = useMemo(() => {
    if (!data?.rankings) return [];
    const sortOrder =
      currentSortIndex === 'testScore' ? ['testScore', 'testSpentTime'] : ['testSpentTime', 'testScore'];
    const sortMethod: ('desc' | 'asc')[] = currentSortIndex === 'testScore' ? ['desc', 'asc'] : ['asc', 'desc'];

    return orderBy(data.rankings, sortOrder, sortMethod);
  }, [currentSortIndex, data?.rankings]);

  const top3Rankings = useMemo(() => sortedRankings.slice(0, 3), [sortedRankings]);

  const otherRankings = useMemo(() => sortedRankings.slice(3), [sortedRankings]);

  if (!data) return null;
  // TODO 점수순위
  // 1위는 그 올림픽 시상식처럼 가운데, 2위는 왼쪽, 3위는 오른쪽으로 보여주기
  // 1위 부터 차례대로 옆에서 스윽 넘어오는 애니메이션으로 보여주기
  // 4위부터는 그냥 아래로 착착착
  // 각 결과 란 누르면, 시험지 페이지로 넘어가지고, 거기에 맞은 문제는 빨간색 동그라미 숫자에 표시해주고, 틀린건틀린표시,
  //  우측 상단에는 점수 표시

  // TODO 시험 빨리 푼 순서도 보여주기

  return (
    <Layout>
      <StyledTestResultWrapper>
        <StyledTestResultHeaderWrapper>
          {/* <StyledSearchInputContainer isFocused={isFocused}>
            <div>
              <MagnifierIcon size={20} />
            </div>
            <StyledSearchInput {...inputProps} placeholder="검색어를 입력하세요." />
          </StyledSearchInputContainer> */}
        </StyledTestResultHeaderWrapper>
        <StyledTestResultBodyWrapper>
          <StyledTestResultBodyTitleWrapper>
            순위표
            <div
              onClick={() => {
                setCurrentSortIndex((prev) => (prev === 'testScore' ? 'testSpentTime' : 'testScore'));
              }}
            >
              {currentSortIndex === 'testScore' ? '빨리 푼 순으로 보기' : '시험 점수 순으로 보기'}
            </div>
          </StyledTestResultBodyTitleWrapper>
          <StyledTestResultBodyTop3Wrapper>
            {top3Rankings.map((ranking, index) => (
              <div
                key={index}
                onClick={() => {
                  router.push(`${router.asPath}/${encodeURIComponent(ranking.testerNickname)}`);
                }}
              >
                <div>
                  <TrophyIcon
                    size={72}
                    fill={(() => {
                      switch (index) {
                        case 0:
                          return 'gold';
                        case 1:
                          return 'silver';
                        case 2:
                          return '#CD7F32';
                      }
                    })()}
                  />
                  <div>{index + 1}</div>
                </div>
                <div>
                  {index + 1}등. {ranking.testerNickname}
                </div>
                {currentSortIndex === 'testScore' ? (
                  <div>
                    <span>{ranking.testScore}점</span> / <span>{ranking.testSpentTime}초</span>
                  </div>
                ) : (
                  <div>
                    <span>{ranking.testSpentTime}초</span> / <span>{ranking.testScore}점</span>
                  </div>
                )}
              </div>
            ))}
          </StyledTestResultBodyTop3Wrapper>
          <StyledTestResultBodyBelow3Wrapper>
            {otherRankings.length ? (
              <>
                <div>
                  <div>
                    <strong>순위</strong>
                  </div>
                  <div>
                    <strong>닉네임</strong>
                  </div>
                  <div>
                    <strong>점수</strong>
                  </div>
                  <div>
                    <strong>소요시간</strong>
                  </div>
                </div>
                {otherRankings.map((ranking, index) => (
                  <div key={index + 4}>
                    <div>{index + 4}등</div>
                    <div>{ranking.testerNickname}</div>
                    <div>{ranking.testScore}</div>
                    <div>{ranking.testSpentTime}</div>
                  </div>
                ))}
              </>
            ) : null}
          </StyledTestResultBodyBelow3Wrapper>
        </StyledTestResultBodyWrapper>
      </StyledTestResultWrapper>
    </Layout>
  );
}
