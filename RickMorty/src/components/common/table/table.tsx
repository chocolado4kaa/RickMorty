import type { TableProps } from "../../../shared/interfaces/TableProps";
import styles from "./table.module.scss";

export const Table = <T extends object>({
  title,
  data,
  columns,
}: TableProps<T>) => {
  return (
    <div className={styles.table}>
      <h3>{title}</h3>
      <div className={styles.scroll}>
        <table className={styles.grid}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={String(col)}>{String(col)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={col as string}>
                    {Array.isArray(row[col])
                      ? row[col].length.toString()
                      : String(row[col])}{" "}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
