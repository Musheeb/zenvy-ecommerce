import { Link } from "react-router-dom";
import styles from "../styles/ForgotPassword.module.css";

import { ROUTES } from "../routes/routes";
import { useState } from "react";

export default function ForgotPassword() {
  const [sendResetLink, setSendResetLink] = useState(false);
  function handleSendResetLink() {
    setSendResetLink(true);
  }
  function handleClosePopup() {
    setSendResetLink(false);
  }
  return (
    // <div className={styles.page}>
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.brandingText}>ZENVY</h1>
        <span className={styles.recoverAccessText}>RECOVER ACCESS</span>
        <p className={styles.instructionText}>
          Provide the email address associated with your account. We will send a
          secure link to reseet your credentials.
        </p>
        <label htmlFor="email" className={styles.emailAddressLabel}>
          EMAIL ADDRESS
        </label>
        <input
          type="text"
          placeholder="curator@zenvy.com"
          id="email"
          className={styles.emailInput}
        />
        <button className={styles.sendLinkButton} onClick={handleSendResetLink}>
          SEND RESET LINK
        </button>
        <hr className={styles.horizontalRuler} />
        <Link to={ROUTES.LOGIN} className={styles.returnToLoginWrapper}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span className={styles.returnToLoginText}>RETURN TO LOGIN</span>
        </Link>
      </div>
      {sendResetLink && (
        <div className={styles.sendResetPasswordLinkPopupContainer}>
          <div className={styles.passworResetLinkSentInformPopup}>
            <span className={styles.resetLinkPopupText}>
              Reset password link has been sent to your associated email address
              successfully.
            </span>
            <span
              className={`material-symbols-outlined ${styles.tickIcon} ${styles.animateTick}`}
            >
              check_circle
            </span>
            <span
              className={`material-symbols-outlined ${styles.closePopup}`}
              onClick={handleClosePopup}
            >
              close
            </span>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
