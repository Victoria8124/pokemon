import { makeAutoObservable } from "mobx";
import {AuthService} from "../services/AuthService";
import Cookies from 'js-cookie';

class AuthStore {
  isAuth = false;
  isAuthInProgress = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async login({ email, password }: { email: string; password: string }) {
    this.isAuthInProgress = true;
    try {
      await AuthService.login(email, password);
      this.isAuth = true;
    } catch (error) {
      this.isAuth = false;
       throw error;
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async registration({ email, password }: { email: string; password: string }) {
    this.isAuthInProgress = true;
    try {
      await AuthService.registration(email, password);
      this.isAuth = true;
    } catch (error) {
      this.isAuth = false;
      console.log("registration error", error);
      throw error;
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async checkAuth() {
    this.isAuthInProgress = true;
    try {
      const refreshToken = Cookies.get("refresh_token");
      if (refreshToken) {
        const resp = await AuthService.refreshToken();
        if (resp.data.access_token) {
          Cookies.set("access_token", resp.data.access_token, {
            expires: 1 / 24,
          });
          this.isAuth = true;
        }
      } else {
        this.isAuth = false;
      }
    } catch (error) {
      this.isAuth = false;
      console.log("checkAuth error", error);
    } finally {
      this.isAuthInProgress = false;
    }
  }
}

export default new AuthStore();