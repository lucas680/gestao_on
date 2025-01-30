export class DisciplineDTO {
  public title: string;
  public acronym: string;

  constructor(title: string, acronym: string) {
    this.title = title;
    this.acronym = acronym;
  }

  toJsonString(): string {
    return JSON.stringify({
      title: this.title,
      acronym: this.acronym,
    });
  }
}
