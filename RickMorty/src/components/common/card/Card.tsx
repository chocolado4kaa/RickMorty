import styles from "./card.module.scss";
import type { Characters } from "../../../shared/interfaces/Characters";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router";

interface CardProps extends Partial<Characters> {
  isLoading?: boolean;
}

export const Card = ({ isLoading = false, ...char }: CardProps) => {
  if (isLoading) {
    return (
      <div className={`${styles.card} skeleton`}>
        <Skeleton width="80%" height="10%" count={5}/>
        <Skeleton width="80%" height={50} />
      </div>
    );
  }

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
      <Link to={`/characters/${id}`}>
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
      </Link>
    </div>
  );
};