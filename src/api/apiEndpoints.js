const API_ROUTES = {
  auth: {
    register: "/register",
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: (token) => `/reset-password/${token}`,
  },
  category: {
    addCategory: "/add-category",
  },
};

export default API_ROUTES;
