import type { TableProps } from "../../../shared/interfaces/TableProps";
import styles from "./table.module.scss";

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  return (
    <table className={styles.table}>
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
  );
};
