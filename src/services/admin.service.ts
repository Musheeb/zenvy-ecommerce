import api from "../api/axios";
import { ROUTES } from "../routes/routes";
import { isAxiosError } from "axios";

import type { DashboardData } from "../types/admin.types";

export const getDashboardStats = async (): Promise<DashboardData> => {
  try {
    const dashboardData = await api.get(ROUTES.DASHBOARD_STATISTICS, {
      headers: {},
    });
    return dashboardData.data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
      throw (
        e.response?.data ||
        "something went wrong while fetching the dashboard statistics"
      );
    } else {
      throw "Something went wrong while fetching the dashboard statistics";
    }
  }
};
