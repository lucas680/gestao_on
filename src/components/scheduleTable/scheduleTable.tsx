import { Schedule } from "@/models/schedule";
import styles from "./scheduleTable.module.scss";

interface Itable {
  schedule: Schedule;
}

export default function ScheduleTable(props: Itable) {
  const dayOrder = {
    Segunda: 1,
    Terça: 2,
    Quarta: 3,
    Quinta: 4,
    Sexta: 5,
  };

  props.schedule.scheduleCells.sort((a, b) => {
    // Primeiro, compara pelo classNumber
    if (a.scheduleTime.classNumber !== b.scheduleTime.classNumber) {
      return a.scheduleTime.classNumber - b.scheduleTime.classNumber;
    }

    // Em caso de empate, compara pelos dias da semana usando o mapeamento
    return dayOrder[a.scheduleTime.day] - dayOrder[b.scheduleTime.day];
  });
  console.log(props.schedule);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Aula</th>
            <th>Horário</th>
            <th>Segunda-feira</th>
            <th>Terça-feira</th>
            <th>Quarta-feira</th>
            <th>Quinta-feira</th>
            <th>Sexta-feira</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).flatMap((_, classNumber) => {
            // Filtra as células para o horário atual
            const cellsForClass = props.schedule.scheduleCells.filter(
              (cell) => cell.scheduleTime.classNumber === classNumber + 1
            );

            // Mapeia cada dia da semana para a célula correspondente
            const row = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map(
              (day) => {
                const cell = cellsForClass.find(
                  (item) => item.scheduleTime.day === day
                );
                return cell ? (
                  <td
                    key={day}
                    className={styles[cell.discipline.acronym.toLowerCase()]}
                  >
                    {cell.teacherName} - {cell.discipline.acronym.toUpperCase()}
                  </td>
                ) : (
                  <td key={day}></td> // Célula vazia se não houver dado
                );
              }
            );

            // Horário de lanche para aulas
            const isBreak = classNumber+1 === 2 || classNumber+1 === 7;
            const isLunch = classNumber+1 === 5;

            // Retorna a linha do horário e, se for um intervalo, inclui o `<tr>` do lanche
            return [
              <tr key={`class-${classNumber}`}>
                <td>{classNumber + 1}°</td>
                <td>{getTimeForClass(classNumber + 1)}</td>
                {row}
              </tr>,
              isBreak && (
                <tr key={`break-${classNumber}`} className={styles.break}>
                  <td colSpan={7}>Lanche</td>
                </tr>
              ),
              isLunch && (
                <tr key={`break-${classNumber}`} className={styles.break}>
                  <td colSpan={7}>Almoço</td>
                </tr>
              ),
            ].filter(Boolean); // Remove `false` quando não houver intervalo
          })}
        </tbody>
      </table>
    </div>
  );
}

function getTimeForClass(classNumber: number): string {
  const times = [
    "7:00 às 7:55",
    "7:55 às 8:50",
    "9:10 às 10:00",
    "10:00 às 10:50",
    "10:50 às 11:40",
    "13:00 às 13:55",
    "13:55 às 14:50",
    "15:10 às 16:00",
    "16:00 às 16:50",
    "16:50 às 17:40",
  ];
  return times[classNumber - 1] || "";
}
