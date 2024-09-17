import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  background-color: #f3f4f6;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.5;
`;

const Spotlight = styled(motion.div)`
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
  background: white;
  clip-path: circle(50% at center);
`;

const InstructionText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExampleArea = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const SpotlightTutorial = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { x: '10%', y: '20%', width: '20%', height: '20%' },
    { x: '50%', y: '30%', width: '30%', height: '30%' },
    { x: '20%', y: '60%', width: '25%', height: '25%' },
  ];

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <Container onClick={nextStep}>
      <Overlay />

      <Spotlight animate={steps[step]} transition={{ duration: 0.5 }} />

      <InstructionText>
        클릭하여 다음 단계로 이동 (단계 {step + 1}/{steps.length})
      </InstructionText>

      {/* 예시 콘텐츠 */}
      <ExampleArea style={{ top: '20%', left: '10%', width: '20%', height: '20%', backgroundColor: '#3b82f6' }}>
        영역 1
      </ExampleArea>
      <ExampleArea style={{ top: '30%', left: '50%', width: '30%', height: '30%', backgroundColor: '#10b981' }}>
        영역 2
      </ExampleArea>
      <ExampleArea style={{ top: '60%', left: '20%', width: '25%', height: '25%', backgroundColor: '#ef4444' }}>
        영역 3
      </ExampleArea>
    </Container>
  );
};
