import { ScheduleDTO } from "@/dto/scheduleDTO";

export class Schedule {
  id: number;
  title: string;
  creationDate: Date;

  constructor(
    id: number,
    title: string,
    creationDate: Date,
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
  }

  static fromDTO(dto: ScheduleDTO): Schedule {
    return new Schedule(
      dto.id,
      dto.title,
      new Date(dto.creationDate),
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
