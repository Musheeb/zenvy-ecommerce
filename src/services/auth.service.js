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
        message: "Something went wrong while registering user",
      }
    );
  }
};

export const loginUserService = async ({ email, password }) => {
  try {
    const { data } = await api.post("/login", {
      email,
      password,
    });
    return data;
  } catch (e) {
    console.log(
      "error occured while logging user account. Error: ",
      e?.response?.data,
    );
    throw e?.response?.data || "Something went wrong while logging in user";
  }
};

export const forgotPasswordService = async (email) => {
  try {
    const { data } = await api.post("/forgot-password", {
      email,
    });
    return data;
  } catch (e) {
    console.log(
      "error occured while forgetting password. Error: ",
      e?.response?.data,
    );
    throw e?.response?.data || "Something went wrong while forgetting password";
  }
};
