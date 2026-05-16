import api from "../api/axios";

export const registerUserService = async ({ username, password, email }) => {
  try {
    const { data } = await api.post("/register", {
      username,
      password,
      email,
    });
    return data;
  } catch (e) {
    console.log(
      "error occured while registering user. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while registering user!",
      }
    );
  }
};
