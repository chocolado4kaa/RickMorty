import { useState } from "react";
import type {
  FilterFieldConfig,
  FilterValues,
} from "../../../shared/interfaces/filters";
import { SearchBoxDiv } from "../searchBox/SearchBox";
import styles from "./filterPanel.module.scss";

interface FilterPanelProps {
  fields: FilterFieldConfig[];
  onApply: (filters: FilterValues) => void;
}

export const FilterPanel = ({ fields, onApply }: FilterPanelProps) => {
  const emptyValues = () =>
    Object.fromEntries(fields.map((f) => [f.key, ""])) as FilterValues;

  const [inputValues, setInputValues] = useState<FilterValues>(emptyValues);
  const [appliedValues, setAppliedValues] = useState<FilterValues>(emptyValues);

  const activeCount = Object.values(appliedValues).filter(Boolean).length;

  const handleTextChange = (key: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleTextEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    key: string,
  ) => {
    if (e.key !== "Enter") return;
    const next = { ...appliedValues, [key]: inputValues[key] };
    setAppliedValues(next);
    onApply(next);
  };

  const handleSelectChange = (key: string, value: string) => {
    const next = { ...appliedValues, [key]: value };
    setInputValues((prev) => ({ ...prev, [key]: value }));
    setAppliedValues(next);
    onApply(next);
  };

  const reset = () => {
    const empty = emptyValues();
    setInputValues(empty);
    setAppliedValues(empty);
    onApply(empty);
  };

  return (
    <div className={styles.filterPanel}>
      {fields.map((field) =>
        field.type === "select" ?
          <label key={field.key} className={styles.field}>
            <span>{field.label}</span>
            <select
              value={inputValues[field.key]}
              onChange={(e) => handleSelectChange(field.key, e.target.value)}
            >
              <option value="">Any</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        : <SearchBoxDiv
            key={field.key}
            label={field.label}
            value={inputValues[field.key]}
            placeholder={field.placeholder}
            onChange={(v) => handleTextChange(field.key, v)}
            onKeyDown={(e) => handleTextEnter(e, field.key)}
          />,
      )}

      <button
        className={`${styles.reset} ${activeCount > 0 && styles.active}`}
        onClick={reset}
      >
        Clear all
      </button>

      {activeCount > 0 && (
        <button className={styles.reset} onClick={reset}>
          Clear all
        </button>
      )}
    </div>
  );
};
