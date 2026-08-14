import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <h1 className={styles.logo}>ZENVY</h1>

      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p className={styles.bottomQuote}>Loading your shopping experience...</p>
    </div>

    // <div className="product-grid">
    //   {[...Array(8)].map((_, index) => (
    //     <div key={index} className={styles.skeletonCard}>
    //       <div className={styles.skeletonImage}></div>
    //       <div className={styles.skeletonTitle}></div>
    //       <div className={styles.skeletonPrice}></div>
    //     </div>
    //   ))}
    // </div>

    // <div className={styles.loaderWrapper}>
    //   <div>
    //     <h1 className={styles.loadingText}>Loader is loading...</h1>
    //   </div>
    // </div>
  );
}
