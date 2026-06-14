import { toast } from "react-hot-toast";
import api from "../api/axios";
import API_ROUTES from "../api/apiEndpoints";

export const addProductService = async ({ payload, images }) => {
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
  } catch (e) {
    console.log(
      "error occured while adding new product. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding a new product",
      }
    );
  }
};

export const getProductsService = async ({ skip, limit, search }) => {
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
      },
    );
    return response?.data;
  } catch (e) {
    console.log(
      "error while fetching the products list. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding fetching products",
      }
    );
  }
};
