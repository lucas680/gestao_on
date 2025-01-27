import { useRouter } from "next/router";

export default function AddDisciplines() {
  const router = useRouter();
  const { id } = router.query;

  return <div>editar disciplina {id}</div>;
}
