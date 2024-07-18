import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  const element = document.getElementById('pdf-content');
  if (!element) return;

  const testTime = document.getElementById('test-time');
  const testOdd = document.getElementById('test-odd');
  const testHeader = document.getElementById('test-header');
  const testSubmitBtn = document.getElementById('question-list-submit');
  if (!testTime || !testOdd || !testHeader || !testSubmitBtn) return;
  const originalPaddingBottom = testTime.style.paddingBottom;
  testTime.style.paddingBottom = '16px';
  testOdd.style.paddingBottom = '16px';
  testHeader.style.minHeight = '140px';

  // 원래 border 스타일을 저장하고 제거하는 함수
  const originalBorder = element.style.border;
  element.style.border = 'none';
  testSubmitBtn.style.display = 'none';

  // 전체 페이지를 캡처하도록 html2canvas 옵션 설정
  const canvas = await html2canvas(element, {
    useCORS: true, // cross-origin images 지원
    scale: 2, // 캔버스의 해상도를 높이기 위해 스케일을 조정
    scrollX: 0,
    scrollY: 0,
    width: element.scrollWidth,
    height: element.scrollHeight,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  // 캡처 후 원래 border 스타일 복원
  element.style.border = originalBorder;
  testTime.style.paddingBottom = originalPaddingBottom;
  testOdd.style.paddingBottom = originalPaddingBottom;
  testHeader.style.minHeight = '120px';
  testSubmitBtn.style.display = 'block';

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgProperties = pdf.getImageProperties(imgData);
  const imgWidth = imgProperties.width;
  const imgHeight = imgProperties.height;

  // 비율을 유지하면서 PDF 페이지에 맞추기 위한 계산
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  const imgNewWidth = imgWidth * ratio;
  const imgNewHeight = imgHeight * ratio;

  const imgX = (pdfWidth - imgNewWidth) / 2; // 중앙 정렬을 위한 X 위치
  const imgY = (pdfHeight - imgNewHeight) / 2; // 중앙 정렬을 위한 Y 위치

  pdf.addImage(imgData, 'PNG', imgX, imgY, imgNewWidth, imgNewHeight);
  pdf.save('test.pdf');
};
