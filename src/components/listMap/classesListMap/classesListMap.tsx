import styles from "./classesListMap.module.scss";
import { MoreIcon, PeopleGroupIcon } from "@/components/icons/icons";
import { useState } from "react";
import CustomDropdown, {
  CustomDropdownItem,
} from "@/components/dropdown/dropdown";
import { alertError, alertSuccess } from "@/pages/utils";
import { Classe } from "@/models/classe";

interface Imap {
  item: Classe;
}

export default function ClassesListMap(props: Imap) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PeopleGroupIcon />
        <p>{props.item.title}</p>
      </div>
      <p>{props.item.type}</p>
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
