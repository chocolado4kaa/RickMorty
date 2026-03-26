import type { FilterFieldConfig } from "./filters";

export type DataTableSectionProps<T> = {
  filter: FilterFieldConfig[];
  apiUrl: string;
  sectionHeader: {
    id: string;
    text: string;
    href: string;
  };
  excludeKeys?: (keyof T)[];
};
