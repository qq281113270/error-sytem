import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchUserApi } from '../api/user';
import { selectSubreddit, invalidateSubreddit, requestPosts } from '../actions/';
 
function* fetchUser({ payload }) {
 try {
  const user = yield call(fetchUserApi, payload.userId);
  yield put({ type: USER_FETCH_SUCCEEDED, user });
 } catch (e) {
  yield put({ type: USER_FETCH_FAILED, message: e.message });
 }
}
 
const userSaga = function* () {
 yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}
 
export default userSaga;