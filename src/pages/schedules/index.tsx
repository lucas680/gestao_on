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
import { alertSuccess, closeLoading, openLoading } from "@/utils/utils";
import { Classe } from "@/models/classe";
import { Teacher } from "@/models/teacher";
import { Discipline } from "@/models/discipline";

export default function Schedules() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const generateReport = () => {
    openLoading();
    setTimeout(() => {
      closeLoading();
      alertSuccess("Horários criados com sucesso!");
    }, 6000);
  };

  const [classes, setClasses] = useState<Classe[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    getClasses();
    getTeachers();
    setSchedules([
      new Schedule(
        1,
        "testeee",
        new Date(),
        "8° Ano A",
        "Ricardo",
        new Discipline(1, "Matemática")
      ),
      new Schedule(
        2,
        "testeeee2",
        new Date(),
        "8° Ano A",
        "Ricardo",
        new Discipline(1, "Matemática")
      ),
    ]);
  }, []);

  const getClasses = () => {
    setClasses([
      new Classe(1, "8 Ano A", "Regular"),
      new Classe(2, "8 Ano B", "Integral"),
      new Classe(3, "7 Ano A", "Regular"),
      new Classe(4, "7 Ano B", "Regular"),
    ]);
  };

  const getTeachers = () => {
    setTeachers([
      new Teacher(
        1,
        "Carlos Antônio",
        [new Discipline(1, "Matemática")],
        "Regular"
      ),
      new Teacher(
        2,
        "Maria Gadú Egral",
        [new Discipline(2, "Artes"), new Discipline(3, "Inglês")],
        "Integral"
      ),
    ]);
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
          <CustomButtom
            disabled={classes.length == 0 || teachers.length == 0}
            text="Gerar horários"
            color="blue"
            onClick={generateReport}
          />
          <IconButton
            color="darkBlue"
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
        ) : classes.length == 0 || teachers.length == 0 ? (
          <NoHasData description="Adicione todos os dados primeiro (turmas, disciplinas e professores)." />
        ) : (
          <NoHasData description="Clique em gerar horários para criar seus primeiros cronogramas." />
        )}
      </section>
    </div>
  );
}
