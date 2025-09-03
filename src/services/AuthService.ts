// import type { AxiosResponse } from "axios";
// import type { AuthResponse } from "../models/response/AuthResponse.moduls";
import { apiInstance } from "../api/api.axios";

// export default class AuthService {
//     static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
//         return apiInstance.post<AuthResponse>('/auth/sign-in', {email, password})
//     }

//     static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
//         return apiInstance.post<AuthResponse>('/auth/sign-up', {email, password})
//     }
// }

export const AuthService = {
  login(email: string, password: string) {
    return apiInstance.post("/auth/sing-up", { email, password });
  },

    registration(email: string, password: string) {
    return apiInstance.post("/auth/sing-in", { email, password });
    },

  refreshToken() {
    return apiInstance.get("/auth/refresh");
  }
};