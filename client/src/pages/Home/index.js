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
import React, { Suspense, lazy, useState, useCallback } from "react";
import {
  routePaths,
  historyPush,
  getHistory,
  history,
  pathComponent,
} from "@/router";
import { Layout, Menu, Select } from "antd";
import Sider from "@/common/component/Sider";
import Header from "@/common/component/Header";
import reducersStore from "@/redux/models/modelsStore";
import Store,{mapRedux} from "@/redux";

const { store: reducersstore } = reducersStore;

// Header

const { Option } = Select;
const Index = lazy(() => import("@/pages/Home/pages/Index"));
const { Content } = Layout;
const mapStateToProps = (state) => {
  console.log("state=", state);
  return { text: state.text };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: "setUserInfo",
        payload: {
          name: "yao guan shou",
          age: 29,
        },
      });
    },
    fetchDatas: () => {
      // dispatch(getDatas());
    },
  };
};

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
    console.log("this.props======", this.props);
  }
  componentDidMount() {

    const {
      dispatch:{
        user: { setUserInfo, login, fetchUser },
      }
    } = this.props;



    setTimeout(() => {
      login({
        name: "login123",
        age: "29",
      });
    }, 1000);

 
  }

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
            // avatar="头像地址"
            nickname="账号名称"
            areaCode="账号"
            mobile="手机号码"
            collapsed={collapsed}
            onClick={(type) => {
              console.log("type=", type);
            }}
            onChangeCollapsed={() => {
              this.toggle();
            }}
          ></Header>
          <Router
            // basename=""
            // forceRefresh={false}
            history={history}
            // getUserConfirmation={() => {
            //   console.log("getUserConfirmation=");
            // }}
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


export default mapRedux( )(Home);
