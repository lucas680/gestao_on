import { Classe } from "@/models/classe";
import { Discipline } from "@/models/discipline";
import { ScheduleTime } from "@/models/scheduleTime";
import { Teacher } from "@/models/teacher";

export class ScheduleDTO {
  public id: number;
  public title: string;
  public creationDate: string;
  public classe: Classe;
  public teacher: Teacher;
  public discipline: Discipline;
  public scheduleTime: ScheduleTime;

  constructor(
    id: number,
    title: string,
    creationDate: string,
    classe: Classe,
    teacher: Teacher,
    discipline: Discipline,
    scheduleTime: ScheduleTime
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.classe = classe;
    this.teacher = teacher;
    this.discipline = discipline;
    this.scheduleTime = scheduleTime;
  }
}
