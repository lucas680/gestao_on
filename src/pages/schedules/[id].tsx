import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function SchedulesIndex() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
      okok index {id}
      </section>
    </div>
  );
}
