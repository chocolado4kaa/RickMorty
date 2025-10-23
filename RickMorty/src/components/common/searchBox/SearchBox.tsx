import type { SearchBox } from "../../../shared/interfaces/SearchBox";
import styles from "./searchBox.module.scss";

export const SearchBoxDiv: React.FC<SearchBox> = ({
  value,
  onChange,
  placeholder = "Search…",
  label = "Search",
  onKeyDown,
}) => {
  return (
    <div className={styles.searchBox}>
      <label>
        <span>{label}</span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
