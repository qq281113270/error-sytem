/*
 * @Author: your name
 * @Date: 2020-11-11 11:21:09
 * @LastEditTime: 2021-08-23 16:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/router/pathComponent.js
 */

import React, { lazy } from "react";
import {
  // 不要使用BrowserRouter坑
  // BrowserRouter as Router,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
const LogIn = lazy(() => import("@/pages/LogIn"));
const Register = lazy(() => import("../pages/Register"));
// const Home = lazy(() => import('../pages/Home'));
const Index = lazy(() => import("@/pages/Home/pages/Index"));
const Graphql = lazy(() => import("@/pages/Graphql"));
const ScriptException = lazy(() =>
  import("@/pages/Home/pages/ScriptException")
);
const CreateProject = lazy(() => import("@/pages/Home/pages/CreateProject"));
const Home = () => {
  return <Redirect to="/index" />;
};

const pathComponent = [
  {
    name: "graphql",
    path: "/graphql",
    component: Graphql,
  },
  {
    name: "logLn",
    path: "/logLn",
    component: LogIn,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  // 主页二级路由
  {
    name: "home",
    path: "/",
    component: Home,
    children: [
      {
        name: "createProject",
        path: "/createProject/:id?",
        component: CreateProject,
      },
      {
        name: "index",
        path: "/index/:id?",
        component: Index,
      },
      {
        name: "scriptException",
        path: "/scriptException",
        component: ScriptException,
      },
    ],
  },
];

const routePaths = pathComponent.reduce((acc, next) => {
  acc = {
    ...acc,
    [next.name]: next.path,
  };
  return acc;
}, {});
export { pathComponent, routePaths };
