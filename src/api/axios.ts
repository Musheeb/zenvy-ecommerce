import axios from "axios";
import toast from "react-hot-toast";
import { ROUTES } from "../routes/routes";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      toast.error("Session expired. Please log in again.");
      setTimeout(() => {
        window.location.href = ROUTES.LOGIN;
      }, 2000);
    }
    return Promise.reject(error);
  },
);

export default api;
