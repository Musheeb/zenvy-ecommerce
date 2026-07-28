export interface AddCategoryPayload {
  newCategory: string;
  token: string;
}

export interface DeleteCategoryPayload {
  categoryId: string;
}
