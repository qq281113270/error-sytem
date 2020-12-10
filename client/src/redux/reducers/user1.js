 
import {
    SELECT_SUBREDDIT, 
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    USER_FETCH_SUCCEEDED
} from '../actions'

 

 
 
const initialState = { user: {
  name:"会员初始化数据"
} };
 
 const userReducers =  (state = initialState, action) => {
  //  debugger
 switch (action.type) {
  case USER_FETCH_SUCCEEDED:
   return { ...state, user: 123};
  default:
   return state;
 }
}

 

export default userReducers
