import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useState } from "react";
import CustomButtom from "@/components/buttons/customButton/customButtom";
import IconButton from "@/components/buttons/iconButton/iconButton";
import { PeopleIcon } from "@/components/icons/icons";

export default function Schedules() {
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        <div className={styles.schedulesHeader}>
          <InputSearch
            value={search}
            onChange={(e) => setSearch(e)}
            onSearch={onSearch}
          />
          <CustomButtom text="Gerar horários" color="blue" onClick={() => {}} />
          <IconButton color="blue" isCircle icon={<PeopleIcon />} onClick={() => {}} />
        </div>
      </section>
    </div>
  );
}
