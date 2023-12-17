import styles from "./Card.module.css";
import background from "../assets/bg-pattern-card.svg";
import profile from "../assets/image-victor.jpg";

function Card() {
  return (
    <article className={styles["c-card"]}>
      <img src={background} alt="Background profile cover" />
      <header className={styles["c-card__header"]}>
        <img src={profile} alt="Profile image" />
        <p className={styles["c-card__name"]}>
          Victor Crest <span className={styles["c-card__age"]}>26</span>
        </p>
        <p className={styles["c-card__city"]}>London</p>
      </header>
      <footer className={styles["c-card__footer"]}>
        <div className={styles["c-card__info"]}>
          <p>80K</p>
          <p>Followers</p>
        </div>
        <div className={styles["c-card__info"]}>
          <p>803K</p>
          <p>Likes</p>
        </div>
        <div className={styles["c-card__info"]}>
          <p>1.4K</p>
          <p>Photos</p>
        </div>
      </footer>
    </article>
  );
}

export { Card };
