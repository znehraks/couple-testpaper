import styled from '@emotion/styled';
import { useGetTestEntire } from '@/services/useTests';
import { TestType } from '@/types/utils';
import { Layout } from '@/components/Layout';

export default function TestResultPage() {
  const { data } = useGetTestEntire({ testType: TestType.romance });
  if (!data) return null;
  console.log('data', data);
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
        <StyledTestResultHeaderWrapper>헤더</StyledTestResultHeaderWrapper>
        <StyledTestResultBodyWrapper>
          {data.rankings?.map((ranking) => (
            <>
              <div>{ranking.testDateTime}</div>

              <div>{ranking.testScore}</div>

              <div>{ranking.testSpentTime}</div>

              <div>{ranking.testerNickname}</div>
              <br />
            </>
          ))}
        </StyledTestResultBodyWrapper>
      </StyledTestResultWrapper>
    </Layout>
  );
}

const StyledTestResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTestResultHeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: beige;
`;

const StyledTestResultBodyWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
