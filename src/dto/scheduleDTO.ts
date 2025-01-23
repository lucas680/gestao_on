export class ScheduleDTO {
  public id: number;
  public title: string;
  public creationDate: string;

  constructor(
    id: number,
    title: string,
    creationDate: string
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
  }
}
