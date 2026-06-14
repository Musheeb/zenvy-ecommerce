const API_ROUTES = {
  auth: {
    register: "/register",
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: (token) => `/reset-password/${token}`,
  },
  category: {
    addCategory: "/add-category",
    getCategories: "/get-categories",
    deleteCategory: (categoryId) => `/delete-category/${categoryId}`,
  },
  product: {
    addProduct: "/add-product",
    getProducts: (skip, limit, search) =>
      `/get-products-list/?skip=${skip || 0}&limit=${limit || 10}&search=${search}`,
  },
};

export default API_ROUTES;
