import styles from "../styles/AdminAddProductInventory.module.css";

import { products } from "../utils/dummyProducts";
import { ROUTES } from "../routes/routes";
import {
  useEditProductDetailsNavigation,
  useAddNewProductNavigation,
} from "../hooks/navigation";

export default function AdminAddProductInventory() {
  const goToEditProductDetail = useEditProductDetailsNavigation();
  const goToAddNewProductDetail = useAddNewProductNavigation();

  return (
    <div className={styles.container}>
      <div className={styles.textAndButtonWrapper}>
        <div className={styles.topTextWrapper}>
          <span className={styles.curationHubText}>CURATION HUB</span>
          <span className={styles.productInventoryText}>Product Inventory</span>
        </div>
        <button
          className={`${styles.addProductButton}`}
          onClick={goToAddNewProductDetail}
        >
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
                <td
                  className={
                    product.quantity > 5
                      ? styles.inStockWrapper
                      : styles.lowStockWrapper
                  }
                >
                  {product.stockStatus === "available" && product.quantity > 5
                    ? "IN STOCK"
                    : "LOW STOCK"}{" "}
                  ({product.quantity})
                </td>
                <td>
                  <div className={styles.actionWrapper}>
                    <div
                      className={styles.editActionWrapper}
                      onClick={goToEditProductDetail}
                    >
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
      <div className={styles.paginationWrapper}>
        <div className={styles.paginationInfo}>
          <span>SHOWING</span>
          <span>1</span>
          <span>-</span>
          <span>15</span>
          <span>OF</span>
          <span>124</span>
          <span>OBJECTS</span>
        </div>
        <div className={styles.paginationCounter}>
          <span
            className={`material-symbols-outlined ${styles.paginationSpan}`}
          >
            chevron_left
          </span>
          <span
            className={`${styles.paginationSpan} ${styles.highlightedPaginationSpan}`}
          >
            1
          </span>
          <span className={styles.paginationSpan}>2</span>
          <span className={styles.paginationSpan}>3</span>
          <span
            className={`material-symbols-outlined ${styles.paginationSpan}`}
          >
            chevron_right
          </span>
        </div>
      </div>
    </div>
  );
}
