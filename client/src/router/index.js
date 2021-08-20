/*
 * @Author: your name
 * @Date: 2020-11-11 11:21:09
 * @LastEditTime: 2021-08-20 19:17:10
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
  useMemo,
  memo,
  createElement,
  cloneElement,
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
import { getHistory, history, listen } from "./history";
const Home = lazy(() => import("../pages/Home"));

const Routers = (props) => {
  const [rootComponent, setRootComponent] = useState([]);
  const [childComponent, setChildComponent] = useState([]);

  // 递归查找子页面
  const getChildComponent = useCallback(
    (pathComponent, parentPath, flatPathComponent = []) => {
      for (let item of pathComponent) {
        const { children = [], name, path, component: Component } = item;
        if (children && children.length) {
          getChildComponent(children, path, flatPathComponent);
        }
        flatPathComponent.push({
          ...item,
          path: parentPath && parentPath != "/" ? `${parentPath}${path}` : path,
        });
      }
      return flatPathComponent;
    },
    []
  );
  useEffect(() => {
    // 监听路由变化
    // listen((location, action)=>{
    //   console.log('location=====',location)
    //   console.log('action=====',action)
    // })

    setRootComponent(
      pathComponent.filter((item) => {
        return item.name != "home";
      })
    );

    setChildComponent(
      getChildComponent(
        pathComponent.filter((item) => {
          return item.name == "home";
        })
      )
    );
  }, []);
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
          {rootComponent.map((item, index) => {
            const { component: ChildrenComponent, name, path } = item;
            return (
              <Route
                key={name}
                exact
                name={name}
                path={path}
                render={(props) => {
                  return (
                    // <Home {...props}>
                    <ChildrenComponent {...props} />
                    // </Home>
                  );
                }}
                // component={item.component}
              />
            );
          })}
          {childComponent.map((item, index) => {
            const { component: ChildrenComponent, name, path } = item;
            return (
              <Route
                key={name}
                exact
                name={name}
                path={path}
                render={(props) => {
                  return (
                    <Home {...props}>
                    
                      <ChildrenComponent {...props} />
                    </Home>
                  );
                }}
                // component={item.component}
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
