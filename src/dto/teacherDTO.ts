import { Discipline } from "@/models/discipline";

export class TeacherDTO {
    public id: number;
    public name: string;
    public disciplines: Discipline[];
    public turn: string;
  
    constructor(id: number, name: string, disciplines: Discipline[], turn: string) {
      this.id = id;
      this.name = name;
      this.disciplines = disciplines;
      this.turn = turn;
    }
  }
  