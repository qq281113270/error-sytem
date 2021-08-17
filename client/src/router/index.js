/*
 * @Author: your name
 * @Date: 2020-11-11 11:21:09
 * @LastEditTime: 2021-08-12 15:42:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/router/index.js
 */
import React, {
  Suspense,
  lazy,
  useState,
  useCallback,
  useEffect,
  Component,
} from "react";
import {
  // 不要使用BrowserRouter坑
  // BrowserRouter as Router,
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { pathComponent, routePaths } from "./pathComponent";
import { navigateTo, redirectTo, openWindow, historyPush } from "./historyPush";
import   {getHistory,history,listen} from "./history";

const Routers = (props) => {
 
  useEffect(() => {
    // 监听路由变化
    // listen((location, action)=>{
    //   console.log('location=====',location)
    //   console.log('action=====',action)
    // })
  },[]);
 

  return (
    <Router
      // basename=""
      //  forceRefresh={false}
       history={history}
      // getUserConfirmation={() => {
      //   console.log("getUserConfirmation=");
      // }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {pathComponent.map((item, index) => {
            return (
              <Route
                key={index}
                // exact
                nam={item.name}
                path={item.path}
                component={item.component}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routers;
export {
  navigateTo,
  redirectTo,
  openWindow,
  historyPush,
  getHistory,
  history,
  routePaths,
  pathComponent,
  listen,
};
