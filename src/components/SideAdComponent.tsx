import styled from '@emotion/styled';

// 데스크톱에서만 보이는 사이드 광고 컴포넌트
interface ISideAdComponentProps {
  side?: 'left' | 'right';
}
export const SideAdComponent = ({ side = 'left' }: ISideAdComponentProps) => {
  return <StyledSideAdComponentWrapper side={side}>광고</StyledSideAdComponentWrapper>;
};

const StyledSideAdComponentWrapper = styled.div<{ side: ISideAdComponentProps['side'] }>`
  order: ${(props) => (props.side === 'left' ? 0 : 2)};
`;
