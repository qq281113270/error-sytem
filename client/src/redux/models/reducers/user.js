import { actions } from "@/redux/store";
export default {
  name: "user",
  state: {
    currentUser: {},
    userInfo: {},
  },
  reducers: {
    setUserInfo(state, { payload }) {
      debugger;
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...payload,
        },
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
        const {
          //模块
          user: { setUserInfo },
        } = actions;
        // console.log('actions============',actions)
        // console.log('setUserInfo============',setUserInfo)
        dispatch({
          type: setUserInfo,
          payload: payload,
        });
      },
    };
  },
};
