interface ImageItems {
  file: File;
  preview: string;
}

export interface AddProductPayload {
  payload: object;
  images: ImageItems[];
}

export interface GetProductsListPayload {
  skip: string;
  limit: string;
  search: string;
}

export interface DeleteProductPayload {
  productId: string;
}
