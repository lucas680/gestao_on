import styles from "./iconButton.module.scss";

interface Ibutton {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
  color: "red" | "blue";
}

export default function IconButton(props: Ibutton) {
  return (
    <button
      className={`${styles.button} ${
        props.color == "red" ? styles.colorRed : styles.colorBlue
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
