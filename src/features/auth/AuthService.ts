import { apiInstance } from "../../shared/api/api.axios";
import type { IAuthResponse, IUser } from "../../entities/auth/model/authTypes";

export const AuthService = {
  async login({ email, password }: IUser): Promise<IAuthResponse> {
    const resp = await apiInstance.post<IAuthResponse>("/auth/sign-in", {
      email,
      password,
    });
    return resp.data;
  },

  async registration({ email, password }: IUser): Promise<IAuthResponse> {
    const resp = await apiInstance.post<IAuthResponse>("/auth/sign-up", {
      email,
      password,
      userName: email,
      companyName: "PokemonClicker",
    });
    return resp.data;
  },

  async refreshToken(): Promise<IAuthResponse> {
    const resp = await apiInstance.get<IAuthResponse>("/auth/refresh");
    return resp.data;
  },
};
