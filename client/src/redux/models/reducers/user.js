import { actions } from "@/redux/store";
import { getUserInfo } from "@/common/js/request";

export default {
  name: "user",
  state: {
    // currentUser: {},
    userInfo: {},
  },
  reducers: {
    setUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...payload,
        },
      };
    },

    // setCurrentUser(state, { payload }) {
    //   return {
    //     ...state,
    //     currentUser: {
    //       ...state.currentUser,
    //       ...payload,
    //     },
    //   };
    // },
  },
  effects: (dispatch) => {
    return {
      async getUserInfo() {
        // const data = await getUserInfo();
      },
      // // 登陆
      // async login(state, { payload }) {
      //   const {
      //     //模块
      //     user: { setUserInfo },
      //   } = actions;
      //   dispatch({
      //     type: setUserInfo,
      //     payload: payload,
      //   });
      //   return {
      //     name: "你好",
      //   };
      // },
    };
  },
};
