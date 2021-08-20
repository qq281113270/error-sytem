/*
 * @Author: your name
 * @Date: 2020-11-12 16:14:07
 * @LastEditTime: 2021-08-20 20:08:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/pages/Home/pages/Index/index.js
 */
import React, { createElement, Component } from "react";
import "@/common/css/base.less";
import "./index.less";
import { Form, Input, Button, Checkbox } from "antd";
import { routePaths, historyPush, getHistory, pathComponent } from "@/router";
import { CheckDataType } from "@/utils";
import Store, { mapRedux } from "@/redux";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return <div>主页123</div>;
};

const OntAuth = () => {
  return <div>无权限访问</div>;
};
const CheckPageAuth = (key) => {
  let flag = true;
  return (C) => {
    class Auth extends Component {
      render() {
        console.log("this.props Auth=", this.props);
        if (CheckDataType.isFunction(key)) {
          key = key(this.props);
        }
        if (CheckDataType.isString(key) || CheckDataType.isBoolean(key)) {
          flag = key ? true : false;
        } else if (CheckDataType.isBoolean(key)) {
          flag = key ? true : false;
        } else if (CheckDataType.isNumber(key)) {
          flag = key ? true : false;
        } else if (CheckDataType.isArray(key)) {
          flag = key.some((item) => {
            return [1, 2, 3, 4, 5].includes(item);
          });
        } else {
          console.error("key数据类型不正确");
        }

        return flag ? <C {...this.props}></C> : <OntAuth {...this.props} />;
      }
    }

    return mapRedux("user")(Auth);
  };
};
export default CheckPageAuth([4])(Index);
