import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}
