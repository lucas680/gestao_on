import { Discipline } from "@/models/discipline";
import { Schedule } from "@/models/schedule";
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
            "Ricardo",
            new Discipline(1, "Matemática")
          )
        );
      }, 3000); // Simula um atraso de 1 segundo
    });
    closeLoading();
    return data;
  }
}
