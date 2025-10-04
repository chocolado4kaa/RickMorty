export type TableProps<T> = {
  title: string;
  data: T[];
  columns: (keyof T)[];
};
