import styles from "./circleButton.module.scss";

interface Ibutton {
  icon: React.ReactNode;
  onClick: () => void;
}

export default function CircleButton(props: Ibutton) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.icon}
    </button>
  );
}
