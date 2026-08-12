import type { MouseEvent, Dispatch, SetStateAction } from "react";

interface ImageItems {
  file: File;
  preview: string;
}

export interface AddProductPayload {
  payload: object;
  images: ImageItems[];
}

export interface GetProductsListPayload {
  skip: string | number;
  limit: string | number;
  search: string | undefined | null;
}

export interface DeleteProductPayload {
  productId: string;
}

export interface SelectedImage {
  file: File;
  preview: string;
}

export interface AddProductParams {
  search: string | null | undefined;
}

export interface Images {
  isPrimary: boolean;
  url: string;
  publicId: string;
  _id: string;
}

export interface Product {
  _id: string;
  productTitle: string;
  images: Images[];
  sku: number;
  categoryName: string;
  price: number;
  quantity: number;
  currency: string;
  goToEditProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  deleteProductService: (productId: string) => void;
  setTotalProductCount: Dispatch<SetStateAction<number>>;
}
