import styles from "../styles/AdminAddProductInventory.module.css";

import type { Product } from "../types/product.types.ts";

export default function ProductInventoryItem(props: Product) {
  return (
    <>
      <tr key={props._id}>
        <td>
          <img
            src={props.images[0]?.url ?? "/ZenvyLogoSober1.png"}
            alt={props.productTitle}
            className={styles.productImage}
          />
        </td>
        <td>
          <div className={styles.productNameWrapper}>
            <span className={styles.productName}>{props.productTitle}</span>
            <span className={styles.productSku}>{props.sku}</span>
          </div>
        </td>
        <td>{props.categoryName}</td>
        <td>{`${props.currency === "USD" ? "$" : "INR - "}${props.price}`}</td>
        <td
          className={
            props.quantity > 5 ? styles.inStockWrapper : styles.lowStockWrapper
          }
        >
          {props.quantity > 5 ? "IN STOCK" : "LOW STOCK"} ({props.quantity})
        </td>
        <td>
          <div className={styles.actionWrapper}>
            <div
              className={styles.editActionWrapper}
              onClick={props.goToEditProductDetail}
            >
              <span
                className={`material-symbols-outlined ${styles.actionIcons}`}
              >
                edit
              </span>
              <span className={`${styles.actionText}`}>EDIT</span>
            </div>
            <div
              className={styles.deleteActionWrapper}
              onClick={() => {
                props.deleteProductService(props._id);
                props.setTotalProductCount((prev) => prev - 1);
              }}
            >
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
    </>
  );
}
