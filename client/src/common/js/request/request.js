import XMLHttpRequest from "./XMLHttpRequest";
import baseUrl from "./baseUrl";

export default class Request {
  static baseUrl = baseUrl;
  static requestQueue = [];
  static defaultHeader = {
    "content-type": "application/x-www-form-urlencoded",
    // 'Content-Type': 'application/json;charset=utf-8',
  };
  // 去除 // 地址
  static transformUrl(url) {
    const urlHpptReg = /^(http\:\/\/)|^(https\:\/\/)/gi;
    const urlReg = /(\/\/)+/gi;
    return (
      url.match(urlHpptReg)[0] +
      url.replace(urlHpptReg, "").replace(urlReg, "/")
    );
  }
  static guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  static setLoad(options) {
    const { isLoad = true, url, requestId = "", parameter } = options;
    if (isLoad) {
      this.requestQueue.push({
        requestId,
        url,
        isLoad,
        parameter,
      });
      // 开始加载数据
      // Taro.showLoading({
      //     title: '加载中',
      // });
    }
  }
  static post(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "POST",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static get(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "GET",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static put(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "PUT",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static delete(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "DELETE",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static trace(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "TRACE",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static connect(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "CONNECT",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static options(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "OPTIONS",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }
  static head(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "HEAD",
      ...options,
    };
    this.setLoad({
      ...data,
    });
    return this.request(data);
  }

  static request(data) {
    let {
      url = "",
      method,
      parameter = {},
      headers = {},
      requestId = this.guid(),
      success = () => {},
      error = () => {},
      isPromise = true,
    } = data;
    url = this.transformUrl(this.baseUrl + url);

    return isPromise
      ? new Promise((resolve, reject) => {
          new XMLHttpRequest().xhRequest({
            url,
            method,
            data: parameter,
            headers: {
              ...this.defaultHeader,
              ...headers,
              requestId,
            },
            success: (...ags) => {
              success(...ags);
              resolve(...ags);
            },
            error: (...ags) => {
              error(...ags);
              reject(ags);
            },
          });
        })
      : new XMLHttpRequest().xhRequest({
          url,
          method,
          data: parameter,
          headers: {
            ...this.defaultHeader,
            ...headers,
            requestId,
          },
          success: (...ags) => {
            success(...ags);
          },
          error: (...ags) => {
            error(...ags);
          },
        });
  }
  static uploadFile(url, parameter, options) {
    const data = {
      url,
      parameter,
      method: "POST",
      ...options,
    };

    let {
      headers = {},
      requestId = this.guid(),
      isPromise = true,
      success = () => {},
      error = () => {},
      method,
      // url,
    } = data;
    url = this.transformUrl(this.baseUrl + url);
    const keys = Object.keys(parameter);
    const formData = new FormData();
    keys.forEach((key) => {
      formData.append(key, parameter[key]);
    });
    this.setLoad({
      ...data,
    });
    return isPromise
      ? new Promise((resolve, reject) => {
          new XMLHttpRequest().xhRequest({
            url,
            method,
            data: formData,
            headers: {
              ...headers,
              requestId,
            },
            success: (...ags) => {
              success(...ags);
              resolve(...ags);
            },
            error: (...ags) => {
              error(...ags);
              reject(ags);
            },
          });
        })
      : new XMLHttpRequest().xhRequest({
          url,
          method,
          data: formData,
          headers: {
            ...headers,
            requestId,
          },
          success: (...ags) => {
            success(...ags);
          },
          error: (...ags) => {
            error(...ags);
          },
        });
  }
}
