import styles from "../styles/Register.module.css";
import { ROUTES } from "../routes/routes";

import { Link } from "react-router-dom";

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("From submitted");
  }

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
              src="/zenvyHeroSection.png"
              alt="ZENVY BRANDING IMAGE"
              className={styles.brandingImage}
            />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.registerationContent}>
        <div>
          <h2>CREATE ACCOUNT</h2>
          <p className={styles.createAccountParagraph}>
            Explore products shaped by purpose and design.
          </p>
        </div>
        <label htmlFor="fullname">FULL NAME</label>
        <input
          className={styles.inputsRegistration}
          type="text"
          id="fullname"
          placeholder="JOHN DOE"
          name="fullname"
        />
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input
          className={styles.inputsRegistration}
          type="email"
          id="email"
          placeholder="archive@zenvy.com"
          name="email"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          className={`${styles.inputsRegistration} ${styles.passwordInput}`}
          type="password"
          id="password"
          placeholder="********"
          name="password"
        />
        <button className={styles.createAccountButton}>CREATE ACCOUNT</button>
        <span className={styles.orSignUpWithGoogle}>OR</span>
        <button className={styles.signUpWithGoogle}>
          <i className={`fa-brands fa-google ${styles.googleLogo}`}></i> SIGN UP
          WITH GOOGLE
        </button>
        <p className={styles.loginRedictText}>
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link to={ROUTES.LOGIN} className={styles.loginLink}>
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
}
