import { combineReducers } from 'redux'
import userReducers from './user1'

import {
    SELECT_SUBREDDIT, 
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    USER_FETCH_SUCCEEDED
} from '../actions'

 

export const selectedSubreddit = (state = 'reactjs', action) => {
   
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return {
         name:'你好'
      }
    default:
      return state
  }
}

//
// const posts = (
//   state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }


 
const initialState = { user: {} };
 
//  const userReducers =  (state = initialState, action) => {
//  switch (action.type) {
//   case USER_FETCH_SUCCEEDED:
//    return { ...state, user: action.user };
//   default:
//    return state;
//  }
// }


//reducers
export const postsBySubreddit = (state = { }, action) => {
  // debugger
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: {
          isFetching: false,
          didInvalidate: false,
          items: []
        }
      }
    default:
      return state
  }
}
export {userReducers};

//合并 reduers
// const rootReducer = combineReducers({
//     postsBySubreddit,
//     selectedSubreddit,
//     userReducers
// })

// export default rootReducer
