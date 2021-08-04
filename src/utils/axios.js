import axios from "axios";

import { BASE_URL } from "../constants/api";
import { store } from "../store/store";

export const cleverAxios = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  cleverAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

cleverAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch({ type: "LOGOUT" });
    }
    return Promise.reject(error);
  }
);
