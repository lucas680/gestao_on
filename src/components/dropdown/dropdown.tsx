import styles from "./dropdown.module.scss";

interface Idropdown {
  open: boolean;
  handleOpen: () => void;
  itens: React.ReactNode[];
}

export default function CustomDropdown(props: Idropdown) {
  return (
    <div
      className={`${styles.container} ${props.open && styles.open}`}
      onClick={props.handleOpen}
    >
      {props.itens}
    </div>
  );
}

interface IdropdownItem {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export function CustomDropdownItem(props: IdropdownItem): React.ReactNode {
  return (
    <div className={styles.containerItem} onClick={props.onClick}>
      {props.icon}
      <p>{props.text}</p>
    </div>
  );
}
