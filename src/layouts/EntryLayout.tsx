import styles from "../styles/EntryPoint.module.css";

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ROUTES } from "../routes/routes";

export default function EntryPoint() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={styles.layout}>
      {path === ROUTES.REGISTER && (
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
