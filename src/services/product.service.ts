import { toast } from "react-hot-toast";
import api from "../api/axios";
import API_ROUTES from "../api/apiEndpoints";

import { isAxiosError } from "axios";
import type {
  AddProductPayload,
  GetProductsListPayload,
  DeleteProductPayload,
} from "../types/product.types.ts";

export const addProductService = async ({
  payload,
  images,
}: AddProductPayload) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Session expired. Please log in again");
    }
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    images.filter(Boolean).forEach((image) => {
      formData.append("images", image.file);
    });
    const response = await api.post(API_ROUTES.product.addProduct, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error occured while adding new product. Error: ",
        e?.response?.data,
      );
    }
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding a new product",
      }
    );
  }
};

export const getProductsService = async ({
  skip,
  limit,
  search,
}: GetProductsListPayload) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Session expired. Please log in again");
    }
    const response = await api.get(
      API_ROUTES.product.getProducts(skip, limit, search),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
    return response?.data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error while fetching the products list. Error: ",
        e?.response?.data,
      );
    }
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding fetching products",
      }
    );
  }
};

export const deleteProductService = async ({
  productId,
}: DeleteProductPayload) => {
  try {
    console.log("delete product service method called!");
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Session expired. Please log in again");
    }
    const response = await api.delete(
      API_ROUTES.product.deleteProduct(productId),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response?.data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error occured while deleting the product. Error: ",
        e?.response?.data,
      );
    }
    throw (
      e?.response?.data || {
        message: "Something went wrong while deleting the product",
      }
    );
  }
};
