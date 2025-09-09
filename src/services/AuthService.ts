import type { AxiosResponse } from "axios";
import { apiInstance } from "../api/api.axios";
import Cookies from 'js-cookie';
import type { IAuthResponse } from "../type/type";

export const AuthService = {
  async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    const resp = await apiInstance.post<IAuthResponse>("/auth/sign-in", {
      email,
      password,
    });

    if (resp.data.access_token) {
      Cookies.set("access_token", resp.data.access_token, {
        expires: 1 / 24,
      });
    }

    if (resp.data.refresh_token) {
      Cookies.set("refresh_token", resp.data.refresh_token, {
        expires: 20 / 24,
      });
    }

    return resp;
  },

  async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    const resp = await apiInstance.post<IAuthResponse>("/auth/sign-up", {
      companyName: "PokemonClicker",
      userName: email,
      email,
      password,
    });

    if (resp.data.access_token) {
      Cookies.set("access_token", resp.data.access_token, {
        expires: 1 / 24,
      });
    }

    if (resp.data.refresh_token) {
      Cookies.set("refresh_token", resp.data.refresh_token, {
        expires: 20 / 24,
      });
    }

    return resp;
  },

  async refreshToken(): Promise<AxiosResponse<IAuthResponse>> {
    const resp = await apiInstance.get<IAuthResponse>("/auth/refresh");
    if (resp.data.access_token) {
      Cookies.set("access_token", resp.data.access_token, { expires: 1 / 24 });
    }
    return resp;
  },
};