import HeadComponent from "@/components/head/head";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import ExportButton from "@/components/buttons/exportButton/exportButton";
import { useEffect, useRef, useState } from "react";
import { Schedule } from "@/models/schedule";
import { ScheduleService } from "@/service/schedules";
import ScheduleTable from "@/components/scheduleTable/scheduleTable";

export default function SchedulesIndex() {
  const exportRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;

  const [schedule, setSchedule] = useState<Schedule>();

  useEffect(() => {
    getScheduleById();
  }, []);

  const getScheduleById = async () => {
    if (!id || Array.isArray(id) || isNaN(Number(id))) {
      router.push("/schedules");
      return;
    }
    const res = await ScheduleService.getScheculeById(Number(id));
    setSchedule(res);
  };

  // useEffect(() => {
  //   if (!id) {
  //     router.push("/schedules");
  //   }
  // }, [id, router]);
  // if (!id) return null;

  return (
    <div>
      <HeadComponent />
      <section className={styles.container}>
        <ExportButton ref={exportRef} />
        <div ref={exportRef}>
          {schedule && (
            <div className={styles.schedule}>
              <h1>{schedule.classeName}</h1>
              <ScheduleTable schedule={schedule} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
