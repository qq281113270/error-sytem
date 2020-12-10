import store from "./store";
const data = {
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
  effects: (dispatch) => ({}),
};

const register = (data) => {
  const { state: initState, reducers = [], name } = data;
  store.set(name, {
    state: initState,
    dispatch: {},
  });
  return {
    [name]: (state = initState, action) => {
      const { type, payload } = action;
      let code = `  switch (action.type) {`;
      let reducersKeys = Object.keys(reducers);
      let fns = [];
      // const  modelsStore = store.get(name);
      for (let key of reducersKeys) {
        let modelsStore = store.get(name);
        let { dispatch: modelsStoreDispatch } = modelsStore;
        store.set(name, {
          ...modelsStore,
          dispatch: {
            ...modelsStoreDispatch,
            [key]: (dispatch,data) => {
                dispatch({
                  type: `${name}_${key}` ,
                  payload: {
                    ...data,
                  },
                });
            },
          },
        });
        code += `
                 case '${name}_${key}':    
                 return  ${key}(state,action);
              `;

        fns.push(reducers[key]);
      }
      code += "default:return state;}";
      console.log("store===", store.get(name));
      return new Function("state", "action", ...reducersKeys, code)(
        state,
        action,
        ...fns
      );
    },
  };
};

const reducer = register(data);
console.log("reducer==", reducer);
export default reducer;
//    const reducers={
//       ...reducer()
//    }
//    console.log('reducers==',reducers)
//    console.log('sssss==', reducers.user(
//        {
//          name:'你好'
//        },{
//       type: 'setUserInfo'
//    }))
