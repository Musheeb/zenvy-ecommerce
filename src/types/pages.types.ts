import type { MouseEvent } from "react";

export interface DefaultRoutes {
  dashboard: boolean;
  collections: boolean;
  activity: boolean;
  inventory: boolean;
  orders: boolean;
  customers: boolean;
  analytics: boolean;
  support: boolean;
  logout: boolean;
}

export interface SideBarProps {
  selectedOption: DefaultRoutes;
  handleSelectedOption: (event: Partial<DefaultRoutes>) => object;
}
