import styles from "../styles/Login.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../routes/routes";
import toast from "react-hot-toast";

export default function Login() {
  const userInput = {
    email: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(userInput);
  const { email, password } = userCredentials;
  const [showPassword, setShowPassword] = useState(false);

  console.log(userCredentials);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleUserInput(event) {
    const { name, value } = event.target;
    setUserCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Email and Password are required!");
      return;
    }
    toast.success(`${email} - ${password}`);
    return;
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
            value={email}
            onChange={handleUserInput}
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
                name="password"
                value={password}
                onChange={handleUserInput}
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
          <button
            className={`${styles.buttons} ${styles.loginButton}`}
            onClick={handleLogin}
          >
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
