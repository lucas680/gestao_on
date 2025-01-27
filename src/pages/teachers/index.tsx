import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import InputSearch from "@/components/form/inputSearch/inputSearch";
import { useEffect, useState } from "react";
import { AddIcon } from "@/components/icons/icons";
import NoHasData from "@/components/noHasData/noHasData";
import ListMapContent from "@/components/listMap/listMapContent/listMapContent";
import { useRouter } from "next/router";
import FloatButton from "@/components/buttons/floatButton/floatButton";
import { Teacher } from "@/models/teacher";
import { Discipline } from "@/models/discipline";
import TeachersListMap from "@/components/listMap/teachersListMap/teachersListMap";

export default function Teachers() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSearch = () => {
    //
  };

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    // setTeachers([
    //   new Teacher(1, "Carlos Antônio", new Discipline(1, "Matemática"), "Regular"),
    //   new Teacher(2, "Maria Gadú Egral", new Discipline(2, "Artes"), "Integral"),
    // ]);
  }, []);

  const onAddButton = () => {
    router.push("/teachers/add");
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
                  <TeachersListMap key={index} item={e} />
                ))}
              />
            </div>
          </div>
        ) : (
          <NoHasData
            description="Nenhum professor cadastrado no sistema"
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
