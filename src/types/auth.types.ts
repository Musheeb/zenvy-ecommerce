export interface RegisterUserPayload {
  username: string;
  password: string;
  email: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}
