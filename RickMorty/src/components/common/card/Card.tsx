import styles from "./card.module.scss";
import type { Characters } from "../../../shared/interfaces/Characters";

export const Card = (char: Characters) => {
  const { created, episode, url, type, ...rest } = char;
  const { id, name, image, ...info } = rest;

  const displayableValue = (value: unknown) => {
    return value && typeof value === "object" && "name" in value
      ? String(value.name)
      : String(value);
  };

  const CharacterInfo = () => {
    return Object.entries(info).map(([key, value]) => (
      <p key={key}>
        <strong>{key}: </strong>
        {displayableValue(value)}
      </p>
    ));
  };

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
        <CharacterInfo />
      </div>
    </div>
  );
};


