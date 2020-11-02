import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') { //不是生产环境
  middleware.push(createLogger()) //日志
}



const store = createStore( //创建一个Store对象
    reducer, //传递reducers 进来
    applyMiddleware(...middleware)
)

  

export default  store;