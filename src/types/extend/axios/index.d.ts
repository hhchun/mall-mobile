declare function settle(
  resolve: Function,
  reject: Function,
  response: any
): any;

declare function buildURL(
  url?: string,
  params: any,
  options: ?(ParamsSerializerOptions | CustomParamsSerializer)
): string;

declare function buildFullPath(baseURL?: string, requestedURL?: string): string;

export { settle, buildURL, buildFullPath };
