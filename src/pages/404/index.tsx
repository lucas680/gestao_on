import GhostIconCustom from "@/components/gHostIcon/gHostIcon";
import styles from "./styles.module.scss";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <h1>404 - Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
      </div>
      <GhostIconCustom />
    </div>
  );
}
