import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useState } from "react";

export default function Schedules() {
  const [search, setSearch] = useState("test");
  const onSearch = () => {
    //
  };

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        <InputSearch
          value={search}
          onChange={(e) => setSearch(e)}
          onSearch={onSearch}
        />
      </section>
    </div>
  );
}
