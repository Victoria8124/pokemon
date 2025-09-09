import axios from 'axios';
import Cookies from 'js-cookie'
import { AuthService} from '../services/AuthService';

const API_URL = "https://cafe-admin-api-production.up.railway.app";

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if(token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = { ...error.config };
    originalRequest._isRetry = true;
if (error.response?.status === 401 && !error.config._isRetry) {
  originalRequest._isRetry = true;
  try {
    const resp = await AuthService.refreshToken();
    Cookies.set("access_token", resp.data.access_token, { expires: 1 / 24 });
    return apiInstance.request(originalRequest);
  } catch {
    console.log("НЕ АВТОРИЗОВАН");
  }
}
    return Promise.reject(error);
  }
);
