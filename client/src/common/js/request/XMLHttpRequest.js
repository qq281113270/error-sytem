import { CheckDataType } from "@/utils/CheckDataType";

class XHR {
  constructor(options) {
    // const { method = 'POST', url = '' } = options;
    // this.defaultConfig={
    //     timeout:3000,
    // }
    // this.options ={
    //     ...this.defaultConfig,
    //     ...options,
    // }
  }
  // init() {
  //     this.createXHR();
  //     this.setTimeout();
  //     this.setWithCredentials();
  //     this.open();
  //     this.setRequestHeader();
  //     this.send();
  // }
  ininData(options) {
    this.defaultConfig = {
      timeout: 300000,
    };
    this.options = {
      ...this.defaultConfig,
      ...options,
    };
    return this;
  }
  queryStringify(data) {
    const keys = Object.keys(data);
    let formStr = "";
    if (keys.length === 0) {
      return formStr;
    }
    keys.forEach((key) => {
      if (data[key] === undefined || data[key] === null) {
        return;
      }
      formStr += `&${key}=${
        CheckDataType.isObject(data[key])
          ? JSON.stringify(data[key])
          : data[key]
      }`;
    });
    return formStr.substr(1);
  }
  xhRequest(options) {
    this.ininData(options);
    this.createXHR();
    this.setTimeout();
    this.setWithCredentials();
    this.setXhrAttr();
    this.open();
    this.setRequestHeader();
    this.change();
    this.send();
    return this;
  }
  uploadFile() {
    const { data = {} } = this.options;
    let formData = new FormData();
    const keys = Object.keys(data);
    keys.forEach((key) => {
      formData.append(key, data[key]);
    });

    this.createXHR();
    this.setTimeout();
    this.setWithCredentials();
    this.setXhrAttr();
    this.open();
    this.setRequestHeader();
    try {
      this.xmlHttp.onprogress = this.updateProgress;
    } catch (e) {
      try {
        this.xmlHttp.upload.onprogress = this.updateProgress;
      } catch (e) {
        console.log("浏览器不支持上传进度条监控！");
      }
    }
    this.change();
    this.send(formData);
    return this;
  }
  updateProgress(event) {
    const { updateProgress = () => {} } = this.options;
    if (event.lengthComputable) {
      let percentComplete = event.loaded / event.total;
      updateProgress(percentComplete, event);
    }
  }
  // 创建XHR
  createXHR() {
    let xmlHttp = null;
    let errorMessage = [];
    if (window.XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        xmlHttp = new window.ActiveXObject("MSXML2.xmlHttp");
      } catch (e) {
        errorMessage.push(e);
        try {
          xmlHttp = new window.ActiveXObject("Microsoft.xmlHttp");
        } catch (e2) {
          errorMessage.push(e2);
          console.error(...errorMessage, "浏览器不支持xhr请求");
          xmlHttp = null;
        }
      }
    }
    this.xmlHttp = xmlHttp;
  }
  // 设置 xhr属性
  setXhrAttr() {
    const { xhrAttr = {} } = this.options;
    const keys = Object.keys(xhrAttr);
    keys.forEach((key) => {
      this.xmlHttp[key] = xhrAttr[key];
    });
  }
  // xhr 打开
  //发送数据
  open() {
    const { url = "", method = "POST", async = true, data = {} } = this.options;
    this.xmlHttp.open(
      method,
      method == "GET" ? url + "?" + this.queryStringify(data) : url,
      async
    );
  }
  // 设置请求头
  setRequestHeader(defaultHeaders = {}) {
    let { headers = {} } = this.options;
    headers = {
      ...defaultHeaders,
      ...headers,
    };
    console.log("headers=", headers);

    const keys = Object.keys(headers);
    keys.forEach((key) => {
      this.xmlHttp.setRequestHeader(key, headers[key]);
    });
  }
  // 设置跨域复杂请求cookie
  setWithCredentials() {
    const { withCredentials = false } = this.options;
    this.xmlHttp.withCredentials = withCredentials;
  }
  // 设置请求过期时间
  setTimeout() {
    const { timeout = null } = this.options;
    if (timeout) {
      this.xmlHttp.timeout = timeout;
      console.log('timeout=',timeout)
      this.onTimeout();
    }
  }
  // 过期时间相应
  onTimeout() {
    const { error = () => {}, complete = () => {} } = this.options;
    this.xmlHttp.ontimeout = function (event) {
      console.error("http请求超时！");
      complete(event);
      error();
    };
  }
  // 监听请求状态
  change() {
    this.xmlHttp.onreadystatechange = this.stateChange.bind(this);
  }
  // 监听请求状态
  stateChange() {
    const {
      success = () => {},
      error = () => {},
      dataType = "json",
      complete = () => {},
    } = this.options;
    // console.log("this.xmlHttp.readyState=", this.xmlHttp.readyState);
    // console.log('this.xmlHttp.status==',this.xmlHttp.status)
    if (this.xmlHttp.readyState == 4) {
      if (this.xmlHttp.status == 200) {
        complete(
          dataType == "json"
            ? JSON.parse(this.xmlHttp.responseText)
            : this.xmlHttp.responseText,
          this.xmlHttp
        );
        success(
          dataType == "json"
            ? JSON.parse(this.xmlHttp.responseText)
            : this.xmlHttp.responseText,
          this.xmlHttp
        );
      } else {
          console.error('http 请求异常');
          complete(this.xmlHttp.status, this.xmlHttp);
          error(this.xmlHttp.status, this.xmlHttp);
      }
    } else {
      // complete(this.xmlHttp.status, this.xmlHttp);
      // error(this.xmlHttp.status, this.xmlHttp);
    }
  }
  // 停止请求
  abort() {
    this.xmlHttp.abort();
  }
  // 发送数据
  send() {
    let { data = {}, method, dataType = "json" } = this.options;
    if (!(data instanceof FormData)) {
      data =
        dataType == "json"
          ? JSON.stringify(data)
          : this.queryStringify(data); //this.queryStringify(data)
    }
    // const keys = Object.keys(data);
    // const formData = new FormData();
    // keys.forEach((key) => {
    //     formData.append(key, data[key]);
    // });
    // this.xmlHttp.responseType = 'json';
    if (method == "POST") {
      this.xmlHttp.send(data);
    } else {
      this.xmlHttp.send();
    }
    // data?this.xmlHttp.send(data):this.xmlHttp.send();
  }
}

export default XHR;
