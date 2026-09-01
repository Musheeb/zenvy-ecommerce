import type { Dispatch, SetStateAction } from "react";
import type { DefaultRoutes } from "./pages.types.ts";

export interface AdminHeader {
  selectedOption: DefaultRoutes;
  handleSelectedOption: Dispatch<SetStateAction<object>>;
  searchQueryState: string;
  handleSearchQuery: Dispatch<SetStateAction<string>>;
}

export interface DashboardData {
  lowStockCount: number;
  newArrivalsCount: number;
  inventoryItemsCount: number;
}
