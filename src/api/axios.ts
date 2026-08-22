import axios from "axios";
import toast from "react-hot-toast";
import { ROUTES } from "../routes/routes";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        //make the API call here to get a new access token.
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/${ROUTES.AUTH_REFRESH}`,
          {},
          {
            withCredentials: true,
          },
        );
        localStorage.setItem("accessToken", data.accessToken);
        // return the original api here.
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        toast.error("Session expired. Please log in again.");
        setTimeout(() => {
          window.location.href = ROUTES.LOGIN;
        }, 2000);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
