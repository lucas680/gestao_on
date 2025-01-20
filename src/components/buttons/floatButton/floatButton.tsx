import styles from "./flotatButton.module.scss";

interface Ibutton {
  icon: React.ReactNode;
  onClick: () => void;
}

export default function FloatButton(props: Ibutton) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.icon}
    </button>
  );
}
