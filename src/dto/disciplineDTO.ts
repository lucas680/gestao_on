export class DisciplineDTO {
  public id: number;
  public title: string;
  public acronym: string;

  constructor(
    id: number,
    title: string,
    acronym: string,
  ) {
    this.id = id;
    this.title = title;
    this.acronym = acronym;
  }
}
