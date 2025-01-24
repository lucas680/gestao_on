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

export default function Disciplines() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    setDisciplines([
      new Discipline(1, "Matemática"),
      new Discipline(2, "Português"),
    ]);
  }, []);

  const onAddButton = () => {
    router.push("/disciplines/add");
  };

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        <FloatButton onClick={onAddButton} icon={<AddIcon />} />
        <div className={styles.schedulesHeader}>
          <InputSearch
            value={search}
            onChange={(e) => setSearch(e)}
            onSearch={onSearch}
          />
        </div>
        {disciplines.length > 0 ? (
          <ListMapContent
            list={disciplines.map((e, index) => (
              <DisciplinesListMap
                key={index}
                item={e}
              />
            ))}
          />
        ) : (
          <NoHasData
            description="Nenhuma disciplina cadastrada no sistema."
            button={{
              text: "Adicionar",
              color: "blue",
              icon: <AddIcon />,
              onClick: onAddButton,
            }}
          />
        )}
      </section>
    </div>
  );
}
