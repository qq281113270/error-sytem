import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
const ajax = async (id) => {
  console.log("ajax=====", id);
  return id;
};

export default {
  name: "user",
  fetchUser: function* (action) {
    try {
      const user = yield call(ajax, action.payload.userId);
      //触发redux reducers
      yield put({ type: "user_setUserInfo", payload: { name: user } });
    } catch (e) {
      //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
  },
};
