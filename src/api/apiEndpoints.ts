const API_ROUTES = {
  auth: {
    register: "/register",
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: (token: string) => `/reset-password/${token}`,
  },
  category: {
    addCategory: "/add-category",
    getCategories: "/get-categories",
    deleteCategory: (categoryId: string) => `/delete-category/${categoryId}`,
  },
  product: {
    addProduct: "/add-product",
    getProducts: (skip: string, limit: string, search: string) =>
      `/get-products-list/?skip=${skip || 0}&limit=${limit || 10}&search=${search}`,
    deleteProduct: (productId: string) => `/delete-product/${productId}`,
  },
};

export default API_ROUTES;
