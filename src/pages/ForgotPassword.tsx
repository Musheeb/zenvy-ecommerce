import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import styles from "../styles/ForgotPassword.module.css";

import { ROUTES } from "../routes/routes";
import { useState, type ChangeEvent } from "react";

import { forgotPasswordService } from "../services/auth.service";

import { isAxiosError } from "axios";

export default function ForgotPassword() {
  const [sendResetLink, setSendResetLink] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSendResetLink() {
    if (isLoading) return;
    if (!email) {
      toast.error("Email can not be empty!");
      return;
    }
    const furnishedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(furnishedEmail)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    try {
      setIsLoading(true);
      const response = await forgotPasswordService(furnishedEmail);
      setSendResetLink(true);
      setEmail("");
      toast.success(response.message);
      return;
    } catch (e: unknown) {
      setIsLoading(false);
      if (isAxiosError(e)) {
        console.log("Axios Error: ", e.message);
      } else {
        console.log(e);
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  function handleClosePopup() {
    setSendResetLink(false);
  }

  function handleEmailInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setEmail(value);
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
          name="email"
          value={email}
          onChange={handleEmailInput}
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
            <div className={styles.closePopupContainer}>
              <span
                className={`material-symbols-outlined ${styles.closePopup}`}
                onClick={handleClosePopup}
              >
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
