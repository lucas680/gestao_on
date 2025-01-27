import CustomButtom, { Ibutton } from "../buttons/customButton/customButtom";
import { PasteIcon, WarningIcon } from "../icons/icons";
import styles from "./noHasData.module.scss";

interface InoHasData {
  description: string;
  iconAlert?: boolean;
  button?: Ibutton;
}

export default function NoHasData(props: InoHasData) {
  return (
    <div className={styles.container}>
      {props.iconAlert ? (
        <div className={styles.warningIcon}><WarningIcon /></div>
      ) : (
        <div className={styles.circleIcon}>
          <PasteIcon />
        </div>
      )}
      <p>{props.description}</p>
      {props.button && (
        <CustomButtom
          text={props.button.text}
          onClick={props.button.onClick}
          color={props.button.color}
          beforeIcon={props.button.beforeIcon}
          afterIcon={props.button.afterIcon}
        />
      )}
    </div>
  );
}
