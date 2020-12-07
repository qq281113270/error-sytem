import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
// import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { helloSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga); // Hello, Sagas!

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
