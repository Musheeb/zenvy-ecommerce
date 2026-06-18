import styles from "../styles/AdminAddProductInventory.module.css";
import toast from "react-hot-toast";
import { ROUTES } from "../routes/routes";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import ProductInventoryItem from "../components/ProductInventoryItem";
import Loader from "../components/Loader";
// import { products } from "../utils/dummyProducts";
import {
  useEditProductDetailsNavigation,
  useAddNewProductNavigation,
} from "../hooks/navigation";
import {
  getProductsService,
  deleteProductService,
} from "../services/product.service";

export default function AdminAddProductInventory() {
  const goToEditProductDetail = useEditProductDetailsNavigation();
  const goToAddNewProductDetail = useAddNewProductNavigation();

  const { search } = useOutletContext();

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  // const [currentPage, setCurrentPage] = useState(Math.floor(skip / limit + 1));
  const currentPage = Math.floor(skip / limit) + 1;
  const [freezePageIncrement, setFreezePageIncrement] = useState(false);
  const [freezePageDecrement, setFreezePageDecrement] = useState(false);

  const totalPages = Math.ceil((totalProductCount || 0) / limit);

  const visiblePages = (() => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3];
    }

    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  })();

  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1,
  // );

  useEffect(() => {
    async function getProducts() {
      const response = await getProductsService({
        skip,
        limit,
        search,
      });
      setProducts(response?.data);
      setTotalProductCount(response?.total);
      setFreezePageDecrement(true);
    }
    getProducts();
  }, [totalProductCount, search]);

  async function handleProductDelete(productId) {
    setLoader(true);
    const response = await deleteProductService({ productId: productId });
    toast.success(response?.message);
    setLoader(false);
    return;
  }

  useEffect(() => {
    setFreezePageIncrement(currentPage >= totalPages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    setFreezePageDecrement(skip === 0);
  }, [currentPage, totalPages]);

  async function handlePageNoIncrement() {
    const docToSkip = skip + limit;
    const response = await getProductsService({
      skip: docToSkip,
      limit,
      search,
    });
    setProducts(response?.data);
    setTotalProductCount(response?.total);
    setSkip(docToSkip);
  }

  async function handlePageNoDecrement() {
    const docToSubtract = skip - limit;
    const response = await getProductsService({
      skip: docToSubtract,
      limit,
      search,
    });
    setProducts(response?.data);
    setTotalProductCount(response?.total);
    setSkip(docToSubtract);
  }

  return (
    <div className={styles.container}>
      {loader && <Loader />}
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
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <ProductInventoryItem
                    key={product._id}
                    _id={product._id}
                    productTitle={product.productTitle}
                    images={product.images}
                    sku={product.sku}
                    category={product.categoryName}
                    price={product.price}
                    quantity={product.quantity}
                    currency={product.currency}
                    goToEditProductDetail={goToEditProductDetail}
                    deleteProductService={handleProductDelete}
                    setTotalProductCount={setTotalProductCount}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>No inventory found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.paginationWrapper}>
        <div className={styles.paginationInfo}>
          <span>SHOWING</span>
          <span>1</span>
          <span>-</span>
          <span>10</span>
          <span>OF</span>
          <span>{totalProductCount}</span>
          <span>OBJECTS</span>
        </div>
        <div className={styles.paginationCounter}>
          <button
            className={`material-symbols-outlined ${styles.paginationSpan} ${styles.paginationButtons} ${freezePageDecrement && styles.freezeButton}`}
            onClick={handlePageNoDecrement}
          >
            <span>chevron_left</span>
          </button>
          {visiblePages.length &&
            visiblePages.map((page) => {
              return (
                <span
                  className={`${styles.paginationSpan} ${page === currentPage && styles.highlightedPaginationSpan}`}
                  key={page}
                >
                  {page}
                </span>
              );
            })}
          {/* <span
            className={`${styles.paginationSpan} ${styles.highlightedPaginationSpan}`}
          >
            1
          </span>
          <span className={styles.paginationSpan}>2</span>
          <span className={styles.paginationSpan}>3</span> */}
          <button
            className={`material-symbols-outlined ${styles.paginationSpan} ${styles.paginationButtons} ${freezePageIncrement && styles.freezeButton}`}
            onClick={handlePageNoIncrement}
          >
            <span>chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
