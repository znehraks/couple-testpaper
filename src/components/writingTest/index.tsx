/** @jsxImportSource @emotion/react */
import { SelectTestTaker } from './SelectTestTaker';
import { Step } from './Step';
import { ITestWithAnswerResult } from '@/types/utils';
import { useAtomValue } from 'jotai';
import { WritingTestStore } from '../../store/WritingTestStore';
import { Ready } from './Ready';
import { StyledContentWrapper } from './styles';
import { HowTo } from './HowTo';
import { Complete } from './Complete';
import { useRouter } from 'next/router';
import { SelectParent } from './SelectParent';

interface IWritingTestProps {
  onSubmit: (result: ITestWithAnswerResult) => void;
}
const WritingTest = ({ onSubmit }: IWritingTestProps) => {
  const router = useRouter();
  const step = useAtomValue(WritingTestStore.StepAtom);

  return (
    <StyledContentWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* 부모님 고사일때에만 자기 자신이 아빠인지 엄마인지 선택 */}
      {router.query.testType === 'parents-test' && step === 'SELECT_PARENT' && <SelectParent />}
      {step === 'SELECT_TEST_TAKER' && <SelectTestTaker />}
      {step === 'READY' && <Ready />}
      {step === 'HOWTO' && <HowTo />}
      {step === 'QUESTIONS' && <Step onSubmit={onSubmit} />}
      {step === 'COMPLETE' && <Complete />}
    </StyledContentWrapper>
  );
};

export default WritingTest;
