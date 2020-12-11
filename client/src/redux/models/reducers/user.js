export default {
  name: "user",
  state: {
    currentUser: {},
    userInfo: {},
  },
  reducers: {
    setUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo:{
          ...state.userInfo,
          ...payload,
        }
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
  effects: (dispatch) => {
    return {
      // 登陆
      login(state, { payload }) {
        dispatch({
          type: "setUserInfo",
          payload: payload,
        });
      },
    };
  },
};
