import { DisciplineDTO } from "@/dto/disciplineDTO";

export class Discipline {
  id: number;
  title: string;

  constructor(
    id: number,
    title: string,
  ) {
    this.id = id;
    this.title = title;
  }

  static fromDTO(dto: DisciplineDTO): Discipline {
    return new Discipline(
      dto.id,
      dto.title,
    );
  }
}
