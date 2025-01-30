import { ScheduleDTO } from "@/dto/scheduleDTO";
import { Discipline } from "./discipline";

export class Schedule {
  id: number;
  title: string;
  creationDate: Date;
  teacherName: string;
  classeName: string;
  discipline: Discipline;

  constructor(
    id: number,
    title: string,
    creationDate: Date,
    classeName: string,
    teacherName: string,
    discipline: Discipline,
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.classeName = classeName;
    this.teacherName = teacherName;
    this.discipline = discipline;
  }

  static fromDTO(dto: ScheduleDTO): Schedule {
    return new Schedule(
      dto.id,
      dto.title,
      new Date(dto.creationDate),
      dto.classe.title,
      dto.teacher.name,
      dto.discipline
    );
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hour}:${minutes}`;
  }

  public get getFormattedCreatedDate(): string {
    return this.formatDate(this.creationDate);
  }

}
