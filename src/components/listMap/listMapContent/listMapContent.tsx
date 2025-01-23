import styles from "./listMapContent.module.scss";

interface IlistMap {
  list: React.ReactNode[];
}

export default function ListMapContent(props: IlistMap) {
  return <div className={styles.container}>{props.list}</div>;
}
