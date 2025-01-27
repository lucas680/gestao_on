import { ReactNode } from "react";
import Image from "next/image";
import styles from "./sideBar.module.scss";
import { useRouter } from "next/router";
import {
  BookIcon,
  HourIcon,
  PeopleGroupIcon,
  TeacherIcon,
} from "../icons/icons";

interface IsideBar {
  page: ReactNode;
}

export default function SideBar(props: IsideBar) {
  const router = useRouter();

  const onClickPage = (page: string) => {
    router.push(page);
  };

  const paths: string[] = [
    "/schedules",
    "/schedules/[id]",
    "/disciplines",
    "/disciplines/[id]",
    "/teachers",
    "/teachers/[id]",
    "/classes",
    "/classes/[id]"
  ];
  if (!paths.includes(router.pathname)) {
    return <div>{props.page}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <Image
          src="/logo.svg"
          alt="Logotipo do sistema"
          width={94}
          height={28}
          className={styles.logo}
        />
        <div className={styles.sideBar}>
          <button
            arial-label="Tela de horários"
            className={`${styles.pageButton} ${
              router.pathname.includes("/schedules") && styles.pageSelected
            }`}
            onClick={() => onClickPage("/schedules")}
          >
            <HourIcon />
            Horários
          </button>
          <button
            arial-label="Tela de disciplinas"
            className={`${styles.pageButton} ${
              router.pathname.includes("/disciplines") && styles.pageSelected
            }`}
            onClick={() => onClickPage("/disciplines")}
          >
            <BookIcon />
            Disciplinas
          </button>
          <button
            arial-label="Tela de professores"
            className={`${styles.pageButton} ${
              router.pathname.includes("/teachers") && styles.pageSelected
            }`}
            onClick={() => onClickPage("/teachers")}
          >
            <TeacherIcon />
            Professores
          </button>
          <button
            arial-label="Tela de turmas"
            className={`${styles.pageButton} ${
              router.pathname.includes("/classes") && styles.pageSelected
            }`}
            onClick={() => onClickPage("/classes")}
          >
            <PeopleGroupIcon />
            Turmas
          </button>
        </div>
      </div>
      <div className={styles.pages}>{props.page}</div>
    </div>
  );
}
