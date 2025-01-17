import { CheckIcon, CloseIcon, ErrorIcon } from "@/components/icons/icons";
import styles from "./alert.module.scss";

interface Ialert {
  text: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Alert(props: Ialert) {
  return (
    <div
      className={`${styles.container} ${
        props.type == "success" ? styles.success : styles.error
      }`}
    >
      <div className={styles.alertText}>
        {props.type == "success" ? <CheckIcon /> : <ErrorIcon />}
        <p>{props.text}</p>
      </div>
      <CloseIcon onClick={props.onClose} />
    </div>
  );
}
