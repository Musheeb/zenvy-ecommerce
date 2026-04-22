import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <span className={styles.zenvyBranding}>ZENVY</span>
        <span className={`${styles.texts}`}>ONE CART. ENDLESS CHOICES.</span>
      </div>
      <div className={styles.loginBox}>
        <div className={styles.loginContents}>
          <span className={styles.signInText}>Sign In</span>
          <p className={styles.signInQuoteText}>
            Access your curated collection and order history.
          </p>
          <label className={styles.labels} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={`${styles.inputs}`}
            type="email"
            id="email"
            name="email"
            placeholder="curator@zenvy.com"
          />
          <label className={styles.labels} htmlFor="password">
            PASSWORD
          </label>
          <input
            className={`${styles.inputs}`}
            type="password"
            id="password"
            placeholder="*********"
          />
          <button className={`${styles.buttons}`}>LOGIN</button>
          <p className={styles.loginOptionSeparatorText}>OR CONTINUE WITH</p>
          <button className={`${styles.buttons}`}>LOGIN WITH GOOGLE</button>
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </div>
      <div className={styles.logoAndQuote}>
        <img
          className={styles.logoSober}
          src="ZenvyLogoSober1.png"
          alt="Zenvy Logo Sober"
        />
        <p className={`${styles.texts} ${styles.quote}`}>
          Everything you need, just one login away.
        </p>
      </div>
    </div>
  );
}
