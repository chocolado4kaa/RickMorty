export type DataTableSectionProps<T> = {
  title: string;
  apiUrl: string;
  sectionHeader: {
    href: string;
    id: string,
    text: string
  };
  excludeKeys?: (keyof T)[];
};
