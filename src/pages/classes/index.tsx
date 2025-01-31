import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import { AddIcon, ArrowRightIcon } from "@/components/icons/icons";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import FloatButton from "@/components/buttons/floatButton/floatButton";
import { Classe } from "@/models/classe";
import ClassesListMap from "@/components/listMap/classesListMap/classesListMap";
import { alertSuccess } from "../../utils/utils";
import { Discipline } from "@/models/discipline";

export default function Classes() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [classes, setClasses] = useState<Classe[]>([]);

  useEffect(() => {
    getDisciplines();
    getClasses();
  }, []);

  const getClasses = () => {
    setClasses([
      new Classe(1, "8 Ano A", "Regular"),
      new Classe(2, "8 Ano B", "Integral"),
      new Classe(3, "7 Ano A", "Regular"),
      new Classe(4, "7 Ano B", "Regular"),
    ]);
  };

  const getDisciplines = () => {
    setDisciplines([new Discipline(1, "Matemática", "mat")]);
  };

  const onRemove = (id: number) => {
    setClasses(classes.filter((e) => e.id != id));
    alertSuccess(`Turma removida com sucesso! id: ${id}`);
  };

  const onEdit = (id: number) => {
    router.push(`/classes/${id}`);
  };

  const onAddButton = () => {
    router.push("/classes/add");
  };

  const onAddButtonDisciplines = () => {
    router.push("/disciplines/add");
  };

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        {classes.length > 0 ? (
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
                list={classes.map((e, index) => (
                  <ClassesListMap
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
            description="Nenhuma turma cadastrada no sistema"
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
