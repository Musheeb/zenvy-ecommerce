import styles from "../styles/UnderConstruction.module.css";

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <span className={`material-symbols-outlined ${styles.constructionLogo}`}>
        construction
      </span>
      <h1>🚧 THIS SITE IS UNDER CONSTRUCTION 🚧</h1>
    </div>
  );
}
