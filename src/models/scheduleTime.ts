export class ScheduleTime {
  id: number;
  day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta";
  classNumber: number;

  constructor(
    id: number,
    day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta",
    classNumber: number
  ) {
    this.id = id;
    this.day = day;
    this.classNumber = classNumber;
  }
}
