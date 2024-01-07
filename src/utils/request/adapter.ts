import { buildURL, buildFullPath, settle } from "@/types/extend/axios";
import { AxiosHeaders, type AxiosAdapter, type AxiosResponse } from "axios";

const adapter: AxiosAdapter = function (config) {
  return new Promise((resolve, reject) => {
    const method = config.method?.toUpperCase() as
      | "OPTIONS"
      | "GET"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "TRACE"
      | "CONNECT";
    const fullPath = buildFullPath(config.baseURL, config.url);
    const url = buildURL(fullPath, config.params, config.paramsSerializer);
    const header = AxiosHeaders.from({ ...config.headers })
      .normalize(true)
      .toJSON();

    uni.request({
      method: method,
      url: url,
      header: header,
      data: config.data,
      responseType: config.responseType,
      complete: (result) => {
        const response: AxiosResponse = {
          status: result.statusCode,
          config: config,
          statusText: result.errMsg,
          headers: result.header,
          data: result.data,
        };
        settle(resolve, reject, response);
      },
    });
  });
};

export default adapter;
