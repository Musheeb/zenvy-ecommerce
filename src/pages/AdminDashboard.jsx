import styles from "../styles/AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.dashboardTopContent}>
        <div className={styles.dashboardTextWrapper}>
          <span className={styles.dashboardSystemOverviewText}>
            SYSTEM OVERVIEW
          </span>
          <h1 className={styles.dashboardHeading}>Curated Dashboard</h1>
        </div>
        <span className={styles.dashboardLastSync}>Last updated</span>
      </div>
      <div className={styles.dashboardMiddleContent}>
        <div className={`${styles.dashboardCards} ${styles.cardTotalSales}`}>
          <span className={`${styles.cardTopTexts}`}>TOTAL SALES (MTD)</span>
          <div className={styles.cardStatWrapper}>
            <span className={`${styles.cardStats}`}>$142,890</span>
            <span>+12%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressBarFilled}></div>
          </div>
        </div>
        <div className={`${styles.dashboardCards} ${styles.cardActiveOrders}`}>
          <span className={`${styles.cardTopTexts}`}>ACTIVE ORDERS</span>
          <div className={styles.cardStatWrapper}>
            <span className={`${styles.cardStats}`}>1,042</span>
            <span>pending</span>
          </div>
          <span></span>
        </div>
        <div
          className={`${styles.dashboardCards} ${styles.cardInventoryItems}`}
        >
          <span className={`${styles.cardTopTexts}`}>INVENTORY ITEMS</span>
          <div className={styles.cardStatWrapper}>
            <span className={`${styles.cardStats}`}>3,204</span>
            <span>SKUs</span>
          </div>
          <div className={styles.cardInventoryStockWrapper}>
            <span>42 LOW STOCK</span>
            <span>12 NEW ARRIVALS</span>
          </div>
        </div>
      </div>
      <div className={styles.dashboardBottomContent}>
        <div className={styles.recentActivityWrapper}>
          <div className={styles.activityTextAndNavigation}></div>
          <div className={styles.activityList}></div>
        </div>
        <div className={styles.quickActionActivity}>
          <span>Quick Actions</span>
          <button>ADD NEW PRODUCT</button>
          <button>GENERATE MONTHLY REPORT</button>
        </div>
      </div>
    </div>
  );
}
