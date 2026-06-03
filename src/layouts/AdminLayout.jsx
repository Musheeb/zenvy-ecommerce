import styles from "../styles/Admin.module.css";
import AdminHeader from "../components/AdminHeader";
import SideBar from "../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";

import { useState } from "react";

import { ROUTES } from "../routes/routes";

export default function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;

  const DEFAULT_OPTIONS = {
    //Navbar options.
    dashboard: false,
    collections: false,
    activity: false,
    //Sidebard options.
    inventory: false,
    orders: false,
    customers: false,
    analytics: false,
    support: false,
    logout: false, //Not gonna use it.
  };
  const [selectedOption, setSelectedOption] = useState({
    ...DEFAULT_OPTIONS,
    dashboard: path === ROUTES.ADMIN_DASHBOARD,
  });

  function handleSelectedOption(targetedOption) {
    setSelectedOption((prev) => {
      return {
        ...DEFAULT_OPTIONS,
        ...targetedOption,
      };
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <AdminHeader
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
      <div className={styles.mainContentContainer}>
        <div className={styles.sidebarWrapper}>
          <SideBar
            selectedOption={selectedOption}
            handleSelectedOption={handleSelectedOption}
          />
        </div>
        <div className={styles.mainContentWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
