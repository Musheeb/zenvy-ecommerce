import styles from "../styles/AdminHeader.module.css";

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/routes";

import { useUnderConstructionNavigation } from "../hooks/useUnderConstructionNavigation";
import { useDashboardNavigation } from "../hooks/useDashboardNavigation";

export default function AdminHeader(props) {
  const location = useLocation();
  const path = location.pathname;
  const goToUnderConstruction = useUnderConstructionNavigation();
  const goToDashboard = useDashboardNavigation();

  return (
    <div className={styles.container}>
      <div className={styles.flexStartPortion}>
        <span
          className={styles.zenvy}
          onClick={() => {
            goToDashboard();
          }}
        >
          ZENVY
        </span>
        <ul className={styles.optionList}>
          <Link
            to={ROUTES.ADMIN_DASHBOARD}
            className={
              path === ROUTES.ADMIN_DASHBOARD
                ? `${styles.links} ${styles.selectedLink}`
                : `${styles.links}`
            }
          >
            Dashboard
          </Link>
          <Link className={`${styles.links}`} to={ROUTES.UNDER_CONSTRUCTION}>
            Collections
          </Link>
          <Link className={`${styles.links}`} to={ROUTES.UNDER_CONSTRUCTION}>
            Activity
          </Link>
        </ul>
      </div>
      <div className={styles.flexEndPortion}>
        {path === ROUTES.ADMIN_INVENTORY && (
          <div className={styles.inventorySearchBarWrapper}>
            <span
              className={`material-symbols-outlined ${styles.magnifyingGlass}`}
            >
              search
            </span>
            <input
              type="text"
              placeholder="Search Inventory"
              className={styles.inventorySearchBox}
              value={props.searchQueryState}
              onChange={(e) => {
                const { value } = e.target;
                props.handleSearchQuery(value);
              }}
            />
          </div>
        )}
        <span
          className={`material-symbols-outlined ${styles.icons}`}
          onClick={goToUnderConstruction}
        >
          notifications
        </span>
        <span
          className={`material-symbols-outlined ${styles.icons}`}
          onClick={goToUnderConstruction}
        >
          settings
        </span>
        <span
          className={`material-symbols-outlined ${styles.icons}`}
          onClick={goToUnderConstruction}
        >
          account_circle
        </span>
      </div>
    </div>
  );
}
