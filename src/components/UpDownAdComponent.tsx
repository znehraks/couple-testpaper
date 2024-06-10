import styled from '@emotion/styled';

// 데스크톱에서만 보이는 사이드 광고 컴포넌트
interface IUpDownAdComponentProps {
  side?: 'top' | 'down';
}
export const UpDownAdComponent = ({ side = 'top' }: IUpDownAdComponentProps) => {
  return <StyledUpDownAdComponentWrapper side={side}>광고</StyledUpDownAdComponentWrapper>;
};

const StyledUpDownAdComponentWrapper = styled.div<{ side: IUpDownAdComponentProps['side'] }>`
  font-size: 80px;
  order: ${(props) => (props.side === 'top' ? 0 : 2)};
  width: 100px;
  min-height: 100px;
`;
