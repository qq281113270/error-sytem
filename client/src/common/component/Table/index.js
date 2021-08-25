/*
 * @Author: your name
 * @Date: 2021-08-23 19:39:29
 * @LastEditTime: 2021-08-23 19:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/common/component/Table/index.js
 */

import "./index.less";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import React, {
  Suspense,
  lazy,
  useState,
  useCallback,
  Children,
  PureComponent,
} from "react";
import { Layout, Table, Select } from "antd";

export default class extends PureComponent {
  getDataSource = () => {
    return [];
  };
  getColumns = () => {
    return [];
  };
  getTableProps = () => {
    return {};
  };
  async render() {
    return (
      <Table
        columns={this.getColumns()}
        dataSource={this.getDataSource()}
        bordered
        title={() => "Header"}
        footer={() => "Footer"}
        {...this.getTableProps()}
      />
    );
  }
}
