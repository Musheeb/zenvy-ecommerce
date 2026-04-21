import styles from "../styles/EntryPoint.module.css";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function EntryPoint() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
