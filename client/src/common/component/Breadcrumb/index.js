import React, { memo, useCallback, forwardRef, useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routePaths, historyPush, getHistory, pathComponent } from "@/router";
import { Layout, Menu, Select, Dropdown, Avatar, Breadcrumb } from "antd";
import "./index.less";

const { Option } = Select;
const { Header, Sider, Content } = Layout;
const { Item } = Breadcrumb;
export default memo(
  forwardRef((props, ref) => {
    const {
      collapsed,
      onChangeCollapsed = () => {},
      avatar = "",
      nickname = "",
      areaCode = "",
      mobile = "",
      onClick = () => {},
    } = props;

    const data = [
      {
        label: "菜单1",
        url: "xxxxxx",
        path: "xxxx",
      },
      {
        label: "菜单2",
        url: "xxxxxx",
        path: "xxxx",
        component: "",
      },
    ];

    return (
      <Breadcrumb>
        {data.map((item) => {
          const { label, url, path, component } = item;
          return (
            <Item >
              {component ? component : null}
              {label ? label : null}
            </Item>
          );
        })}
        <Item>Home</Item>
        <Item>
          <a href="">Application Center</a>
        </Item>
        <Item>
          <a href="">Application List</a>
        </Item>
        <Item>An Application</Item>
      </Breadcrumb>
    );
  })
);
