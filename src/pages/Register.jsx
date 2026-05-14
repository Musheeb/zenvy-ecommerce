import styles from "../styles/Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { ROUTES } from "../routes/routes";
import { useState } from "react";
import { registerUserService } from "../services/auth.service";

export default function Register() {
  const navigate = useNavigate();
  const initialFormStage = {
    username: "",
    email: "",
    password: "",
  };
  const [registrationData, setRegistrationData] = useState(initialFormStage);

  function handleChange(event) {
    const { name, value } = event.target;
    setRegistrationData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      !registrationData.username ||
      !registrationData.email ||
      !registrationData.password
    ) {
      toast.error("Fullname, password and email are required!");
      return;
    }
    try {
      const response = await registerUserService(registrationData);
      //set token in the cookie here if needed.
      toast.success(response.message);
      setRegistrationData(initialFormStage);
      // Check if the role is admin or user and then act accordingly.
      navigate(ROUTES.ADMIN_DASHBOARD);
    } catch (e) {
      toast.error(e || "Something went wrong");
    }
    console.log("Form submitted");
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
        <label htmlFor="username">FULL NAME</label>
        <input
          className={styles.inputsRegistration}
          type="text"
          id="username"
          placeholder="JOHN DOE"
          name="username"
          value={registrationData.username}
          onChange={handleChange}
        />
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input
          className={styles.inputsRegistration}
          type="email"
          id="email"
          placeholder="archive@zenvy.com"
          name="email"
          value={registrationData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          className={`${styles.inputsRegistration} ${styles.passwordInput}`}
          type="password"
          id="password"
          placeholder="********"
          name="password"
          value={registrationData.password}
          onChange={handleChange}
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
