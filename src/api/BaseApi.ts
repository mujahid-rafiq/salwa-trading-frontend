/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-fallthrough */
import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export default class BaseApi {
  private mergeRequestConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    if (!config) config = {};
    if (!config.baseURL) {
      config.baseURL = import.meta.env.VITE_REACT_APP_LIVE_SERVER_URL || "http://localhost:3000";
    }

    if (!config.headers) {
      config.headers = {};
    }

    const persistedData = localStorage.getItem("persist:root");
    if (persistedData) {
      try {
        const parsedData = JSON.parse(persistedData);
        const userState = JSON.parse(parsedData.user || "{}");
        if (userState.access_token) {
          const headers = config.headers as Record<string, string | undefined>;
          headers.Authorization = `Bearer ${userState.access_token}`;
          config.headers = headers;
        }
      } catch (error) {
        // Silently handle auth parsing errors
      }
    }

    return config;
  }

  async post(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    return axios.post(url, body, config);
  }

  async get(url: string, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    return axios.get(url, config);
  }

  async patch(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    return axios.patch(url, body, config);
  }

  async put(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    return axios.put(url, body, config);
  }

  async delete(url: string, body?: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    if (body) {
      config.data = body;
    }
    return axios.delete(url, config);
  }

  buildUrl(url: string, params?: any): string {
    return `${url}${this.buildQueryString(params)}`;
  }

  private buildQueryString(params: any): string {
    let qs = "";
    const separator = "&";

    if (params) {
      qs = Object.entries(params)
        .filter(([_, value]) => value != null)
        .map(([key, value]) => {
          if (typeof value === "undefined") {
            return "";
          }

          if (value instanceof Date) {
            value = value.toISOString();
          } else if (Array.isArray(value)) {
            return value
              .map((v) => `${key}[]=${encodeURIComponent(String(v))}`)
              .join(separator);
          } else if (typeof value === "object") {
            throw new Error("Object is unsupported by this parser");
          }

          return `${key}=${encodeURIComponent(String(value))}`;
        })
        .filter(Boolean)
        .join(separator);
    }

    return qs ? `?${qs}` : qs;
  }
}
