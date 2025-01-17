import { CloseIcon, WarningIcon } from "@/components/icons/icons";
import styles from "./warning.module.scss";

interface Iwarning {
  text: string;
  onClose: () => void;
}

export default function Warning(props: Iwarning) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.warningHeader}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <div className={styles.warningBody}>
          <WarningIcon />
          <p>{props.text}</p>
          <button onClick={props.onClose}>Ok</button>
        </div>
      </div>
    </div>
  );
}
