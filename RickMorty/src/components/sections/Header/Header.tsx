import styles from "./header.module.scss";
import { SectionHeaders } from "../../../shared/const/Headers";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          {Object.entries(SectionHeaders).map(([key, header]) => (
            <li key={key}>
              <a href={`#${header.id}`}>{header.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
