export class CreateScheduleDTO {
  public title: string;
  public classeId: number;

  constructor(title: string, classeId: number) {
    this.title = title;
    this.classeId = classeId;
  }

  toJsonString(): string {
    return JSON.stringify({
      title: this.title,
      classe: this.classeId,
    });
  }
}
