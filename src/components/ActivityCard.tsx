import styles from "../styles/ActivityCard.module.css";

import type { Activity } from "../types/activity.types.ts";

export default function ActivityCard(props: Activity) {
  const mutatedTime = new Date(props.timestamp).toLocaleString("en-IN", {
    hour12: false,
  });
  const date = mutatedTime.split(" ")[0] ?? "";
  const cleanedDate = date.endsWith(",") ? date.slice(0, -1) : date;
  const time = mutatedTime.split(" ")[1];
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.timestampWrapper}>
          <span className={styles.timestamp}>{time}</span>
          <span>{cleanedDate}</span>
        </div>
        <div className={styles.titleBodyWrapper}>
          <span className={styles.activityTitle}>{props.title}</span>
          <span className={styles.activityBody}>{props.body}</span>
        </div>
        <div className={`${styles.activityIconWrapper}`}>
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      </div>
      <span className={styles.horizontalRuler}></span>
    </div>
  );
}
