namespace UniNamespace {
  interface GeneralCallbackResult {
    data: any;
    statusCode: number;
    errMsg: string;
    header: any;
    cookies: Array<any>;
  }
}
