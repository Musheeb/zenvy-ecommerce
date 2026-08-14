import { ROUTES } from "../routes/routes";
import styles from "../styles/Footer.module.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h4>ZENVY</h4>
      </div>
      <div className={styles.links}>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className={styles.link}>
          PRIVACY
        </Link>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className={styles.link}>
          TERMS
        </Link>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className={styles.link}>
          ABOUT
        </Link>
        <Link to={ROUTES.UNDER_CONSTRUCTION} className={styles.link}>
          CONTACT
        </Link>
      </div>
      <div className={styles.copyright}>
        <h6>@ 2026 ZENVY CART. ALL RIGHTS RESERVED.</h6>
      </div>
    </div>
  );
}
