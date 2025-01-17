import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./inputSearch.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

interface IinputSearch {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function InputSearch(props: IinputSearch) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => props.onSearch()}
      />
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.onSearch();
          }
        }}
      />
      {props.value != "" && (
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => props.onChange("")}
        />
      )}
    </div>
  );
}
