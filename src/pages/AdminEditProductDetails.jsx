import styles from "../styles/AdminEditProductDetails.module.css";

export default function AdminEditProductDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.topContentWrapper}>
        <div className={styles.topContentFirstLineWrapper}>
          <span className={styles.inventoryTextAndIconWrapper}>
            INVENTORY{" "}
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </span>
          <span className={styles.addNewItemText}>ADD NEW ITEM</span>
        </div>
        <h1 className={styles.heading}>Edit Product Detail</h1>
        <p className={styles.paragraph}>
          Manage product details, inventory status, pricing, and product media
          from one place.
        </p>
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.productDetailsWrapper}>
          <label htmlFor="productTitle">PRODUCT TITLE</label>
          <input
            type="text"
            id="productTitle"
            name="productTitle"
            placeholder="e.g. Cricket Bat (Oval Handle)"
            className={styles.productNameInput}
          />
          <div className={styles.categoryAndSkuWrapper}>
            <div className={styles.categoryWrapper}>
              <label htmlFor="category">CATEGORY</label>
              <select
                name="category"
                id="category"
                className={styles.selectCategoryTag}
              >
                <option value="select">Select Category</option>
                <option value="category1">cat 1</option>
                <option value="category2">cat 2</option>
                <option value="category3">cat 3</option>
                <option value="category4">cat 4</option>
                <option value="category5">cat 5</option>
              </select>
            </div>
            <div className={styles.skuIdentifierWrapper}>
              <label htmlFor="skuIdentifier">SKU IDENTIFIER</label>
              <input
                type="text"
                id="skuIdentifier"
                name="skuIdentifier"
                placeholder="M-FRN-2026-001"
                className={styles.skuIdentifierInput}
              />
            </div>
          </div>
          <div className={styles.detailedDescriptionWrapper}>
            <label htmlFor="detailedDescription">DETAILED DESCRIPTION</label>
            <textarea
              name="detailedDescription"
              id="detailedDescription"
              placeholder="Enter the editorial narrative of the product..."
              className={styles.textAreaOfDetailedDescription}
            ></textarea>
          </div>
          <div className={styles.priceAndCurrencyWrapper}>
            <div
              className={`${styles.standardPriceWrapper} ${styles.priceAndCurrencyCombined}`}
            >
              <label htmlFor="price">STANDARD PRICE</label>
              <span id="price" className={styles.price}>
                <span className={styles.dollarSign}>$</span> 0.00
              </span>
            </div>
            <div
              className={`${styles.currencyWrapper} ${styles.priceAndCurrencyCombined}`}
            >
              <label>CURRENCY</label>
              <span>USD - United States</span>
            </div>
          </div>
        </div>
        <div className={styles.productImagesAndActionWrapper}>
          <div className={styles.visualAssetText}>
            <span className={styles.visualAssetsText}>VISUAL ASSETS</span>
            <span className={styles.upto4ImagesText}>Up to 4 images</span>
          </div>
          <div className={styles.imageCard}>
            <img
              src="/batPic.png"
              alt="Dummy Image"
              className={styles.primaryImageCard}
            />
            <div className={styles.overlayWrapper}>
              <span
                className={`material-symbols-outlined ${styles.iconAndText} ${styles.primaryImageIcon}`}
              >
                add_photo_alternate
              </span>
              <span
                className={`${styles.iconAndText} ${styles.primaryImageUploadText}`}
              >
                UPLOAD PRIMARY ASSET
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
