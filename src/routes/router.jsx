import { createBrowserRouter } from "react-router-dom";

import EntryPoint from "../layouts/EntryLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import AdminDashboard from "../pages/AdminDashboard";
import AdminAddProductInventory from "../pages/AdminAddProductInventory";
import AdminEditProductDetails from "../pages/AdminEditProductDetails";

import UserHome from "../pages/UserHome";
import PageNotFound from "../pages/PageNotFound";
import UnderConstruction from "../pages/UnderConstruction";

import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPoint />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "inventory",
        element: <AdminAddProductInventory />,
      },
      {
        path: "edit-product-details",
        element: <AdminEditProductDetails />,
      },
    ],
  },
  {
    path: "/user-home",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
    ],
  },
  {
    path: "/under-construction",
    element: <UnderConstruction />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
