import { Schedule } from "@/models/schedule";
import styles from "./schedulesListMap.module.scss";
import { JournalIcon } from "@/components/icons/icons";

interface Imap {
  item: Schedule;
  onClick: ()=> void;
}

export default function SchedulesListMap(props: Imap) {
  return (
    <div onClick={props.onClick} className={styles.container}>
      <div className={styles.title}>
        <JournalIcon />
        <p>{props.item.title}</p>
      </div>
      <p className={styles.date}>{props.item.getFormattedCreatedDate}</p>
    </div>
  );
}
