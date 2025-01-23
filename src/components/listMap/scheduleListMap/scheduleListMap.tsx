import { Schedule } from "@/models/schedule";
import styles from "./scheduleListMap.module.scss";
import { EyeIcon, JournalIcon } from "@/components/icons/icons";

interface Imap {
  item: Schedule;
  onClick: ()=> void;
}

export default function ScheduleListMap(props: Imap) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <JournalIcon />
        <p>{props.item.title}</p>
      </div>
      <p>{props.item.getFormattedCreatedDate}</p>
      <div className={styles.view} onClick={props.onClick}><EyeIcon /></div>
    </div>
  );
}
