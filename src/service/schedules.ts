import { Discipline } from "@/models/discipline";
import { Schedule } from "@/models/schedule";
import { ScheduleCell } from "@/models/scheduleCell";
import { ScheduleTime } from "@/models/scheduleTime";
import { HttpMethod, httpRequest } from "@/utils/httpRequest";
import { closeLoading, openLoading } from "@/utils/utils";

export class ScheduleService {
  static async getSchecules(): Promise<Schedule[]> {
    const response = await httpRequest(``, HttpMethod.GET);

    const data = response as Schedule[];

    return data;
  }

  static async getScheculeById(id: number): Promise<Schedule> {
    // const response = await httpRequest(/schedule/${id}, HttpMethod.GET);
    // const data = response as Schedule;
    // return data;
    let data;
    if(id == 1){
      data = new Schedule(
        id,
        "Turma 8° Ano A",
        new Date(),
        "8° Ano A - Regular",
        [
          new ScheduleCell(
            1,
            "João",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Segunda", 1)
          ),
          new ScheduleCell(
            1,
            "João",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Segunda", 2)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Segunda", 3)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "Ciências", "CIE"),
            new ScheduleTime(1, "Quinta", 2)
          ),
          new ScheduleCell(
            1,
            "Lucas",
            new Discipline(1, "Artes", "art"),
            new ScheduleTime(1, "Quarta", 5)
          ),
        ]
      );
    }else{
      data = new Schedule(
        id,
        "Turma 8° Ano B",
        new Date(),
        "8° Ano B - Integral",
        [
          new ScheduleCell(
            1,
            "João",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Segunda", 1)
          ),
          new ScheduleCell(
            1,
            "João",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Segunda", 2)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Segunda", 3)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Segunda", 4)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "Inglês", "ing"),
            new ScheduleTime(1, "Segunda", 5)
          ),
          new ScheduleCell(
            1,
            "Carlos",
            new Discipline(1, "Geo", "geo"),
            new ScheduleTime(1, "Segunda", 6)
          ),
          new ScheduleCell(
            1,
            "Carlos",
            new Discipline(1, "Geo", "geo"),
            new ScheduleTime(1, "Segunda", 7)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "nsei", "er"),
            new ScheduleTime(1, "Segunda", 8)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "Ciências", "CIE"),
            new ScheduleTime(1, "Segunda", 9)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "Ciências", "CIE"),
            new ScheduleTime(1, "Segunda", 10)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "História", "his"),
            new ScheduleTime(1, "Terça", 1)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "História", "his"),
            new ScheduleTime(1, "Terça", 2)
          ),
          new ScheduleCell(
            1,
            "Lucas",
            new Discipline(1, "Artes", "art"),
            new ScheduleTime(1, "Terça", 3)
          ),
          new ScheduleCell(
            1,
            "Lucas",
            new Discipline(1, "Educação Física", "edf"),
            new ScheduleTime(1, "Terça", 4)
          ),
          new ScheduleCell(
            1,
            "Lucas",
            new Discipline(1, "Educação Física", "edf"),
            new ScheduleTime(1, "Terça", 5)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Quarta", 1)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Quarta", 2)
          ),
          new ScheduleCell(
            1,
            "Larissa",
            new Discipline(1, "Português", "port"),
            new ScheduleTime(1, "Quarta", 3)
          ),
          new ScheduleCell(
            1,
            "Marcos",
            new Discipline(1, "nsei", "red"),
            new ScheduleTime(1, "Quarta", 4)
          ),
          new ScheduleCell(
            1,
            "Marcos",
            new Discipline(1, "nsei", "red"),
            new ScheduleTime(1, "Quarta", 5)
          ),
          new ScheduleCell(
            1,
            "Carlos",
            new Discipline(1, "Geo", "geo"),
            new ScheduleTime(1, "Quarta", 6)
          ),
          new ScheduleCell(
            1,
            "João André",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Quarta", 7)
          ),
          new ScheduleCell(
            1,
            "João André",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Quarta", 8)
          ),
          new ScheduleCell(
            1,
            "João André",
            new Discipline(1, "Matemática", "mat"),
            new ScheduleTime(1, "Quarta", 9)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "nsei", "er"),
            new ScheduleTime(1, "Quarta", 10)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "nsei", "ing"),
            new ScheduleTime(1, "Quinta", 1)
          ),
          new ScheduleCell(
            1,
            "Lucas",
            new Discipline(1, "nsei", "art"),
            new ScheduleTime(1, "Quinta", 2)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "nsei", "his"),
            new ScheduleTime(1, "Quinta", 3)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "nsei", "his"),
            new ScheduleTime(1, "Quinta", 4)
          ),
          new ScheduleCell(
            1,
            "Maria",
            new Discipline(1, "nsei", "his"),
            new ScheduleTime(1, "Quinta", 5)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "nsei", "cie"),
            new ScheduleTime(1, "Sexta", 1)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "nsei", "cie"),
            new ScheduleTime(1, "Sexta", 2)
          ),
          new ScheduleCell(
            1,
            "Elisa",
            new Discipline(1, "nsei", "cie"),
            new ScheduleTime(1, "Sexta", 3)
          ),
          new ScheduleCell(
            1,
            "Carlos",
            new Discipline(1, "nsei", "geo"),
            new ScheduleTime(1, "Sexta", 4)
          ),
          new ScheduleCell(
            1,
            "Carlos",
            new Discipline(1, "nsei", "geo"),
            new ScheduleTime(1, "Sexta", 5)
          ),
        ]
      );
    }
    openLoading();
    const result = await new Promise<Schedule>((resolve) => {
      setTimeout(() => {
        resolve(
          data
        );
      }, 3000); // Simula um atraso de 1 segundo
    });
    closeLoading();
    return result;
  }
}
