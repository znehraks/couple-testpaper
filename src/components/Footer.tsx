import { licenses } from '@/data/licenses';
import { CurrentLicensesAtom } from '@/store';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

export const Footer = () => {
  const currentLicenses = useAtomValue(CurrentLicensesAtom);

  return (
    <StyledFooterWrapper>
      {currentLicenses.map((currentLicense) => (
        <div>{licenses[currentLicense]}</div>
      ))}
    </StyledFooterWrapper>
  );
};

const StyledFooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  & > div {
    display: block;
  }
`;
