import type { RenderObjectProps } from "../shared/interfaces/characterPage";

export const isValidDate = (value: unknown): value is string =>
  typeof value === "string" && !isNaN(Date.parse(value));

export const renderValue = (value: unknown): string | number => {
  if (Array.isArray(value)) return value.length;
  if (isValidDate(value)) return new Date(value).toLocaleDateString();
  if (typeof value === "object" && value !== null) return JSON.stringify(value);
  return String(value);
};

export const renderObject = <T extends object>({
  obj,
  excludeKeys = [],
}: RenderObjectProps<T>) =>
  (Object.keys(obj) as (keyof T)[])
    .filter((key) => !excludeKeys.includes(key))
    .map((key) => (
      <p key={String(key)}>
        <strong>
          {String(key).charAt(0).toUpperCase() + String(key).slice(1)}:
        </strong>{" "}
        {renderValue(obj[key])}
      </p>
    ));
