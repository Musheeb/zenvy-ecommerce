import styles from "../styles/AdminSidebar.module.css";

import { useNavigate } from "react-router-dom";
import { useUnderConstructionNavigation } from "../hooks/useUnderConstructionNavigation";

export default function SideBar() {
  const goToUnderConstruction = useUnderConstructionNavigation();
  const navigate = useNavigate();
  function handleLogout() {
    //todo - add a pop up here to ask user to logout. (Logout cofirmation)
    navigate("/login");
  }
  return (
    <div className={styles.container}>
      <div className={styles.sidebarHeading}>
        <h3 className={styles.headingInSidebar}>ARCHIVE</h3>
        <span className={styles.textInSidebar}>MANAGEMENT SUITE</span>
      </div>
      <div className={styles.sidebarMiddleOptions}>
        <div className={styles.sidebarOptions}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>DASHBOARD</span>
        </div>
        <div className={styles.sidebarOptions} onClick={goToUnderConstruction}>
          <span className="material-symbols-outlined">inventory</span>
          <span>INVENTORY</span>
        </div>
        <div className={styles.sidebarOptions} onClick={goToUnderConstruction}>
          <span className="material-symbols-outlined">orders</span>
          <span>ORDERS</span>
        </div>
        <div className={styles.sidebarOptions} onClick={goToUnderConstruction}>
          <span className="material-symbols-outlined">groups</span>
          <span>CUSTOMERS</span>
        </div>
        <div className={styles.sidebarOptions} onClick={goToUnderConstruction}>
          <span className="material-symbols-outlined">analytics</span>
          <span>ANALYTICS</span>
        </div>
      </div>
      <div className={styles.sidebarBottomOptions}>
        <div className={styles.sidebarOptions} onClick={goToUnderConstruction}>
          <span className="material-symbols-outlined">help</span>
          <span>SUPPORT</span>
        </div>
        <div className={styles.sidebarOptions}>
          <span className="material-symbols-outlined">logout</span>
          <span onClick={handleLogout}>LOGOUT</span>
        </div>
      </div>
    </div>
  );
}
