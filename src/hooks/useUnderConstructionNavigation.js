import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export function useUnderConstructionNavigation() {
  const navigate = useNavigate();
  return () => {
    navigate(ROUTES.UNDER_CONSTRUCTION);
  };
}
