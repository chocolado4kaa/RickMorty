import type { TableProps } from "../../../shared/interfaces/TableProps";
import styles from "./table.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Table = <T extends object>({
  data,
  columns,
  isLoading = false,
}: TableProps<T>) => {
  const skeletonRows = data.length;

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
        {isLoading
          ? Array.from({ length: skeletonRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <td key={colIndex} className="skeleton">
                    <Skeleton />
                  </td>
                ))}
              </tr>
            ))
          : data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {Array.isArray(row[col])
                      ? row[col].length.toString()
                      : String(row[col])}
                  </td>
                ))}
              </tr>
            ))}
      </tbody>
    </table>
  );
};