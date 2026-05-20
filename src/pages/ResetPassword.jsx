import styles from "../styles/ResetPassword.module.css";
import toast from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { resetPasswordService } from "../services/auth.service";
import { ROUTES } from "../routes/routes";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmNewPassword(value);
    }
  }

  async function handleUpdateAccess() {
    if (!password || !confirmPassword) {
      toast.error("New password or Confirm password can not be empty!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("New password and Confirm password are not the same.");
      return;
    }
    try {
      const response = await resetPasswordService(
        token,
        password,
        confirmPassword,
      );
      toast.success(response.message);
      setPassword("");
      setConfirmNewPassword("");
      navigate(ROUTES.LOGIN);
      return;
    } catch (e) {
      toast.error(e.message || "Something went wrong");
    }
  }

  function handleNavigateToLogin() {
    navigate("/login");
  }
  return (
    <div className={styles.container}>
      <span className={styles.titleZenvy}>ZENVY</span>
      <div className={styles.card}>
        <div className={styles.resetPasswordContent}>
          <h1 className={styles.headingResetPassword}>RESET PASSWORD</h1>
          <p className={styles.instructionInParagraph}>
            Enter your new credentials below to secure your access to the
            archive.
          </p>
          <div className={styles.labelAndInputWrapper}>
            <label htmlFor="password">NEW PASSWORD</label>
            <input
              type="password"
              placeholder="********"
              id="password"
              name="password"
              value={password}
              onChange={handleInput}
            />
            <label htmlFor="confirmPassword">CONFIRM NEW PASSWORD</label>
            <input
              type="password"
              placeholder="********"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInput}
            />
          </div>
          <button
            className={`${styles.buttons} ${styles.updateAccessButton}`}
            onClick={handleUpdateAccess}
          >
            UPDATE ACCESS
          </button>
          <button
            className={`${styles.buttons} ${styles.returnToSignInButton}`}
            onClick={handleNavigateToLogin}
          >
            RETURN TO SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
