import styles from "./Hero.module.scss";
import { PageText } from "../../../shared/const/PageText";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>{PageText.heroTitle}</h1>
      </div>
    </section>
  );
};
