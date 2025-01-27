import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import CustomButtom from "@/components/buttons/customButton/customButtom";
import IconButton from "@/components/buttons/iconButton/iconButton";
import { PeopleIcon } from "@/components/icons/icons";
import { Schedule } from "@/models/schedule";
import SchedulesListMap from "@/components/listMap/schedulesListMap/schedulesListMap";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import { alertError, alertSuccess } from "../../utils/utils";

export default function Schedules() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    setSchedules([
      new Schedule(1, "teste", new Date()),
      new Schedule(2, "testeeee 2", new Date()),
    ]);
  }, []);

  useEffect(()=>{
    alertError('okok')
    alertSuccess('okok success');
  }, []);

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
          <IconButton
            color="blue"
            isCircle
            icon={<PeopleIcon />}
            onClick={() => {}}
          />
        </div>
        {schedules.length > 0 ? (
          <ListMapContent
            list={schedules.map((e, index) => (
              <SchedulesListMap
                key={index}
                item={e}
                onClick={() => router.push(`/schedules/${e.id}`)}
              />
            ))}
          />
        ) : (
          <NoHasData description="Adicione todos os dados primeiro (turmas, disciplinas e professores)." />
        )}
      </section>
    </div>
  );
}
