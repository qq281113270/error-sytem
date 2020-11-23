import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./index.less";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { Suspense, lazy, useState, useCallback } from "react";
import { routePaths, historyPush, getHistory, pathComponent } from "@/router";
import { Layout, Menu, Select } from "antd";
import Sider from "@/common/component/Sider";
import Header from "@/common/component/Header";
// Header

const { Option } = Select;
const Index = lazy(() => import("@/pages/Home/pages/Index"));
const { Content } = Layout;

export default class extends React.Component {
  state = {
    collapsed: false,
    selectedKeys: ["1"],
  };

  getChildrenComponent = () => {
    return pathComponent.find((item) => item.name == "home")?.children || [];
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { selectedKeys, collapsed } = this.state;
    return (
      <Layout className="root-layout">
        <Sider collapsed={collapsed} />
        <Layout className="site-layout">
          <Header
            collapsed={collapsed}
            onChangeCollapsed={() => {
              this.toggle();
            }}
          ></Header>
          <Router
            basename=""
            forceRefresh={false}
            history={getHistory}
            getUserConfirmation={() => {
              console.log("getUserConfirmation=");
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  // minHeight: 280,
                }}
              >
                <Switch>
                  {this.getChildrenComponent().map((item, index) => {
                    return (
                      <Route
                        key={index}
                        exact
                        nam={item.name}
                        path={item.path}
                        component={item.component}
                      />
                    );
                  })}
                  {/* <Route from="/*">404</Route> */}
                  <Redirect exact from="/*" to="/index" />
                  {/* <Redirect exact from="/" to="/index" />   */}
                </Switch>
              </Content>
            </Suspense>
          </Router>
        </Layout>
      </Layout>
    );
  }
}
