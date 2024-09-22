import { Layout } from '@/components/Layout';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    setStep('READY');
  }, [setMe, setStep, setTestTaker]);

  return (
    <Layout>
      <StyledHomeContent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <StyledHomeTitle>출제를 원하는 시험 유형을 선택해주세요.</StyledHomeTitle>
        <StyledMenuContainer>
          <StyledMenu
            color="#eb8291"
            onClick={() => {
              setTestTaker('forCoupleBoth');
              setStep('READY');
              router.push('/making/couple-test');
            }}
          >
            <HeartIcon size={48} fill="#eb8291" />
            <div>연인고사</div>
          </StyledMenu>
          <StyledMenu
            color="#666666"
            onClick={() => {
              setTestTaker('forFriendsAll');
              setStep('READY');
              router.push('/making/friends-test');
            }}
          >
            <FriendsIcon size={48} fill="#666666" />
            <div>친구고사</div>
          </StyledMenu>
          {/* <StyledMenu
            color="#947463"
            onClick={() => {
              router.push('/making/parents-test');
            }}
          >
            <ParentIcon size={48} fill="#947463" />
            <div>부모님고사</div>
          </StyledMenu> */}
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
