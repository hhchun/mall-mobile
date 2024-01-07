import axios from "axios";
import adapter from "./adapter";

import type { AxiosHeaders, Method, RawAxiosRequestHeaders } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const timeout = 10000;

const instance = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  adapter: adapter,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => {
    return error;
  }
);
interface ResponseBody<D = any> {
  code: number;
  message: string;
  data?: D;
}

interface RequestConfig<D = any> {
  url: string;
  method?: Method;
  data?: D;
  params?: any;
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
}

function request<D = any>(config: RequestConfig) {
  return instance<ResponseBody<D>>(config);
}

export default request;

export { instance, baseURL, timeout };

export type { ResponseBody, RequestConfig };
