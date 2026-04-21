import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <img
          className={styles.zenvyImage}
          src="ZenvyCartLogo.png"
          alt="Zenvy Cart Logo"
        />
        <span>ONE CART. ENDLESS CHOICES.</span>
      </div>
      <div className={styles.loginBox}></div>
      <div className={styles.logoAndQuote}>
        <span>"Everything you need, just one login away."</span>
      </div>
    </div>
  );
}
