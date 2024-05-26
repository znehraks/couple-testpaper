import { Layout } from '@/components/Layout';
import { HeartIcon, ParentIcon } from '@/components/icons/Icon';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <StyledHomeContent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <StyledHomeTitle>출제를 원하는 시험 유형을 선택해주세요.</StyledHomeTitle>
        <StyledMenuContainer>
          <StyledMenu
            onClick={() => {
              router.push('/couple-test');
            }}
          >
            <HeartIcon size={42} />
            <div>연애고사</div>
          </StyledMenu>
          <StyledMenu
            onClick={() => {
              router.push('/couple-test');
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

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledMenu = styled.div`
  width: 120px;
  height: 120px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
`;
