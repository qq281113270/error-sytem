/*
 * @Author: your name
 * @Date: 2020-11-11 11:21:09
 * @LastEditTime: 2021-08-20 19:02:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/common/component/CheckPermission/index.js
 */
import React, { Children } from "react";
import { CheckDataType } from "@/utils";
// 检查函数
const checkAuth = (key) => {
  return key ? true : false;
};

// 检查组件
const CheckAuth = (props) => {
  const { authKey, children } = props;
  {
    authKey
      ? Children.map(children, (child, index) => {
          return <> {child}</>;
        })
      : null;
  }
};

const checkPageAuth = (parameter) => {
    let flag = true;
//   const { key } = parameter;
//   CheckDataType.isString()

  if(CheckDataType.isString(parameter)){
    flag=parameter?true:false;
  }


  return (C) => {
     return flag?<C></C>:''
  };
};

checkPageAuth("ss")(<C></C>);
