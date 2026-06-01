import axios from "axios";
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
      window.location.href = ROUTES.LOGIN;
    }
    return Promise.reject(error);
  },
);

export default api;
