import styles from "../styles/Category.module.css";

export default function Category(props) {
  return (
    <div
      className={styles.singleCategoryWrapper}
      onClick={() => {
        props.selectCategory(props.label);
        props.handleCategoryList();
        props.setPayload((prev) => {
          return {
            ...prev,
            category: props._id,
          };
        });
      }}
    >
      <span value={props.value}>{props.label}</span>
      <span
        className={`material-symbols-outlined ${styles.deleteCategoryBin}`}
        onClick={(e) => {
          e.stopPropagation();
          props.showDeleteCategoryConfirmation(true);
        }}
      >
        delete
      </span>
    </div>
  );
}
