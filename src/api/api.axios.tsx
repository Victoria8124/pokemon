import axios from 'axios';
import Cookies from 'js-cookie'
import { AuthService} from '../services/AuthService';
import { setTokens } from '../features/auth/authSlice';
import { store } from '../app/store';
import { logOut } from '../features/auth/authSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const response = await AuthService.refreshToken();
        store.dispatch(setTokens(response.access_token));

        originalRequest.headers.Authorization = `Bearer ${response.access_token}`;
        return apiInstance(originalRequest);
      } catch (err) {
        store.dispatch(logOut());
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);