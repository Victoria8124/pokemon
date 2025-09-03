// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     },
// })

// export default store;
import { makeAutoObservable } from "mobx";
import {AuthService} from "../services/AuthService";

class AuthStore {
  isAuth = false;
  isAuthInProgress = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async login({ email, password }: { email: string; password: string }) {
    this.isAuthInProgress = true;
    try {
      const resp = await AuthService.login(email, password);
      localStorage.setItem("token", resp.data.accessToken);
      this.isAuth = true;
    } catch (error) {
      console.log("login error:", error);
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async registration({ email, password }: { email: string; password: string }) {
    this.isAuthInProgress = true;
    try {
      const resp = await AuthService.registration(email, password);
      localStorage.setItem("token", resp.data.accessToken);
      this.isAuth = true;
    } catch (error) {
      console.log("login error", error);
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async checkAuth() {
    this.isAuthInProgress = true;
    try {
      const resp = await AuthService.refreshToken();
      localStorage.setItem("token", resp.data.accessToken);
      this.isAuth = true;
    } catch (error) {
      console.log("login error", error);
    } finally {
      this.isAuthInProgress = false;
    }
  }
}

export default new AuthStore();