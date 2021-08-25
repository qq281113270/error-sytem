import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import "./index.less";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import React, {
  Suspense,
  lazy,
  useState,
  useCallback,
  Children,
  useEffect,
  memo,
} from "react";
import {
  routePaths,
  historyPush,
  getHistory,
  history,
  pathComponent,
} from "@/router";
import {
  Layout,
  //  Menu,
  Select,
} from "antd";
import Menu from "@/common/component/Menu";
import Header from "@/common/component/Header";
import reducersStore from "@/redux/models/modelsStore";
import Store, { mapRedux } from "@/redux";
import { login, createUser, hello, getUser } from "@/common/js/request/index";

const { Content } = Layout;

// 权限跳转登录页面可以在这控制
const Index = memo((props) => {
  const {
    state: {
      user: { userInfo: { name, phone, account } = {}, breadcrumb = [] } = {},
    } = {},
    children,
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const {
      dispatch: {
        user: { setUserInfo, login, fetchUser, getUserInfo },
      },
    } = props;
    getUserInfo();
    return () => {};
  }, []);
  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  console.log('home props=========',props)
  console.log('breadcrumb=========',breadcrumb)
  return (
    <Layout className="root-layout">
      {/*左侧菜单*/}
      <Menu collapsed={collapsed} {...props} />
      <Layout className="site-layout">
        {/*顶部*/}
        <Header
          // avatar="头像地址"
          nickname={name}
          areaCode={name}
          mobile={phone}
          collapsed={collapsed}
          onClick={(type) => {
            console.log("type=", type);
          }}
          onChangeCollapsed={() => {
            toggle();
          }}
          breadcrumb={breadcrumb}
        ></Header>

        <div className="children-page">
          {Children.map(children, (child, index) => {
            return <> {child}</>;
          })}
        </div>
      </Layout>
    </Layout>
  );
});

export default mapRedux(["user"])(Index);
