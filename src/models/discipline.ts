import { DisciplineDTO } from "@/dto/disciplineDTO";

export class Discipline {
  id: number;
  title: string;
  acronym: string;

  constructor(
    id: number,
    title: string,
    acronym: string,
  ) {
    this.id = id;
    this.title = title;
    this.acronym = acronym;
  }

  static fromDTO(dto: DisciplineDTO): Discipline {
    return new Discipline(
      dto.id,
      dto.title,
      dto.acronym
    );
  }
}
