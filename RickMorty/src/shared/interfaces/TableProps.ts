export type TableProps<T> = {
  data: T[];
  columns: (keyof T)[];
};
