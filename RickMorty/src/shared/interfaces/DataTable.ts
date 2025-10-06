export type DataTableSectionProps<T> = {
  title: string;
  apiUrl: string;
  sectionHeader: {
    id: string,
    text: string
  };
  excludeKeys?: (keyof T)[];
};
