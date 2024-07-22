import styled from '@emotion/styled';
import { useGetTestEntire } from '@/services/useTests';
import { TestType } from '@/types/utils';
import { Layout } from '@/components/Layout';
import { useLicenses } from '@/hooks/useLicenses';
import { useEffect, useMemo, useState } from 'react';
import { MagnifierIcon, TrophyIcon } from '@/components/icons/Icon';
import { useInput } from '@/components/takingTest/hooks/useInput';
import { orderBy } from 'lodash-es';

export default function TestResultPage() {
  const { data } = useGetTestEntire({ testType: TestType.romance });
  const { sanitizeLicenseNames } = useLicenses(['trophyIcon', 'magnifierIcon']);
  const { isFocused, ...inputProps } = useInput({ name: 'search', initialValue: '' });
  const [currentSortIndex] = useState<'testScore' | 'testSpentTime'>('testScore');
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
          <StyledSearchInputContainer isFocused={isFocused}>
            <div>
              <MagnifierIcon size={20} />
            </div>
            <StyledSearchInput {...inputProps} placeholder="검색어를 입력하세요." />
          </StyledSearchInputContainer>
        </StyledTestResultHeaderWrapper>
        <StyledTestResultBodyWrapper>
          <StyledTestResultBodyTitleWrapper>성적표</StyledTestResultBodyTitleWrapper>
          <StyledTestResultBodyTop3Wrapper>
            {top3Rankings.map((ranking, index) => (
              <div>
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
                <div>{ranking.testScore}점</div>
              </div>
            ))}
          </StyledTestResultBodyTop3Wrapper>
          <StyledTestResultBodyBelow3Wrapper>
            <div>
              <div>순위</div>
              <div>닉네임</div>
              <div>점수</div>
              <div>소요시간</div>
            </div>
            {otherRankings.map((ranking, index) => (
              <div>
                <div>{index + 4}등</div>
                <div>{ranking.testerNickname}</div>
                <div>{ranking.testScore}</div>
                <div>{ranking.testSpentTime}</div>
              </div>
            ))}
          </StyledTestResultBodyBelow3Wrapper>
        </StyledTestResultBodyWrapper>
      </StyledTestResultWrapper>
    </Layout>
  );
}

const StyledTestResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTestResultHeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
`;

const StyledSearchInputContainer = styled.div<{ isFocused: boolean }>`
  position: relative;
  width: 180px;
  height: 100%;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.3)};
  & > div:first-of-type {
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  font-size: 28px;
  border-bottom: 1px solid grey;
  padding-left: 24px;
`;

const StyledTestResultBodyWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledTestResultBodyTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  font-size: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTestResultBodyTop3Wrapper = styled.div`
  flex: 1;
  width: 100%;
  gap: 24px;
  background-color: aliceblue;
  position: relative;
  & > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.2s ease-in-out;
    /* 트로피, 등수 */
    & > div:first-of-type {
      font-size: 60px;
      font-weight: 600;
      letter-spacing: 4px;
      position: relative;
      & > div:last-of-type {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-45%, -75%);
        min-width: fit-content;
      }
    }
    /* 닉네임 */
    & > div:nth-of-type(2) {
      font-size: 36px;
      font-weight: 700;
    }
    /* 점수 */
    & > div:nth-of-type(3) {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 1.5px;
    }
  }
  /* 1위 */
  & > div:first-of-type {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  /* 2위 */
  & > div:nth-of-type(2) {
    top: 35%;
    left: 25%;
    transform: translateX(-50%);
  }
  /* 3위 */
  & > div:last-of-type {
    top: 35%;
    left: 75%;
    transform: translateX(-50%);
  }
`;
const StyledTestResultBodyBelow3Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  & > div {
    padding: 4px 12px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    border-bottom: 1px solid grey;
    & > div:first-of-type {
      width: 30%;
    }
    & > div:nth-of-type(2) {
      width: 40%;
    }
    & > div:nth-of-type(3) {
      width: 15%;
    }
    & > div:last-of-type {
      width: 15%;
    }
  }
`;
