import { CloseIcon } from "@/components/icons/icons";
import styles from "./confirm.module.scss";

interface Iconfirm {
  open: boolean;
  onClose: () => void;
  text: string;
  fineText?: string;
  cancelButtonText?: string;
  onCancelButtonAction?: () => void;
  buttonText: string;
  buttonColor: "red" | "blue";
  action: () => void;
}

export default function Confirm(props: Iconfirm) {
  return (
    <div className={`${styles.background} ${props.open && styles.confirmOpen}`}>
      <div className={styles.container}>
        <div className={styles.confirmHeader}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <div className={styles.confirmBody}>
          <p>
            {props.text}{" "}
            {props.fineText && (
              <span className={styles.fineText}>{props.fineText}</span>
            )}
          </p>
          <div className={styles.containerButton}>
            <button onClick={props.onCancelButtonAction ?? props.onClose}>
              {props.cancelButtonText ?? "Cancelar"}
            </button>
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
