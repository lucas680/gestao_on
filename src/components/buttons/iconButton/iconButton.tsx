import styles from "./iconButton.module.scss";

interface Ibutton {
  icon: React.ReactNode;
  onClick: () => void;
  isCircle?: boolean;
  color?: "red" | "blue" | "darkBlue";
}

export default function IconButton(props: Ibutton) {
  return (
    <button
      className={`${styles.button} ${props.isCircle && styles.isCircle} ${
        props.color == "red" && styles.colorRed
      } ${props.color == "blue" && styles.colorBlue} ${
        props.color == "darkBlue" && styles.colorDarkBlue
      }`}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}
