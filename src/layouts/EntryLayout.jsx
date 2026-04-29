import styles from "../styles/EntryPoint.module.css";

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function EntryPoint() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.layout}>
      {path === "/register" && (
        <div>
          <Header />
        </div>
      )}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
