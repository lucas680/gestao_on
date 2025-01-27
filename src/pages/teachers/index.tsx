import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import { AddIcon, ArrowRightIcon } from "@/components/icons/icons";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import FloatButton from "@/components/buttons/floatButton/floatButton";
import { Teacher } from "@/models/teacher";
import { Discipline } from "@/models/discipline";
import TeachersListMap from "@/components/listMap/teachersListMap/teachersListMap";
import { alertError, alertSuccess } from "../../utils/utils";

export default function Teachers() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    getDisciplines();
    getTeachers();
  }, []);

  const getTeachers = () => {
    setTeachers([
      new Teacher(
        1,
        "Carlos Antônio",
        new Discipline(1, "Matemática"),
        "Regular"
      ),
      new Teacher(
        2,
        "Maria Gadú Egral",
        new Discipline(2, "Artes"),
        "Integral"
      ),
    ]);
  };

  const getDisciplines = () => {
    setDisciplines([
      new Discipline(1, "Matemática"),
    ]);
  };

  const onRemove = (id: number) => {
    setTeachers(teachers.filter((e) => e.id != id));
    alertSuccess(`Professor removido com sucesso! id: ${id}`);
  };

  const onEdit = (id: number) => {
    alertError(`editandooo ${id}`);
  };

  const onAddButton = () => {
    router.push("/teachers/add");
  };

  const onAddButtonDisciplines = () => {
    router.push("/disciplines/add");
  }; 

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        {teachers.length > 0 ? (
          <div>
            <FloatButton onClick={onAddButton} icon={<AddIcon />} />
            <div className={styles.schedulesHeader}>
              <InputSearch
                value={search}
                onChange={(e) => setSearch(e)}
                onSearch={onSearch}
              />
            </div>
            <div>
              <ListMapContent
                list={teachers.map((e, index) => (
                  <TeachersListMap
                    key={index}
                    item={e}
                    onRemove={(id) => onRemove(id)}
                    onEdit={(id) => onEdit(id)}
                  />
                ))}
              />
            </div>
          </div>
        ) : disciplines.length > 0 ? (
          <NoHasData
            description="Nenhum professor cadastrado no sistema"
            button={{
              text: "Adicionar",
              color: "blue",
              beforeIcon: <AddIcon />,
              onClick: onAddButton,
            }}
          />
        ) : (
          <NoHasData
            description="Não há disciplinas cadastradas no sistema. Cadastre ao menos uma disciplina para prosseguir."
            iconAlert
            button={{
              text: "Cadastrar disciplinas",
              color: "lightBlue",
              afterIcon: <ArrowRightIcon />,
              onClick: onAddButtonDisciplines,
            }}
          />
        )}
      </section>
    </div>
  );
}
