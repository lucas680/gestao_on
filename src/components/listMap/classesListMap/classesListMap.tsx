import styles from "./classesListMap.module.scss";
import { MoreIcon, PeopleGroupIcon } from "@/components/icons/icons";
import { useEffect, useRef, useState } from "react";
import CustomDropdown, {
  CustomDropdownItem,
} from "@/components/dropdown/dropdown";
import { Classe } from "@/models/classe";

interface Imap {
  item: Classe;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
}

export default function ClassesListMap(props: Imap) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PeopleGroupIcon />
        <p>{props.item.title}</p>
      </div>
      <p>{props.item.type}</p>
      <div className={styles.view} onClick={handleDropdown} ref={dropdownRef}>
        <MoreIcon />
        <CustomDropdown
          itens={[
            <CustomDropdownItem
              key={0}
              text="Editar"
              onClick={() => props.onEdit(props.item.id)}
            />,
            <CustomDropdownItem
              key={1}
              text="Remover"
              onClick={() => props.onRemove(props.item.id)}
            />,
          ]}
          open={isDropdownOpen}
          handleOpen={handleDropdown}
        />
      </div>
    </div>
  );
}
