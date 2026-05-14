import api from "../api/axios";

export const registerUserService = async ({ username, password, email }) => {
  const response = await api.post("/register", {
    username,
    password,
    email,
  });
  return response.data;
};
