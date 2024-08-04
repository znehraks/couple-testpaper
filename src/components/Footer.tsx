import { licenses } from '@/data/licenses';
import { CurrentLicensesAtom } from '@/store';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

export const Footer = () => {
  const currentLicenses = useAtomValue(CurrentLicensesAtom);

  return (
    <StyledFooterWrapper>
      {currentLicenses.map((currentLicense) => (
        <div key={currentLicense}>{licenses[currentLicense]}</div>
      ))}
    </StyledFooterWrapper>
  );
};

const StyledFooterWrapper = styled.div`
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  & > div {
    font-family: notoSans;
    font-size: 12px;
    & > * {
      font-family: notoSans;
    }
    display: block;
  }
`;
