import { createBrowserHistory, createHashHistory } from 'history'
 const history  = createBrowserHistory({
     basename: '', // 基链接
     forceRefresh: true, // 是否强制刷新整个页面
    //  keyLength: 6, // location.key的长度
    //  getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
})

// const location = history.location; 获取location对象
// const unlisten = history.listen( (location, action) => {

// } )
 
// unlisten() // 监听解绑




  export default   history
