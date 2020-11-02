import { createBrowserHistory, createHashHistory } from 'history'
 const history  = createBrowserHistory({
     basename: '', // 基链接
     forceRefresh: true, // 是否强制刷新整个页面
    //  keyLength: 6, // location.key的长度
    //  getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
})

// const location = history.location; 获取location对象
// const unlisten = history.listen( (location, action) => {
    
//     console.log('location=',location)
//     console.log('action=',action)
//     console.log('history=',history)
//     history.path=location.location.pathname
//     console.log('location.pathname=',location.location.pathname)
//     console.log('history=',history)
//     // location是location对象
//     // action是动作名称，比如 "PUSH"
// } )
 
// unlisten() // 监听解绑



// import { createBrowserHistory, createHashHistory } from 'history'

// let historyInitialized = false
// let history = createBrowserHistory({ basename: '/' })

// export const createHistory = (type = 'browserHistory', options = { basename: '/' }) => {
//   if (historyInitialized) {
//     return history
//   }

//   historyInitialized = true
//   return (history = type === 'browserHistory' ? createBrowserHistory(options) : createHashHistory(options))
// }

  export default   history




//   export default history;