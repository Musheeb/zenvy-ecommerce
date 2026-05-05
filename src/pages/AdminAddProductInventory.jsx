import styles from "../styles/AdminAddProductInventory.module.css";

import { products } from "../utils/dummyProducts";

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
      <div className={styles.tableWrapper}>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>STOCK STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.productName}
                    className={styles.productImage}
                  />
                </td>
                <td>
                  <div className={styles.productNameWrapper}>
                    <span className={styles.productName}>
                      {product.productName}
                    </span>
                    <span className={styles.productSku}>
                      {product.skuNumber}
                    </span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{`${product.currency}${product.price}`}</td>
                <td>
                  {product.stockStatus === "available"
                    ? "IN STOCK"
                    : "LOW STOCK"}
                </td>
                <td>
                  <div className={styles.actionWrapper}>
                    <div className={styles.editActionWrapper}>
                      <span
                        className={`material-symbols-outlined ${styles.actionIcons}`}
                      >
                        edit
                      </span>
                      <span className={`${styles.actionText}`}>EDIT</span>
                    </div>
                    <div className={styles.deleteActionWrapper}>
                      <span
                        className={`material-symbols-outlined ${styles.actionIcons}`}
                      >
                        delete
                      </span>
                      <span className={`${styles.actionText}`}>DELETE</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
