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
import { Layout, Menu, Select, Dropdown, Avatar } from "antd";
import Breadcrumb from "@/common/component/Breadcrumb";

import "./index.less";

const { Option } = Select;
const { Header, Sider, Content } = Layout;

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
      breadcrumb,
    } = props;
    console.log(" Header props===", props);
    const getMenu = useCallback(() => {
      return (
        <Menu className="dropdown-box">
          <Menu.Item onClick={onClick.bind(null, "account")}>
            <ul className="dropdown-select">
              <li className="odd"> 账号管理</li>
              <li>
                <dl>
                  <dd>
                    <div>{nickname}</div>
                    <div>
                      {areaCode}-{mobile}
                    </div>
                  </dd>
                  <dd>
                    <svg
                      t="1600497045220"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2069"
                      width="25"
                      height="25"
                    >
                      <path
                        d="M357.376 852.309333a25.6 25.6 0 0 0 36.181333 36.181334l358.4-358.4a25.6 25.6 0 0 0 0-36.181334l-358.4-358.4a25.6 25.6 0 0 0-36.181333 36.181334L697.685333 512l-340.309333 340.309333z"
                        p-id="2070"
                        fill="#dbdbdb"
                      ></path>
                    </svg>
                  </dd>
                </dl>
              </li>
            </ul>
          </Menu.Item>
          <Menu.Item onClick={onClick.bind(null, "logOut")}>
            <ul className="dropdown-select">
              <li>退出登录</li>
              <li>
                <svg
                  t="1600496813708"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1153"
                  width="30"
                  height="30"
                >
                  <path
                    d="M512.089 448.118l-64.013 0.153V128.053h64.013z"
                    p-id="1154"
                    fill="#cdcdcd"
                  ></path>
                  <path
                    d="M640.124 229.376v77.663c76.248 51.099 124.833 138.029 124.833 236.683 0 157.269-127.543 284.761-284.875 284.761s-284.874-127.491-284.874-284.76c0-97.523 49.054-183.582 123.833-234.905v-78.114c-113.439 58.433-191.016 176.668-191.016 313.019 0 194.358 157.622 351.917 352.057 351.917S832.14 738.081 832.14 543.723c0-137.393-77.16-256.391-192.016-314.347z"
                    p-id="1155"
                    fill="#cdcdcd"
                  ></path>
                </svg>
              </li>
            </ul>
          </Menu.Item>
        </Menu>
      );
    }, [nickname, areaCode, mobile]);

    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: onChangeCollapsed,
          }
        )}

        <Breadcrumb data={breadcrumb} />
        <div className="locale-switcher   dropdown-root-box">
          <Dropdown
            trigger={["click"]}
            overlay={getMenu()}
            placement="bottomRight"
            arrow={true}
          >
            <div className="dropdown-link" onClick={(e) => e.preventDefault()}>
              {avatar ? (
                <img src={avatar} />
              ) : (
                <Avatar size="small" icon="user" />
              )}
              <span className="account-name">{nickname} </span>
            </div>
          </Dropdown>
        </div>
      </Header>
    );
  })
);
