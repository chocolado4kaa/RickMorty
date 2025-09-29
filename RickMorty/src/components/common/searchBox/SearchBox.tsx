import type { SearchBox } from "../../../shared/interfaces/SearchBox";
import styles from "./searchBox.module.scss";

export const SearchBoxDiv: React.FC<SearchBox> = ({
  value,
  onChange,
  placeholder = "Search…",
  label = "Search",
}) => {
  return (
    <div className={styles.searchBox} style={{ marginBottom: 16 }}>
      <label>
        <span>{label}</span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
