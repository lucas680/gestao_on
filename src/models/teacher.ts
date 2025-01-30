import { TeacherDTO } from "@/dto/teacherDTO";
import { Discipline } from "./discipline";

export class Teacher {
  id: number;
  name: string;
  disciplines: Discipline[];
  turn: string;

  constructor(id: number, name: string, disciplines: Discipline[], turn: string) {
    this.id = id;
    this.name = name;
    this.disciplines = disciplines;
    this.turn = turn;
  }

  static fromDTO(dto: TeacherDTO): Teacher {
    return new Teacher(dto.id, dto.name, dto.disciplines, dto.turn);
  }
}
