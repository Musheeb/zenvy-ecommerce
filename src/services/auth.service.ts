import api from "../api/axios";
import API_ROUTES from "../api/apiEndpoints";

import type {
  RegisterUserPayload,
  LoginUserPayload,
} from "../types/auth.types";
import { isAxiosError } from "axios";

export const registerUserService = async ({
  username,
  password,
  email,
}: RegisterUserPayload) => {
  try {
    const { data } = await api.post(API_ROUTES.auth.register, {
      username,
      password,
      email,
    });
    return data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error ", e?.message);
    } else {
      console.log(
        "error occured while registering user. Error: ",
        e?.response?.data,
      );
    }
    throw (
      e?.response?.data || {
        message: "Something went wrong while registering user",
      }
    );
  }
};

export const loginUserService = async ({
  email,
  password,
}: LoginUserPayload) => {
  try {
    const { data } = await api.post(API_ROUTES.auth.login, {
      email,
      password,
    });
    return data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error occured while logging user account. Error: ",
        e?.response?.data,
      );
    }
    throw e?.response?.data || "Something went wrong while logging in user";
  }
};

export const forgotPasswordService = async (email: string) => {
  try {
    const { data } = await api.post(API_ROUTES.auth.forgotPassword, {
      email,
    });
    return data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error occured while forgetting password. Error: ",
        e?.response?.data,
      );
    }
    throw e?.response?.data || "Something went wrong while forgetting password";
  }
};

export const resetPasswordService = async (
  token: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    const { data } = await api.post(API_ROUTES.auth.resetPassword(token), {
      password,
      confirmPassword,
    });
    return data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.log("Axios Error: ", e.message);
    } else {
      console.log(
        "error occured while resetting password. Error: ",
        e?.response?.data,
      );
    }
    throw e?.response?.data || "Somethign went wrong while resetting password";
  }
};
