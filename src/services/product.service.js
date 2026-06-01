export const addProductService = async ({ payload, images }) => {
  try {
  } catch (e) {
    console.log(
      "error occured while adding new product. Error: ",
      e?.response?.data,
    );
    throw (
      e?.response?.data || {
        message: "Something went wrong while adding a new product",
      }
    );
  }
};
