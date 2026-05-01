import styles from "../styles/AdminDashboard.module.css";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <AdminHeader />
      </div>
      <div className={styles.mainContentContainer}>
        <div className={styles.sidebarWrapper}>
          <SideBar />
        </div>
        <div className={styles.mainContentWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
