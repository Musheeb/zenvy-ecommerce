import { useState, useEffect, useRef } from "react";
import styles from "../styles/AdminEditProductDetails.module.css";
import toast from "react-hot-toast";

import { addNewCategoryService } from "../services/category.service";

export default function AdminEditProductDetails() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [images, setImages] = useState([null, null, null, null]);

  const categoryInputRef = useRef(null);
  const categoryInputBoxRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryInputRef.current &&
        !categoryInputRef.current.contains(event.target)
      ) {
        setShowNewCategoryInput(false);
        setNewCategory("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelection(event) {
    const { value } = event.target;
    setSelectedCategory(value);
    if (value === "other") {
      setShowNewCategoryInput(true);
    } else {
      setShowNewCategoryInput(false);
    }
  }

  useEffect(() => {
    if (showNewCategoryInput) {
      categoryInputBoxRef.current?.focus();
    }
  }, [showNewCategoryInput]);

  async function handleSaveCategory() {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await addNewCategoryService({ newCategory, token });
      toast.success(response.data.message);
      setShowNewCategoryInput(false);
      return;
    } catch (e) {
      toast.error(
        e.message || "Something went wrong while adding new category",
      );
    }
  }

  function handleImageCardClick() {
    fileInputRef.current.click();
  }

  // console.log(images);

  function handleImageSelection(index, event) {
    // const file = Array.from(event.target.files[0]);
    const file = event.target.files[0];
    if (!file) return;

    const updatedImages = [...images];

    updatedImages[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImages(updatedImages);
  }

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
            placeholder="Cricket Bat (Oval Handle - Maximum Length)"
            className={styles.productNameInput}
          />
          <div className={styles.categoryAndSkuWrapper}>
            <div className={styles.categoryWrapper}>
              <label htmlFor="category">CATEGORY</label>
              <select
                name="category"
                id="category"
                className={styles.selectCategoryTag}
                onChange={handleSelection}
              >
                <option value="select">Select Category</option>
                <option value="category1">cat 1</option>
                <option value="category2">cat 2</option>
                <option value="category3">cat 3</option>
                <option value="category4">cat 4</option>
                <option value="category5">cat 5</option>
                <option value="other">+ Add a new category</option>
              </select>
              {showNewCategoryInput && (
                <div
                  ref={categoryInputRef}
                  className={styles.addCategoryWrapper}
                >
                  <input
                    ref={categoryInputBoxRef}
                    type="text"
                    placeholder="Enter new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className={styles.newCategoryInput}
                  />
                  <button
                    type="button"
                    onClick={handleSaveCategory}
                    className={styles.saveCategoryButton}
                  >
                    Save
                  </button>
                </div>
              )}
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
          <div className={styles.descriptionQuantityWrapper}>
            <div className={styles.detailedDescriptionWrapper}>
              <label htmlFor="detailedDescription">DETAILED DESCRIPTION</label>
              <textarea
                name="detailedDescription"
                id="detailedDescription"
                placeholder="Enter the editorial narrative of the product..."
                className={styles.textAreaOfDetailedDescription}
              ></textarea>
            </div>
            <div className={styles.quantityWrapperWithLabel}>
              <label htmlFor="quantity">QUANTITY</label>
              <div className={styles.quantityWrapper}>
                <input
                  type="number"
                  id="quantity"
                  placeholder="0"
                  className={styles.quantityInput}
                  name="quantity"
                />
              </div>
            </div>
          </div>
          <div className={styles.priceAndCurrencyWrapper}>
            <div
              className={`${styles.standardPriceWrapper} ${styles.priceAndCurrencyCombined}`}
            >
              <label htmlFor="price">STANDARD PRICE</label>
              <span id="price" className={styles.price}>
                <span className={styles.dollarSign}>$</span>{" "}
                <input
                  type="number"
                  placeholder="0.00"
                  className={styles.priceInput}
                />
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
          <div className={styles.imageCard} onClick={handleImageCardClick}>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              hidden
              className={styles.primaryImageInput}
              onChange={(event) => handleImageSelection(0, event)}
            />
            <img
              // src="/batPic.png"
              src={images[0] ? images[0]?.preview : "/batPic.png"}
              alt="Dummy Image"
              className={styles.primaryImageCard}
            />
            {!images[0] && (
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
            )}
          </div>
          <div className={styles.imageOptions}>
            <div className={`${styles.emptyImages}`}>
              <span className="material-symbols-outlined">add</span>
            </div>
            <div className={`${styles.emptyImages}`}>
              <span className="material-symbols-outlined">add</span>
            </div>
            <div className={`${styles.emptyImages}`}>
              <span className="material-symbols-outlined">add</span>
            </div>
          </div>
          <hr className={styles.horizontalRulerInImageSection} />
          <button
            className={`${styles.buttonsInImageSection} ${styles.saveProductButton}`}
          >
            SAVE PRODUCT
          </button>
          <button
            className={`${styles.buttonsInImageSection} ${styles.cancelButton}`}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
