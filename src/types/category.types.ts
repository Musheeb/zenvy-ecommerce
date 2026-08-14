import type { Dispatch, SetStateAction } from "react";
import type { DefaultProduct } from "./product.types.ts";

export interface AddCategoryPayload {
  newCategory: string;
  token: string;
}

export interface GetCategroyPayload {
  token: string;
}

export interface DeleteCategoryPayload {
  categoryId: string;
}

export interface CategoryValidate {
  addedBy: string;
  createdAt: Date;
  isActive: boolean;
  name: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface ShowCategory {
  key: string;
  _id: string;
  value: string;
  label: string;
  selectCategory: Dispatch<SetStateAction<string>>;
  showDeleteCategoryConfirmation: Dispatch<SetStateAction<boolean>>;
  handleCategoryList: Dispatch<SetStateAction<boolean>>;
  setPayload: Dispatch<SetStateAction<DefaultProduct>>;
  setCategoryToDelete: Dispatch<SetStateAction<string>>;
}
