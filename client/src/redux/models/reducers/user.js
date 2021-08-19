/*
 * @Author: your name
 * @Date: 2020-12-24 16:21:28
 * @LastEditTime: 2021-08-19 18:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/redux/models/reducers/user.js
 */
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
      async getUserInfo(state, { payload: param = {} }) {
        const data = await getUserInfo(param);
        return data;
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
