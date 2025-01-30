export class ScheduleTime {
  id: number;
  day: string;
  classNumber: number;
  time: string;

  constructor(
    id: number,
    day: string,
    classNumber: number,
    time: string
  ) {
    this.id = id;
    this.day = day;
    this.classNumber = classNumber;
    this.time = time;
  }
}
