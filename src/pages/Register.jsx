import styles from "../styles/Register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.advertisementWrapper}>
        <div className={styles.advertisementSection}>
          <span className={styles.topText}>THE DIGITAL MECHANDISER</span>
          <h1>A SANCTUARY OF INTENTIONALITY</h1>
          <div className={styles.contentBlock}>
            <p className={styles.brandingSentenceInParagraph}>
              Join Zenvy to build a collection that values longevity and
              meaning. Discover products chosen with intention, not impulse.
            </p>
            <img
              src="zenvyHeroSection.png"
              alt="ZENVY BRANDING IMAGE"
              className={styles.brandingImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.registerationContent}>
        <h1>Registeration page</h1>
      </div>
    </div>
  );
}
