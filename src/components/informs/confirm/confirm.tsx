import { CloseIcon } from "@/components/icons/icons";
import styles from "./confirm.module.scss";

interface Iconfirm {
  text: string;
  buttonText: string;
  buttonColor: "red" | "blue";
  onClose: () => void;
  action: () => void;
}

export default function Confirm(props: Iconfirm) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.confirmHeader}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <div className={styles.confirmBody}>
          <p>{props.text}</p>
          <div className={styles.containerButton}>
            <button onClick={props.onClose}>Calcelar</button>
            <button
              className={`${styles.actionButton} ${
                props.buttonColor == "red" ? styles.colorRed : styles.colorBlue
              }`}
              onClick={props.action}
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
