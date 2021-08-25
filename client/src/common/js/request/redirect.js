/*
 * @Author: your name
 * @Date: 2021-08-12 14:33:50
 * @LastEditTime: 2021-08-23 16:07:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/common/js/request/redirect.js
 */
import { routePaths, historyPush, getHistory } from "@/router";
export const codeMap = {
  // 没有权限跳转到登录页面
  401: (errorInfo) => {
    historyPush({
      url: routePaths.logLn,
    });
  },
  415: (errorInfo) => {
    // historyPush({
    //   url: routePaths.logLn,
    // });
  },
};
