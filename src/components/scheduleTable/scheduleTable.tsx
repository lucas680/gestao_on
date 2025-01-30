import styles from "./scheduleTable.module.scss";

export default function ScheduleTable() {
  return (
    <div className={styles.containe}>
      <table>
        <thead>
          <th>Aula</th>
          <th>Horário</th>
          <th>Segunda-feira</th>
          <th>Terça-feira</th>
          <th>Quarta-feira</th>
          <th>Quinta-feira</th>
          <th>Sexta-feira</th>
        </thead>
        <tbody>
          <tr>
            <td>1°</td>
            <td>7:00 às 7:55</td>
            <td>João - MAT</td>
            <td>Maria - HIST</td>
            <td>Larissa - POR</td>
            <td>Maria - ING</td>
            <td>Elisa - CIE</td>
          </tr>
          <tr>
            <td>2°</td>
            <td>7:00 às 7:55</td>
            <td>João - MAT</td>
            <td>Maria - HIST</td>
            <td>Larissa - POR</td>
            <td>Maria - ING</td>
            <td>Elisa - CIE</td>
          </tr>
          <tr>
            <td>3°</td>
            <td>7:00 às 7:55</td>
            <td>João - MAT</td>
            <td>Maria - HIST</td>
            <td>Larissa - POR</td>
            <td>Maria - ING</td>
            <td>Elisa - CIE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
