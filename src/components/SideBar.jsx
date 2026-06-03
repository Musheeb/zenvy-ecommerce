import styles from "../styles/AdminSidebar.module.css";

import { useNavigate } from "react-router-dom";
import { useUnderConstructionNavigation } from "../hooks/useUnderConstructionNavigation";
import { useDashboardNavigation } from "../hooks/useDashboardNavigation";
import { useInventoryNavigation } from "../hooks/navigation";

export default function SideBar(props) {
  const goToUnderConstruction = useUnderConstructionNavigation();
  const goToDashboard = useDashboardNavigation();
  const goToInventory = useInventoryNavigation();
  const navigate = useNavigate();
  const selectedOption = props.selectedOption;

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
        <div
          className={
            selectedOption.dashboard
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToDashboard();
            props.handleSelectedOption({ dashboard: true });
          }}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>DASHBOARD</span>
        </div>
        <div
          className={
            selectedOption.inventory
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToInventory();
            props.handleSelectedOption({ inventory: true });
          }}
        >
          <span className="material-symbols-outlined">inventory</span>
          <span>INVENTORY</span>
        </div>
        <div
          className={
            selectedOption.orders
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToUnderConstruction();
            props.handleSelectedOption({ orders: true });
          }}
        >
          <span className="material-symbols-outlined">orders</span>
          <span>ORDERS</span>
        </div>
        <div
          className={
            selectedOption.customers
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToUnderConstruction();
            props.handleSelectedOption({ customers: true });
          }}
        >
          <span className="material-symbols-outlined">groups</span>
          <span>CUSTOMERS</span>
        </div>
        <div
          className={
            selectedOption.analytics
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToUnderConstruction();
            props.handleSelectedOption({ analytics: true });
          }}
        >
          <span className="material-symbols-outlined">analytics</span>
          <span>ANALYTICS</span>
        </div>
      </div>
      <div className={styles.sidebarBottomOptions}>
        <div
          className={
            selectedOption.support
              ? `${styles.sidebarOptions} ${styles.selectedSideBarOption}`
              : `${styles.sidebarOptions}`
          }
          onClick={() => {
            goToUnderConstruction();
            props.handleSelectedOption({ support: true });
          }}
        >
          <span className="material-symbols-outlined">help</span>
          <span>SUPPORT</span>
        </div>
        <div className={styles.sidebarOptions} onClick={handleLogout}>
          <span className="material-symbols-outlined">logout</span>
          <span>LOGOUT</span>
        </div>
      </div>
    </div>
  );
}
