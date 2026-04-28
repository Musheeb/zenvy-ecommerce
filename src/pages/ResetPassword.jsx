import styles from "../styles/ResetPassword.module.css";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
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

  function handleUpdateAccess() {
    if (!password || !confirmPassword) {
      toast.error("New password or Confirm new password can not be empty!");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Yes inside the condition");
      toast.error("New password and Confirm new password are not same.");
      return;
    }
    toast.success(
      "Congratulations🎉! Your new password has been set successfully",
    );
  }

  function handleNavigateToLogin() {
    navigate("/login");
  }
  return (
    <div className={styles.container}>
      <span className={styles.titleZenvy}>ZENVY</span>
      <div className={styles.card}>
        <div className={styles.resetPasswordContent}>
          <h1>RESET PASSWORD</h1>
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
