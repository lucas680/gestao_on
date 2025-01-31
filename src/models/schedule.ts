import { ScheduleDTO } from "@/dto/scheduleDTO";
import { ScheduleCell } from "./scheduleCell";

export class Schedule {
  id: number;
  title: string;
  creationDate: Date;
  classeName: string;
  scheduleCells: ScheduleCell[];

  constructor(
    id: number,
    title: string,
    creationDate: Date,
    classeName: string,
    scheduleCells: ScheduleCell[],
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.classeName = classeName;
    this.scheduleCells = scheduleCells
  }

  static fromDTO(dto: ScheduleDTO): Schedule {
    return new Schedule(
      dto.id,
      dto.title,
      new Date(dto.creationDate),
      dto.classe.title,
      dto.scheduleCells,
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
