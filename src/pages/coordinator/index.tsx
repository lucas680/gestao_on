import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import NoHasData from "@/components/noHasData/noHasData";

export default function Coordinator() {
  
  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
      <NoHasData
            description="Página em construção"
            iconAlert
          />
      </section>
    </div>
  );
}
