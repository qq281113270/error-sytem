import { createBrowserHistory, createHashHistory } from "history";
export const history = createBrowserHistory({
   basename: "/", // 基链接
   forceRefresh: false, // 是否强制刷新整个页面
   keyLength: 10, // location.key的长度
  //  getUserConfirmation: (message,callback) =>{
  //    console.log('message=====',message)
  //  } // 跳转拦截函数
});

export const getHistory = (props={}) =>
  createBrowserHistory({
     basename: "/", // 基链接
    forceRefresh: false, // 是否强制刷新整个页面
    // keyLength: 10, // location.key的长度
    //  getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
    ...props,
  });

export const listen = (fn=()=>{}) => {
  return history.listen((location, action) => {
    fn(location, action);
  });
};
