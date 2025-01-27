import styles from "./teachersListMap.module.scss";
import { MoreIcon, PeopleGroupIcon } from "@/components/icons/icons";
import { useState } from "react";
import CustomDropdown, {
  CustomDropdownItem,
} from "@/components/dropdown/dropdown";
import { alertError, alertSuccess } from "@/pages/utils";
import { Teacher } from "@/models/teacher";

interface Imap {
  item: Teacher;
}

export default function TeachersListMap(props: Imap) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PeopleGroupIcon />
        <p>{props.item.name}</p>
      </div>
      <p>{props.item.discipline.title}</p>
      <p>{props.item.turn}</p>
      <div className={styles.view} onClick={handleDropdown}>
        <MoreIcon />
        <CustomDropdown
          itens={[
            <CustomDropdownItem
              key={0}
              text="Editar"
              onClick={() => {
                alertSuccess(`editandooo ${props.item.name}`);
              }}
            />,
            <CustomDropdownItem
              key={1}
              text="Remover"
              onClick={() => {
                alertError(`removendoooo ${props.item.name}`);
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
