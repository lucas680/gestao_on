import { closeLoading, openLoading } from "@/utils/utils";
import html2canvas from "html2canvas";
import { PageSizes, PDFDocument } from "pdf-lib";
import { RefObject } from "react";

interface Iexport {
  text: string;
  beforeExport?: () => void;
  afterExport?: () => void;
  ref: RefObject<null>;
}

export default function ExportButton(props: Iexport) {
  const onExport = () => {
    openLoading();
    if (props.beforeExport) props.beforeExport();

    window.dispatchEvent(new Event("resize"));

    setTimeout(async () => {
      const element = props.ref.current as unknown as HTMLElement;
      const canvas = await html2canvas(element, {
        allowTaint: true,
        useCORS: true,
        scale: 2,
      });
      const imgData = canvas.toDataURL();

      const pdfDoc = await PDFDocument.create();
      const pageWidth = PageSizes.A4[0];
      const pageHeight = PageSizes.A4[1];

      const pngImage = await pdfDoc.embedPng(imgData);
      const { width, height } = pngImage.scale(1);

      const scaleFactor = (pageWidth - 20) / width;
      const resizedWidth = pageWidth - 20;
      const resizedHeight = height * scaleFactor;
      const adjustedY = pageHeight - resizedHeight;
      const page = pdfDoc.addPage([
        pageWidth,
        resizedHeight + 20 > pageHeight ? resizedHeight + 20 : pageHeight,
      ]);

      page.drawImage(pngImage, {
        x: 10,
        y: resizedHeight + 20 > pageHeight ? 10 : adjustedY - 10,
        width: resizedWidth,
        height: resizedHeight,
      });

      const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });
      const link = document.createElement("a");
      link.href = pdfBytes;
      link.download = "testeeee_Dashboard.pdf";
      link.click();

      window.dispatchEvent(new Event("resize"));

      if (props.afterExport) props.afterExport();

      closeLoading();
    }, 3000);
  };

  return <button onClick={onExport}>{props.text}</button>;
}
