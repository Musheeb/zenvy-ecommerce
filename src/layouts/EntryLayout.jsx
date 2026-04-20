import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function EntryPoint() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
