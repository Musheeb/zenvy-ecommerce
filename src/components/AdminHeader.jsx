import styles from "../styles/AdminHeader.module.css";

import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.flexStartPortion}>
        <span className={styles.zenvy}>ZENVY</span>
        <ul className={styles.optionList}>
          <Link className={`${styles.links}`}>Dashboard</Link>
          <Link className={`${styles.links}`}>Collections</Link>
          <Link className={`${styles.links}`}>Activity</Link>
        </ul>
      </div>
      <div className={styles.flexEndPortion}>
        <span className={`material-symbols-outlined ${styles.icons}`}>
          notifications
        </span>
        <span className={`material-symbols-outlined ${styles.icons}`}>
          settings
        </span>
        <span className={`material-symbols-outlined ${styles.icons}`}>
          account_circle
        </span>
      </div>
    </div>
  );
}
