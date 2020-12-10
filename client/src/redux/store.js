import { createStore, applyMiddleware,combineReducers } from 'redux'

import createSagaMiddleware from 'redux-saga'
// import reducer from "./reducers";
import * as reducers from './reducers'
import   $userReducers from './models/register'
import mySaga from './saga'


console.log('$userReducers=',$userReducers)
console.log('$reducers=',reducers)

//合并 reduers
const rootReducer = combineReducers({
...reducers,
...$userReducers,
})

// export default rootReducer










// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store =  createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   //不是生产环境
//   middleware.push(createLogger()); //日志
// }

// const store = createStore(
//   //创建一个Store对象
//   reducer, //传递reducers 进来
//   applyMiddleware(...middleware)
// );

export default store;
