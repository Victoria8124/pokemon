import axios from 'axios';

const API_URL = "https://cafe-admin-api-production.up.railway.app";

export const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

apiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = { ...error.config };
    originalRequest._isRetry = true;
    if (error.response.status === 401 && error.config && !error.config) {
      try {
        const resp = await axios.get(`${API_URL}/auth/refresh`);
        localStorage.setItem("token", resp.data.accessToken);
        return apiInstance.request(originalRequest);
      } catch {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);
