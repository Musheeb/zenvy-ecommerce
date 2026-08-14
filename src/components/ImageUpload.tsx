import styles from "../styles/AdminEditProductDetails.module.css";

export default function ImageUpload(props: any) {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={props.fileInputRef}
        hidden
        className={styles.primaryImageInput}
        onChange={(event) => props.handleImageSelection(0, event)}
      />
    </div>
  );
}
