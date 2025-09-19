import styles from "./Card.module.scss";
import type { Characters } from "../../shared/interfaces/Characters";

type Props = { char: Characters };

const Card = ({ char }: Props) => {
  const { created, episode, url, type, ...clean } = char as any;
  const { id, name, image, ...info } = clean;
  return (
    <div className={styles.card} key={id}>
      <header className={styles.header}>
        <h3>{name}</h3>
      </header>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <header className={styles.header}>
          <h3>{name}</h3>
        </header>
        {Object.entries(info).map(([key, value]) => (
          <p>
            <strong>{key}: </strong>
            {value && typeof value === "object"
              ? (value as any).name ?? JSON.stringify(value)
              : String(value)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
