import styles from "../styles/Category.module.css";

import type { ShowCategory } from "../types/category.types.ts";

export default function Category(props: ShowCategory) {
  return (
    <div
      className={styles.singleCategoryWrapper}
      onClick={() => {
        props.selectCategory(props.label);
        props.handleCategoryList(false);
        props.setPayload((prev) => {
          return {
            ...prev,
            category: props._id,
          };
        });
      }}
    >
      <span>{props.label}</span>
      <span
        className={`material-symbols-outlined ${styles.deleteCategoryBin}`}
        onClick={(e) => {
          e.stopPropagation();
          props.showDeleteCategoryConfirmation(true);
          props.setCategoryToDelete(props._id);
        }}
      >
        delete
      </span>
    </div>
  );
}
