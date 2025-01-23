import { PasteIcon, WarningIcon } from "../icons/icons";
import styles from "./noHasData.module.scss";

interface Ibutton {
  color: "blue" | "red" | "lightBlue";
  text: string;
  onClick: () => void;
}

interface InoHasData {
  description: string;
  iconAlert?: boolean;
  button?: Ibutton;
}

export default function NoHasData(props: InoHasData) {
  return (
    <div className={styles.container}>
      <div className={styles.circleIcon}>
        {props.iconAlert ? <WarningIcon /> : <PasteIcon />}
      </div>
      <p>{props.description}</p>
    </div>
  );
}
