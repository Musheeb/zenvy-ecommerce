import { createBrowserRouter } from "react-router-dom";

import EntryPoint from "../layouts/EntryLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UserHome from "../pages/UserHome";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPoint />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
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
    path: "*",
    element: <PageNotFound />,
  },
]);
