import { useRouter } from "next/router";
export default function AddTeachers() {
  const router = useRouter();
  const { id } = router.query;

  return <div>editar professor {id}</div>;
}
