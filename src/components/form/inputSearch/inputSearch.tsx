import { CancelIcon, SearchIcon } from "@/components/icons/icons";
import styles from "./inputSearch.module.scss";

interface IinputSearch {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function InputSearch(props: IinputSearch) {
  return (
    <div className={styles.container}>
      <SearchIcon onClick={() => props.onSearch()} />
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
        <CancelIcon onClick={() => props.onChange("")} />
      )}
    </div>
  );
}
