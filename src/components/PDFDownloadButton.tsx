import styled from '@emotion/styled';
import { generatePDF } from '@/services/generatePdf';
import { IsDownloadBtnVisibleAtom, IsGeneratingPDFAtom } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';

export const PDFDownloadButton = () => {
  const setIsGeneratingPDF = useSetAtom(IsGeneratingPDFAtom);
  const isDownloadBtnVisible = useAtomValue(IsDownloadBtnVisibleAtom);

  return (
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
  );
};

const StyledPdfButton = styled.button<{ visible: boolean }>`
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
