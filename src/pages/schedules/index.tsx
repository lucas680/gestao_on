import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";

export default function Schedules() {

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>Horários</section>
    </div>
  );
}
