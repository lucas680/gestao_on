import CustomButtom from "@/components/buttons/customButton/customButtom";
import Input from "@/components/form/input/input";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddEditDisciplines() {
  const router = useRouter();
  const { id } = router.query;
  const isEdit = id != "add";

  const [title, setTitle] = useState("");
  const [acronym, setAcronym] = useState("");
  const [workload, setWorkload] = useState<number>();
  const [isWorkloadValid, setIsWorkloadValid] = useState(true);

  const onSubmit = () => {
    //
  };

  useEffect(() => {
    if (!id) {
      router.push("/disciplines");
    }
  }, [id, router]);
  if (!id) return null;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>{isEdit ? "Editar" : "Cadastro de"} disciplina</h1>
        <label>
          Nome completo da disciplina:<span>*</span>
        </label>
        <Input value={title} onChange={(e) => setTitle(e)} />
        <div className="column">
          <div className="row">
            <label>
              Sigla da disciplina:<span>*</span>
            </label>
            <Input
              value={acronym}
              onChange={(e) => setAcronym(e)}
              max={4}
            />
          </div>
          <div className="divider"></div>
          <div className="row">
            <label>
              Carga horária semanal:<span>*</span>
            </label>
            <Input
              type="number"
              value={workload}
              isValid={isWorkloadValid}
              onChange={(e) => {
                if(e.length <= 2 && (e as unknown as number) <= 50){
                  setWorkload(e as unknown as number);
                  setIsWorkloadValid(true);
                }else{
                  setIsWorkloadValid(false);
                }
              }}
              invalidMessage="O valor máximo é 50 horas"
              max={50}
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
