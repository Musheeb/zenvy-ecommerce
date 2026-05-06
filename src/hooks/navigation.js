import { useNavigate } from "react-router-dom";

import { ROUTES } from "../routes/routes";

export const useInventoryNavigation = () => {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.ADMIN_INVENTORY);
  };
};
