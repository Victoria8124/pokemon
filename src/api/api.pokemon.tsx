import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL_POKEMON = import.meta.env.VITE_API_URL_POKEMON

export const pokeApi = axios.create({
    withCredentials: false,
    baseURL: API_URL_POKEMON
})

pokeApi.interceptors.request.use((config) => {
      const token = Cookies.get("access_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
})