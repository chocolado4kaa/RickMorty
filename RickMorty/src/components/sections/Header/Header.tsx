import styles from "./header.module.scss";

export const Header = ({
  headers,
}: {
  headers: {href: string; id: string; text: string }[];
}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          {headers.map((header) => (
            <li key={header.id}>
              <a href={`${header.href}`}>{header.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
