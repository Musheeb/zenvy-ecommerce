import api from "../api/axios";
import API_ROUTES from "../api/apiEndpoints";

import type { isAxiosError } from "axios";
import type {
  AddCategoryPayload,
  DeleteCategoryPayload,
} from "../types/category.types.ts";

export const addNewCategoryService = async ({
  newCategory,
  token,
}: AddCategoryPayload) => {
  try {
    const response = await api.post(
      API_ROUTES.category.addCategory,
      {
        name: newCategory,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (e: any) {
    console.log(
      "error occured while adding a new category. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding a new category",
      }
    );
  }
};

export const getAllCategoriesService = async ({
  token,
}: AddCategoryPayload) => {
  try {
    const response = await api.get(API_ROUTES.category.getCategories, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (e: any) {
    console.log(
      "error occured while fetching current user's categories. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while fetching categories list",
      }
    );
  }
};

export const deleteCategory = async ({ categoryId }: DeleteCategoryPayload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await api.delete(
      API_ROUTES.category.deleteCategory(categoryId),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (e: any) {
    console.log(
      "error occured while deleting the category. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while deleting the category",
      }
    );
  }
};
