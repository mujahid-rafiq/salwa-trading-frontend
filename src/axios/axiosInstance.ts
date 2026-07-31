import axios, { type AxiosRequestConfig, type AxiosInstance } from "axios";

const requestHandler = (request: any) => {
  const token = localStorage.getItem("accessToken");

  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  if (request.data instanceof FormData) {
    delete request.headers["Content-Type"];
  }

  return request;
};

const successResponseHandler = (response: any) => {
  return response;
};

const errorResponseHandler = async (error: any) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest?._retry) {
    originalRequest._retry = true;
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

export const getAxiosInstance = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const instance = axios.create({
    baseURL:
      import.meta.env.VITE_REACT_APP_BASE_API_URL ||
      import.meta.env.VITE_REACT_APP_LIVE_SERVER_URL ||
      "http://localhost:3000",
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...(config.headers ?? {}),
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(successResponseHandler, errorResponseHandler);

  return instance;
};
