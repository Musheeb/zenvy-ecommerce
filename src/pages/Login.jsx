import styles from "../styles/Login.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../routes/routes";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
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
          <div className={styles.inputGroup}>
            <div className={styles.passwordLabelForgetPasswordWrapper}>
              <label className={styles.labels} htmlFor="password">
                PASSWORD
              </label>
              <Link
                to={ROUTES.FORGOT_PASSWORD}
                className={styles.forgetPassword}
              >
                FORGOT PASSWORD?
              </Link>
            </div>
            <div className={styles.passwordInputWrapper}>
              <input
                className={`${styles.inputs}`}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*********"
              />
              {showPassword ? (
                <span
                  className={`material-symbols-outlined ${styles.eyeIcon}`}
                  onClick={handleShowPassword}
                >
                  visibility_off
                </span>
              ) : (
                <span
                  className={`material-symbols-outlined ${styles.eyeIcon}`}
                  onClick={handleShowPassword}
                >
                  visibility
                </span>
              )}
            </div>
          </div>
          <button className={`${styles.buttons} ${styles.loginButton}`}>
            LOGIN
          </button>
          <p className={styles.loginOptionSeparatorText}>OR CONTINUE WITH</p>
          <button
            className={`${styles.buttons} ${styles.loginWithGoogleButton}`}
          >
            <i className={`fa-brands fa-google ${styles.googleLogo}`}></i>
            LOGIN WITH GOOGLE
          </button>
          <p className={styles.signUpText}>
            Don't have an account?{" "}
            <Link to={ROUTES.REGISTER} className={styles.signUpLink}>
              Sign Up
            </Link>
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
