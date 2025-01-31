import { Classe } from "@/models/classe";
import { ScheduleCell } from "@/models/scheduleCell";

export class ScheduleDTO {
  public id: number;
  public title: string;
  public creationDate: string;
  public classe: Classe;
  public scheduleCells: ScheduleCell[];

  constructor(
    id: number,
    title: string,
    creationDate: string,
    classe: Classe,
    scheduleCells: ScheduleCell[],
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.classe = classe;
    this.scheduleCells = scheduleCells;
  }
}
