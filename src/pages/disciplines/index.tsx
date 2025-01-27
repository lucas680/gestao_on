import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import { AddIcon } from "@/components/icons/icons";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import FloatButton from "@/components/buttons/floatButton/floatButton";
import { Discipline } from "@/models/discipline";
import DisciplinesListMap from "@/components/listMap/disciplinesListMap/disciplinesListMap";
import { alertError, alertSuccess } from "../utils";

export default function Disciplines() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    getDisciplines();
  }, []);

  const getDisciplines = () => {
    setDisciplines([
      new Discipline(1, "Matemática"),
      new Discipline(2, "Português"),
      new Discipline(3, "Gerografia"),
      new Discipline(4, "Artes"),
    ]);
  };

  const onRemove = (id: number) => {
    setDisciplines(disciplines.filter(e => e.id != id));
    alertSuccess(`Disciplina removida com sucesso! id: ${id}`);
  };

  const onEdit = (id: number) => {
    alertError(`editandooo ${id}`);
  };

  const onAddButton = () => {
    router.push("/disciplines/add");
  };

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        {disciplines.length > 0 ? (
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
                list={disciplines.map((e, index) => (
                  <DisciplinesListMap
                    key={index}
                    item={e}
                    onRemove={(id) => onRemove(id)}
                    onEdit={(id) => onEdit(id)}
                  />
                ))}
              />
            </div>
          </div>
        ) : (
          <NoHasData
            description="Nenhuma disciplina cadastrada no sistema."
            button={{
              text: "Adicionar",
              color: "blue",
              beforeIcon: <AddIcon />,
              onClick: onAddButton,
            }}
          />
        )}
      </section>
    </div>
  );
}
