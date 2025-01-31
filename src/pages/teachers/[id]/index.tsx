import CustomButtom from "@/components/buttons/customButton/customButtom";
import Input from "@/components/form/input/input";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Select, { IselectItem } from "@/components/form/select/select";
import { Discipline } from "@/models/discipline";
import SelectTimeWeek from "@/components/form/selectTimeWeek/selectTimeWeek";

export default function AddEditTeacher() {
  const router = useRouter();
  const { id } = router.query;
  const isEdit = id != "add";

  const [name, setName] = useState<string>("");
  const [hours, setHours] = useState<IselectItem[]>([]);
  const [turn, setTurn] = useState<IselectItem>();
  const [discipline, setDiscipline] = useState<IselectItem[]>([]);

  const onSubmit = () => {
    //
  };

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    getDisciplines();
  }, []);

  const getDisciplines = () => {
    setDisciplines([
      new Discipline(1, "Matemática", "mat"),
      new Discipline(2, "Português", "Port"),
      new Discipline(3, "Gerografia", "GEO"),
      new Discipline(4, "Artes", "art"),
    ]);
  };

  useEffect(() => {
    if (!id) {
      router.push("/teachers");
    }
  }, [id, router]);
  if (!id) return null;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>{isEdit ? "Editar" : "Cadastro de"} professor</h1>
        <label>
          Nome:<span>*</span>
        </label>
        <Input value={name} onChange={(e) => setName(e)} />
        <label>
          Disciplinas:<span>*</span>
        </label>
        <Select
          placeholder="--selecione as disciplinas--"
          isMultiple
          twoColumns
          itens={disciplines.map((i) => {
            return { id: i.id, value: i.title };
          })}
          valuesSelected={discipline}
          onChange={(values) => setDiscipline(values)}
        />
        <div className="column">
        <div className="row">
            <label>
              Turno:<span>*</span>
            </label>
            <Select
              placeholder="--selecione--"
              itens={[
                { id: 1, value: "Manhã" },
                { id: 2, value: "Tarde" },
                { id: 3, value: "Integral" },
              ]}
              valuesSelected={turn ? [turn] : []}
              onChange={(values) => setTurn(values[0])}
            />
          </div>
          <div className="divider"></div>
          <div className="row">
            <label>
              Horário disponível:<span>*</span>
            </label>
            <SelectTimeWeek
              placeholder="--selecione--"
              valuesSelected={hours}
              onChange={(values) => setHours(values)}
            />
          </div>
        </div>
        <CustomButtom
          text={isEdit ? "Atualizar" : "Adicionar"}
          color="blue"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}
