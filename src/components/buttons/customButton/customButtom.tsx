import styles from "./customButtom.module.scss";

interface Ibutton {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
  color?: "red" | "blue";
}

export default function CustomButtom(props: Ibutton) {
  return (
    <button
      className={`${styles.button} ${
        props.color == "red" && styles.colorRed
      } ${
        props.color == "blue" && styles.colorBlue
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
