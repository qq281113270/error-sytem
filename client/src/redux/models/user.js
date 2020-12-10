export default {
  name: "user",
  state: {
    currentUser: {},
    // userInfo: {},
  },
  reducers: {
    setUserInfo(state, { payload: userInfo }) {
      return {
        ...state,
        userInfo,
      };
    },

    setCurrentUser(state, { payload }) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...payload,
        },
      };
    },
  },
  effects: (dispatch) => ({}),
};

// import {
//   SELECT_SUBREDDIT,
//   INVALIDATE_SUBREDDIT,
//   REQUEST_POSTS,
//   RECEIVE_POSTS,
//   USER_FETCH_SUCCEEDED,
// } from "../actions";

const initialState = {
  user: {
    name: "会员初始化数据",
  },
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return { ...state, user: 123 };
    default:
      return state;
  }
};
