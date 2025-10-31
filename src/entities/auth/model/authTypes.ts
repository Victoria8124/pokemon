export interface IUser {
  email: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
}

export interface AuthState {
  access_token: string | null;
}
