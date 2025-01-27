import { Discipline } from "@/models/discipline";

export class TeacherDTO {
    public id: number;
    public name: string;
    public discipline: Discipline;
    public turn: string;
  
    constructor(id: number, name: string, discipline: Discipline, turn: string) {
      this.id = id;
      this.name = name;
      this.discipline = discipline;
      this.turn = turn;
    }
  }
  