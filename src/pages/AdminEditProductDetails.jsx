import { useState, useEffect, useRef } from "react";
import styles from "../styles/AdminEditProductDetails.module.css";
import toast from "react-hot-toast";

import Category from "../components/Category";
import {
  addNewCategoryService,
  getAllCategoriesService,
} from "../services/category.service";
import { addProductService } from "../services/product.service";

export default function AdminEditProductDetails() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const imagesDefaultState = [null, null, null, null];
  const [images, setImages] = useState(imagesDefaultState);
  const [categories, setCategories] = useState([]);

  const defaultPayloadState = {
    productTitle: "",
    category: "",
    sku: "",
    description: "",
    quantity: 0,
    price: "",
  };
  const [payload, setPayload] = useState(defaultPayloadState);

  const categoryInputRef = useRef(null);
  const categoryInputBoxRef = useRef(null);

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);

  //To handle category mouse click effect.
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

  //To get all the categories.
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    async function getCategories() {
      const categoriesList = await getAllCategoriesService({ token });
      setCategories(categoriesList?.data?.data);
    }
    getCategories();
  }, []);

  // console.log(categories);

  function handleSelection(event) {
    const { name, value } = event.target;
    setSelectedCategory(value);
    setPayload((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
      if (!newCategory) {
        return toast.error("Category can not be empty");
      }
      const token = localStorage.getItem("accessToken");
      const response = await addNewCategoryService({ newCategory, token });
      toast.success(response.data.message);
      setShowNewCategoryInput(false);
      const catWithNewlyAddedCat = [
        response?.data?.data,
        ...(categories || []),
      ];
      setCategories(catWithNewlyAddedCat);
      setNewCategory("");
      setSelectedCategory(
        response?.data?.data?.name || "Please select category",
      );
      setPayload((prev) => {
        return {
          ...prev,
          category: response?.data?.data?._id,
        };
      });
      return;
    } catch (e) {
      toast.error(
        e.message || "Something went wrong while adding new category",
      );
    }
  }

  function handleImageCardClick(ref) {
    // console.log("Upload image card clicked");
    ref.current.click();
  }

  // console.log(images);

  function handleImageSelection(index, event) {
    // console.log(index);
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

  // console.log("Payload -> ", payload);

  function handlePayload(event) {
    const { name, value } = event.target;
    setPayload((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSaveProduct() {
    try {
      const response = await addProductService({ payload, images });
      if (response) {
        setImages(imagesDefaultState);
        setPayload(defaultPayloadState);
        return toast.success(response.data.message);
      }
    } catch (e) {
      return toast.error(e.message || "Something went wrong");
    }
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
            value={payload.productTitle}
            onChange={handlePayload}
          />
          <div className={styles.categoryAndSkuWrapper}>
            <div className={styles.categoryWrapper}>
              <label htmlFor="category">CATEGORY</label>
              <select
                name="category"
                id="category"
                className={styles.selectCategoryTag}
                onChange={handleSelection}
                value={payload.category}
              >
                <option value="select">Select Category</option>
                {categories?.length &&
                  categories.map((cat) => {
                    return (
                      <Category
                        key={cat._id}
                        value={cat._id}
                        label={cat.name}
                      />
                    );
                  })}
                <option value="other"> + Add a new category</option>
                {categories.length && (
                  <option value="delete"> - Delete categories</option>
                )}
              </select>
              {showNewCategoryInput && (
                <div
                  ref={categoryInputRef}
                  className={styles.addCategoryWrapper}
                >
                  <input
                    ref={categoryInputBoxRef}
                    type="text"
                    placeholder="Enter a new category"
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
                name="sku"
                placeholder="M-FRN-2026-001"
                className={styles.skuIdentifierInput}
                value={payload.sku}
                onChange={handlePayload}
              />
            </div>
          </div>
          <div className={styles.descriptionQuantityWrapper}>
            <div className={styles.detailedDescriptionWrapper}>
              <label htmlFor="detailedDescription">DETAILED DESCRIPTION</label>
              <textarea
                id="detailedDescription"
                placeholder="Enter the editorial narrative of the product..."
                className={styles.textAreaOfDetailedDescription}
                name="description"
                value={payload.description}
                onChange={handlePayload}
              ></textarea>
            </div>
            <div className={styles.quantityWrapperWithLabel}>
              <label htmlFor="quantity">QUANTITY</label>
              <div className={styles.quantityWrapper}>
                <input
                  type="number"
                  id="quantity"
                  placeholder="0"
                  min="0"
                  className={styles.quantityInput}
                  name="quantity"
                  value={payload.quantity}
                  onChange={handlePayload}
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
                  min="0"
                  className={styles.priceInput}
                  name="price"
                  value={payload.price}
                  onChange={handlePayload}
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
          <div
            className={styles.imageCard}
            onClick={() => handleImageCardClick(fileInputRef)}
          >
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
            <div
              className={`${styles.emptyImages}`}
              onClick={() => handleImageCardClick(fileInputRef2)}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef2}
                hidden
                className={styles.primaryImageInput}
                onChange={(event) => handleImageSelection(1, event)}
              />
              {!images[1] ? (
                <span className="material-symbols-outlined">add</span>
              ) : (
                <img
                  src={images[1]?.preview}
                  className={styles.secondaryImages}
                />
              )}
            </div>
            <div
              className={`${styles.emptyImages}`}
              onClick={() => handleImageCardClick(fileInputRef3)}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef3}
                hidden
                className={styles.primaryImageInput}
                onChange={(event) => handleImageSelection(2, event)}
              />
              {!images[2] ? (
                <span className="material-symbols-outlined">add</span>
              ) : (
                <img
                  src={images[2]?.preview}
                  className={styles.secondaryImages}
                />
              )}
            </div>
            <div
              className={`${styles.emptyImages}`}
              onClick={() => handleImageCardClick(fileInputRef4)}
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef4}
                hidden
                className={styles.primaryImageInput}
                onChange={(event) => handleImageSelection(3, event)}
              />
              {!images[3] ? (
                <span className="material-symbols-outlined">add</span>
              ) : (
                <img
                  src={images[3]?.preview}
                  className={styles.secondaryImages}
                />
              )}
            </div>
          </div>
          <hr className={styles.horizontalRulerInImageSection} />
          <button
            className={`${styles.buttonsInImageSection} ${styles.saveProductButton}`}
            onClick={handleSaveProduct}
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
