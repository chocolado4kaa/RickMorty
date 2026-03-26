export type FilterValues = Record<string, string>;

export type FilterFieldType = "text" | "select";

export interface FilterFieldConfig {
  key: string;
  label: string;
  type: FilterFieldType;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export const CHARACTER_FILTERS: FilterFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "e.g., Rick (Enter)",
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "alive", label: "Alive" },
      { value: "dead", label: "Dead" },
      { value: "unknown", label: "Unknown" },
    ],
  },
  {
    key: "species",
    label: "Species",
    type: "text",
    placeholder: "e.g., Human (Enter)",
  },
  {
    key: "type",
    label: "Type",
    type: "text",
    placeholder: "e.g., Parasite (Enter)",
  },
  {
    key: "gender",
    label: "Gender",
    type: "select",
    options: [
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
      { value: "genderless", label: "Genderless" },
      { value: "unknown", label: "Unknown" },
    ],
  },
];

export const LOCATION_FILTERS: FilterFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "e.g., Earth (Enter)",
  },
  {
    key: "type",
    label: "Type",
    type: "text",
    placeholder: "e.g., Planet (Enter)",
  },
  {
    key: "dimension",
    label: "Dimension",
    type: "text",
    placeholder: "e.g., Dimension C-137 (Enter)",
  },
];

export const EPISODE_FILTERS: FilterFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    placeholder: "e.g., Pilot (Enter)",
  },
  {
    key: "episode",
    label: "Episode code",
    type: "text",
    placeholder: "e.g., S01E01 (Enter)",
  },
];
