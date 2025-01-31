import styles from "./scheduleTable.module.scss";

export default function ScheduleTable() {
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
          <tr>
            <td>1°</td>
            <td>7:00 às 7:55</td>
            <td className={styles['math']}>João - MAT</td>
            <td className={styles.history}>Maria - HIST</td>
            <td className={styles.portuguese}>Larissa - POR</td>
            <td className={styles.english}>Maria - ING</td>
            <td className={styles.science}>Elisa - CIE</td>
          </tr>
          <tr>
            <td>2°</td>
            <td>7:55 às 8:50</td>
            <td className={styles.math}>João - MAT</td>
            <td className={styles.history}>Maria - HIST</td>
            <td className={styles.portuguese}>Larissa - POR</td>
            <td className={styles.english}>Maria - ING</td>
            <td className={styles.science}>Elisa - CIE</td>
          </tr>
          <tr className={styles.break}>
            <td colSpan={7}>Lanche</td>
          </tr>
          <tr>
            <td>3°</td>
            <td>9:10 às 10:00</td>
            <td className={styles.portuguese}>Larissa - POR</td>
            <td className={styles.english}>Lucas - ART</td>
            <td className={styles.portuguese}>Larissa - POR</td>
            <td className={styles.history}>Maria - HIST</td>
            <td className={styles.science}>Carlos - GEO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
