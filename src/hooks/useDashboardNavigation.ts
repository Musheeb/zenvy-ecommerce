import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export function useDashboardNavigation() {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.ADMIN_DASHBOARD);
  };
}
