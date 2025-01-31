import { Discipline } from "./discipline";
import { ScheduleTime } from "./scheduleTime";

export class ScheduleCell {
  id: number;
  teacherName: string;
  discipline: Discipline;
  scheduleTime: ScheduleTime;

  constructor(
    id: number,
    teacherName: string,
    discipline: Discipline,
    scheduleTime: ScheduleTime
  ) {
    this.id = id;
    this.teacherName = teacherName;
    this.discipline = discipline;
    this.scheduleTime = scheduleTime;
  }

}
