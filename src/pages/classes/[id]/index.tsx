import { useRouter } from "next/router";

export default function AddClasses() {
  const router = useRouter();
  const { id } = router.query;

  return <div>editar turma {id}</div>;
}
