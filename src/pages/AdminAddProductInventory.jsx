import styles from "../styles/AdminAddProductInventory.module.css";

export default function AdminAddProductInventory() {
  return (
    <div className={styles.container}>
      <div className={styles.textAndButtonWrapper}>
        <div className={styles.topTextWrapper}>
          <span className={styles.curationHubText}>CURATION HUB</span>
          <span className={styles.productInventoryText}>Product Inventory</span>
        </div>
        <button className={`${styles.addProductButton}`}>
          <span className="material-symbols-outlined">add</span>ADD NEW PRODUCT
        </button>
      </div>
      <div>
        <h1>Product table will be here with pagination</h1>
      </div>
    </div>
  );
}
