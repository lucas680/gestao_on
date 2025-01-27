import { ClasseDTO } from "@/dto/classeDTO";

export class Classe {
  id: number;
  title: string;
  type: string;

  constructor(id: number, title: string, type: string) {
    this.id = id;
    this.title = title;
    this.type = type;
  }

  static fromDTO(dto: ClasseDTO): Classe {
    return new Classe(dto.id, dto.title, dto.type);
  }
}
