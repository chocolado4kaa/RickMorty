import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Lear more about your favorite cartoon</h1>
      </div>
    </section>
  );
};

export default Hero;
