import CustomButtom from "@/components/buttons/customButton/customButtom";
import Input from "@/components/form/input/input";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Select, { IselectItem } from "@/components/form/select/select";
import { Discipline } from "@/models/discipline";

export default function AddEditClasses() {
  const router = useRouter();
  const { id } = router.query;
  const isEdit = id != "add";

  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<IselectItem>();
  const [turn, setTurn] = useState<IselectItem>();
  const [discipline, setDiscipline] = useState<IselectItem>();

  const onSubmit = () => {
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

  useEffect(() => {
    if (!id) {
      router.push("/classes");
    }
  }, [id, router]);
  if (!id) return null;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>{isEdit ? "Editar" : "Cadastro de"} turma</h1>
        <label>
          Nome da turma:<span>*</span>
        </label>
        <Input value={title} onChange={(e) => setTitle(e)} />
        <div className="column">
          <div className="row">
            <label>
              Tipo de turma:<span>*</span>
            </label>
            <Select
              placeholder="--selecione--"
              itens={[
                { id: 1, value: "Regular" },
                { id: 2, value: "Integral" },
              ]}
              valuesSelected={type ? [type] : []}
              onChange={(values) => setType(values[0])}
            />
          </div>
          <div className="divider"></div>
          <div className="row">
            <label>
              Turno:<span>*</span>
            </label>
            <Select
              placeholder="--selecione--"
              itens={[
                { id: 1, value: "Manhã" },
                { id: 2, value: "Tarde" },
              ]}
              valuesSelected={type && type.value == "Integral" ? [type] : turn ? [turn] : []}
              onChange={(values) => setTurn(values[0])}
              disabled={!(type && type.value == "Regular")}
            />
          </div>
        </div>
        <label>
          Disciplinas:<span>*</span>
        </label>
        <Select
          placeholder="--selecione--"
          itens={disciplines.map((i) => {
            return { id: i.id, value: i.title };
          })}
          valuesSelected={discipline ? [discipline] : []}
          onChange={(values) => setDiscipline(values[0])}
        />
        <CustomButtom text={isEdit ? "Atualizar" : "Adicionar"} color="blue" onClick={onSubmit} />
      </div>
    </div>
  );
}
