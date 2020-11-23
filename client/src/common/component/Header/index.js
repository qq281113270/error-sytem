import React, { memo, useCallback, forwardRef, useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
// import "./index.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routePaths, historyPush, getHistory, pathComponent } from "@/router";
import { Layout, Menu, Select } from "antd";
const { Option } = Select;
const { Header, Sider, Content } = Layout;
export default memo(
  forwardRef((props, ref) => {
    const { collapsed, onChangeCollapsed=()=>{} } = props;

    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: onChangeCollapsed,
        }
      )}
    </Header>
    );
  })
);
