export interface AddCategoryPayload {
  newCategory: string;
  token: string;
}

export interface GetCategroyPayload {
  token: string;
}

export interface DeleteCategoryPayload {
  categoryId: string;
}

export interface CategoryValidate {
  addedBy: string;
  createdAt: Date;
  isActive: boolean;
  name: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}