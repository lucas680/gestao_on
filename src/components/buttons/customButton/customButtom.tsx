import styles from "./customButtom.module.scss";

export interface Ibutton {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
  color?: "red" | "blue" | "lightBlue";
}

export default function CustomButtom(props: Ibutton) {
  return (
    <button
      className={`${styles.button} ${props.color == "red" && styles.colorRed} ${
        props.color == "blue" && styles.colorBlue
      } ${props.color == "lightBlue" && styles.lightBlue}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
