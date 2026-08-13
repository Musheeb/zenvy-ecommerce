import { useNavigate } from "react-router-dom";

import { ROUTES } from "../routes/routes";

export const useInventoryNavigation = () => {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.ADMIN_INVENTORY);
  };
};

export const useEditProductDetailsNavigation = () => {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.ADMIN_EDIT_PRODUCT);
  };
};

export const useAddNewProductNavigation = () => {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.ADMIN_EDIT_PRODUCT);
  };
};
