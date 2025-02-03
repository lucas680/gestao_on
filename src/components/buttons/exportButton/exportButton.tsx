import { ExportIcon } from "@/components/icons/icons";
import { closeLoading, openLoading } from "@/utils/utils";
import html2canvas from "html2canvas";
import { PageSizes, PDFDocument } from "pdf-lib";
import { RefObject, useState } from "react";
import styles from "./exportButton.module.scss";
import Confirm from "@/components/informs/confirm/confirm";
import { useRouter } from "next/router";

interface Iexport {
  beforeExport?: () => void;
  afterExport?: () => void;
  ref: RefObject<null>;
}

export default function ExportButton(props: Iexport) {
  const router = useRouter();
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

      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Abre o PDF em uma nova aba
      window.open(pdfUrl, "_blank");

      window.dispatchEvent(new Event("resize"));

      if (props.afterExport) props.afterExport();

      closeLoading();
    }, 3000);
  };

  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Confirm
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        text="Você não cadastrou informações importantes!"
        fineText="(nome do coordenador(a), logo e nome da escola)"
        buttonColor="blue"
        cancelButtonText="Cadastrar"
        onCancelButtonAction={() => router.push("/coordinator")}
        buttonText="Continuar"
        action={()=>{
          onExport();
          setConfirmOpen(false);
        }}
      />
      <button className={styles.button} onClick={()=> setConfirmOpen(true)}>
        <ExportIcon /> Exportar
      </button>
    </div>
  );
}
