import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import { AddIcon } from "@/components/icons/icons";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import FloatButton from "@/components/buttons/floatButton/floatButton";
import { Classe } from "@/models/classe";
import ClassesListMap from "@/components/listMap/classesListMap/classesListMap";

export default function Classes() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [classes, setClasses] = useState<Classe[]>([]);

  useEffect(() => {
    setClasses([
      new Classe(1, "8 Ano A", "Regular"),
      new Classe(2, "8 Ano B", "Integral"),
    ]);
  }, []);

  const onAddButton = () => {
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
                  <ClassesListMap key={index} item={e} />
                ))}
              />
            </div>
          </div>
        ) : (
          <NoHasData
            description="Nenhuma turma cadastrada no sistema"
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
