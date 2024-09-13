import { Layout } from '@/components/Layout';
import { FriendsIcon, HeartIcon, ParentIcon } from '@/components/icons/Icon';
import { StyledMenu, StyledMenuContainer } from '@/components/writingTest/styles';
import { WritingTestStore } from '@/store/WritingTestStore';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const setTestTaker = useSetAtom(WritingTestStore.TestTakerAtom);
  const setMe = useSetAtom(WritingTestStore.MeAtom);
  const setStep = useSetAtom(WritingTestStore.StepAtom);

  useEffect(() => {
    setTestTaker(null);
    setMe(null);
    setStep('SELECT_TEST_TAKER');
  }, [setMe, setStep, setTestTaker]);

  return (
    <Layout>
      <StyledHomeContent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <StyledHomeTitle>출제를 원하는 시험 유형을 선택해주세요.</StyledHomeTitle>
        <StyledMenuContainer>
          <StyledMenu
            onClick={() => {
              router.push('/making/couple-test');
            }}
          >
            <HeartIcon size={42} />
            <div>연인고사</div>
          </StyledMenu>
          <StyledMenu
            onClick={() => {
              router.push('/making/friends-test');
            }}
          >
            <FriendsIcon size={42} />
            <div>친구고사</div>
          </StyledMenu>
          <StyledMenu
            onClick={() => {
              router.push('/making/parents-test');
            }}
          >
            <ParentIcon size={42} />
            <div>부모님고사</div>
          </StyledMenu>
        </StyledMenuContainer>
      </StyledHomeContent>
    </Layout>
  );
}
const StyledHomeContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

const StyledHomeTitle = styled.h1`
  font-size: 32px;
  text-align: center;
`;
