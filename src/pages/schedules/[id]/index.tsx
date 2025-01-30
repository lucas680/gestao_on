import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import ExportButton from "@/components/buttons/exportButton/exportButton";
import { useRef } from "react";

export default function SchedulesIndex() {
  const exportRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        <ExportButton ref={exportRef} text="exportaarrr" />
        <div ref={exportRef}>
          <h4>okok index {id}</h4>
          <br />
          <p>minha paginaaaa</p>
        </div>
      </section>
    </div>
  );
}
