import { Discipline } from "@/models/discipline";
import styles from "./disciplinesListMap.module.scss";
import { JournalIcon, MoreIcon } from "@/components/icons/icons";
import { useState } from "react";
import CustomDropdown, {
  CustomDropdownItem,
} from "@/components/dropdown/dropdown";
import { alertError, alertSuccess } from "@/pages/utils";

interface Imap {
  item: Discipline;
}

export default function DisciplinesListMap(props: Imap) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <JournalIcon />
        <p>{props.item.title}</p>
      </div>
      <div className={styles.view} onClick={handleDropdown}>
        <MoreIcon />
        <CustomDropdown
          itens={[
            <CustomDropdownItem
              key={0}
              text="Editar"
              onClick={() => {
                alertSuccess(`editandooo ${props.item.title}`);
              }}
            />,
            <CustomDropdownItem
              key={1}
              text="Remover"
              onClick={() => {
                alertError(`removendoooo ${props.item.title}`);
              }}
            />,
          ]}
          open={isDropdownOpen}
          handleOpen={handleDropdown}
        />
      </div>
    </div>
  );
}
