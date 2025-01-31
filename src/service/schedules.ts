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
    openLoading();
    const data = await new Promise<Schedule>((resolve) => {
      setTimeout(() => {
        resolve(
          new Schedule(
            id,
            "Turma 8° Ano A",
            new Date(),
            "8° Ano A - Integral",
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
          )
        );
      }, 3000); // Simula um atraso de 1 segundo
    });
    closeLoading();
    return data;
  }
}
