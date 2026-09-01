import styles from "../styles/AdminDashboard.module.css";

import { useState, useEffect } from "react";

import { useUnderConstructionNavigation } from "../hooks/useUnderConstructionNavigation";
import { useAddNewProductNavigation } from "../hooks/navigation";
import { getDashboardStats } from "../services/admin.service";

import ActivityCard from "../components/ActivityCard";

import type { DashboardData } from "../types/admin.types";

const activityData = [
  {
    id: 1,
    title: "New Order #90124 placed by Elias Thorne",
    body: "Industrial concrete lamp, Obsidian vase (2x)",
    createdAt: "2026-04-28T14:20:24.001Z",
    icon: `paid`,
  },
  {
    id: 2,
    title: "Stock Replenishment",
    body: "Archival paper print 'Solitude' +50 Units",
    createdAt: "2026-04-28T12:54:29.064Z",
    icon: `assignment_turned_in`,
  },
  {
    id: 3,
    title: "Customer Inquiry",
    body: "Subject: Shipping to Switzeland - Sarah Tahoe",
    createdAt: "2026-04-28T08:12:56.457Z",
    icon: `mail`,
  },
];

export default function AdminDashboard() {
  const goToUnderConstruction = useUnderConstructionNavigation();
  const goToAddNewProductDetail = useAddNewProductNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dashboardStatistic, setDashboardStatistic] =
    useState<DashboardData | null>(null);
  const currentTime = new Date();
  useEffect(() => {
    async function getDashBoardStatistics() {
      try {
        setIsLoading(true);
        const dashboardData = await getDashboardStats();
        setDashboardStatistic(dashboardData);
      } catch (e: unknown) {
        console.log("Failed to fetch dashboard statistics", e);
      } finally {
        setIsLoading(false);
      }
    }
    getDashBoardStatistics();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.dashboardTopContent}>
        <div className={styles.dashboardTextWrapper}>
          <span className={styles.dashboardSystemOverviewText}>
            SYSTEM OVERVIEW
          </span>
          <h1 className={styles.dashboardHeading}>Curated Dashboard</h1>
        </div>
        <span className={styles.dashboardLastSync}>
          Last synced: {currentTime.toLocaleString()}
        </span>
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
            <span className={`${styles.cardStats}`}>
              {isLoading ? "⏳" : dashboardStatistic?.inventoryItemsCount}
            </span>
            <span>SKUs</span>
          </div>
          <div className={styles.cardInventoryStockWrapper}>
            <span
              className={`${styles.inventoryCardOptions}`}
              onClick={goToUnderConstruction}
            >
              {isLoading
                ? "⏳"
                : `${dashboardStatistic?.lowStockCount} LOW STOCK`}
            </span>
            <span
              className={`${styles.inventoryCardOptions} ${styles.newArrivalInInventoryCard}`}
              onClick={goToUnderConstruction}
            >
              {isLoading
                ? "⏳"
                : `${dashboardStatistic?.newArrivalsCount} NEW ARRIVALS`}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.dashboardBottomContent}>
        <div className={styles.recentActivityWrapper}>
          <div className={styles.activityTextAndLogNavigation}>
            <span className={styles.activitySectionRecentActivity}>
              Recent Activity
            </span>
            <span
              className={styles.activitySectionViewAllLogs}
              onClick={goToUnderConstruction}
            >
              VIEW ALL LOGS
            </span>
          </div>
          <div className={styles.activityList}>
            {activityData.length ? (
              activityData.map((activity) => {
                return (
                  <ActivityCard
                    key={activity.id}
                    id={activity.id}
                    timestamp={activity.createdAt}
                    title={activity.title}
                    body={activity.body}
                    icon={activity.icon || "mail"}
                  />
                );
              })
            ) : (
              <h1>No data found</h1>
            )}
          </div>
        </div>
        <div className={styles.quickActionActivity}>
          <span className={styles.quickActionText}>Quick Actions</span>
          <button
            className={`${styles.quickActionButtons} ${styles.addNewProductButton}`}
            onClick={goToAddNewProductDetail}
          >
            ADD NEW PRODUCT{" "}
            <span className="material-symbols-outlined">start</span>
          </button>
          <button
            className={`${styles.quickActionButtons} ${styles.generateReportButton}`}
            onClick={goToUnderConstruction}
          >
            GENERATE MONTHLY REPORT{" "}
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
