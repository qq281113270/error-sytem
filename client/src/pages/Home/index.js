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
import React, { Suspense, lazy, useState, useCallback, Children } from "react";
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
class Home extends React.Component {
  state = {
    collapsed: false,
    selectedKeys: ["1"],
    n: 1,
  };

  getChildrenComponent = () => {
    return pathComponent.find((item) => item.name == "home")?.children || [];
  };
  componentDidUpdate(preProps, preState, spanshot) {
    // console.log("this.props======", this.props);
  }
  async componentDidMount() {
    const {
      dispatch: {
        user: { setUserInfo, login, fetchUser, getUserInfo },
      },
    } = this.props;

    let data = await getUserInfo();
    console.log("this.props====", this.props);
    console.log("data====", data);
    // hello()
    // getUser();
    // createUser({
    //   name: "12323",
    // });
    // const data = await login({
    //   name: "login123",
    //   age: "29",
    // });
    // console.log("data=======", data);
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { selectedKeys, collapsed } = this.state;
    const {
      state: { user: { userInfo: { name, phone, account } = {} } = {} } = {},
      children,
    } = this.props;
    console.log('Home this.props====',this.props)
    console.log('isValidElement=',React.isValidElement(children))
    return (
      <Layout className="root-layout">
        {/*左侧菜单*/}
        <Menu collapsed={collapsed} />
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
              this.toggle();
            }}
          ></Header>
           
           {/*中间子页面 */}
          {Children.map(children, (child, index) => {
            return <> {child}</>;
          })} 
        </Layout>
      </Layout>
    );
  }
}

export default mapRedux("user")(Home);
