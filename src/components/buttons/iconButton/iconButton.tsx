import styles from "./iconButton.module.scss";

interface Ibutton {
  icon: React.ReactNode;
  onClick: () => void;
  isCircle?: boolean;
  color?: "red" | "blue";
}

export default function IconButton(props: Ibutton) {
  return (
    <button
      className={`${styles.button} ${props.isCircle && styles.isCircle} ${
        props.color == "red" && styles.colorRed
      } ${props.color == "blue" && styles.colorBlue}`}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}
