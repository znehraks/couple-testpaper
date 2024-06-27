import { Layout } from '@/components/Layout';
import QuestionList from '@/components/testQuestion/QuestionList';
import QuestionListMobile from '@/components/testQuestion/QuestionListMobile';
import { useMobile } from '@/hooks/useMobile';
import { getCoupleTest } from '@/services/coupleTests';
import { ICoupleTestResult } from '@/types/utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { IsGeneratingPDFAtom } from '@/components/store';
import { generatePDF } from '@/services/generatePdf';
import { motion } from 'framer-motion';

// const _testData = [
//   {
//     question: '당신의 이름은?',
//     answers: [],
//     answerKeys: ['유정민'],
//   },
//   {
//     question: '나는 지금?',
//     answers: ['자발적 솔로', '비자발적 솔로', '연애중', '결혼', '기타'],
//     answerKeys: ['비자발적 솔로'],
//   },
//   {
//     question: '내가 가장 좋아하는 영화는?',
//     answers: ['어메이징 스파이더맨 2', '맨 오브 스틸', '조커', '해리 포터와 죽음의 성물 2부', '이 중에 없다'],
//     answerKeys: ['어메이징 스파이더맨 2'],
//   },
//   {
//     question: '오늘은 소개팅 당일 날, 내가 예약할 식당은?',
//     answers: ['기타', '일식', '한식', '양식', '이 중에 없다'],
//     answerKeys: ['한식'],
//   },
//   {
//     question: '연인과 술집에 왔다. 내가 시킬 안주는?',
//     answers: ['족발', '삼겹살', '소라무침', '피순대', '이 중에 없다'],
//     answerKeys: ['소라무침'],
//   },
//   {
//     question: '나에게 연예시뮬레이션 예능(하트O그널, 나는O로, 솔로O옥 등...)이란?',
//     answers: ['이젠 지겹다', '딱히 관심 없다', '한번씩은 본다', '아직 재미있다', '매번 기대된다'],
//     answerKeys: ['아직 재미있다'],
//   },
//   {
//     question: '주말에 주로 나는?',
//     answers: ['일한다', '집에서 쉰다', '친구들과 만난다', '데이트한다', '취미생활을 한다'],
//     answerKeys: ['데이트한다'],
//   },
//   {
//     question: '연인끼리 여행을 간다면 숙소는?',
//     answers: ['호텔', '에어비앤비', '펜션', '모텔', '노숙'],
//     answerKeys: ['에어비앤비'],
//   },
//   {
//     question: '학창시절 나는?',
//     answers: ['극 인싸', '나름 인싸', '인싸도 아싸도 아니다', '나름 아싸', '극 아싸'],
//     answerKeys: ['나름 아싸'],
//   },
//   {
//     question: '술자리에서 연인에게 카톡이 왔을때 나는?',
//     answers: [
//       '바로 읽고 답장한다',
//       '목록에서 읽고 나중에 답장한다',
//       '읽지 않고 나중에 답장한다',
//       '읽고 답장하지 않는다',
//       '카톡을 삭제한다',
//     ],
//     answerKeys: ['카톡을 삭제한다'],
//   },
// ];
export default function CoupleTestPage() {
  const isMobile = useMobile();
  const [isDownloadBtnVisible, setIsDownloadBtnVisible] = useState(true);
  const [, setIsGeneratingPDF] = useAtom(IsGeneratingPDFAtom);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQuery<ICoupleTestResult>({
    queryKey: ['coupleTest', id],
    queryFn: () => getCoupleTest(id as string),
  });

  useEffect(() => {
    if (data?.testQuestions.length === 0) {
      router.replace('/couple-test');
      return;
    }
  }, [router, data?.testQuestions.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleWheel = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsDownloadBtnVisible(true);
      timeout = setTimeout(() => {
        setIsDownloadBtnVisible(false);
      }, 5000);
    };
    handleWheel();
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <></>;
  }
  const { testQuestions, testType, maker, status } = data;

  // 시험지를 pdf파일로 만들어서 다운로드 받을 수 있도록 함
  // 응시 시작을 모달처럼 띄워서 뒤에 백드롭으로 어둡게처리하고, 응시 시작을 누르면 응시 시작되도록 함
  // 그 전까지는 눌러도 반응이 안되도록 함
  return (
    <Layout>
      <StyledPdfButton
        visible={isDownloadBtnVisible}
        onClick={async () => {
          setIsGeneratingPDF(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await generatePDF();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsGeneratingPDF(false);
        }}
      >
        시험지 다운로드
      </StyledPdfButton>
      {isMobile ? (
        <QuestionListMobile testType={testType} maker={maker} status={status} testQuestions={testQuestions} />
      ) : (
        <QuestionList testType={testType} maker={maker} status={status} testQuestions={testQuestions} />
      )}
    </Layout>
  );
}

const StyledPdfButton = styled(motion.button)<{ visible: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50%;
  transform: translateX(50%);
  transition:
    box-shadow,
    opacity 0.2s ease-in-out;
  font-size: 24px;
  padding: 4px 8px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 2;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  &:hover {
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;
