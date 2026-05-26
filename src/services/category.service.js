import api from "../api/axios";

export const addNewCategoryService = async ({ newCategory, token }) => {
  try {
    const response = await api.post(
      "/add-category",
      {
        name: newCategory,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (e) {
    console.log(
      "error occured while adding a new category. Error: ",
      e?.resonse?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding a new category",
      }
    );
  }
};
