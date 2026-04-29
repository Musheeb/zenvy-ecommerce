import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h3>ZENVY</h3>
      <p className={styles.theZenvyEditText}>THE ZENVY EDIT</p>
    </div>
  );
}
