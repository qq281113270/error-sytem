import { connect } from "react-redux";
import modelsStore from "@/redux/models/modelsStore";
import Store, { actions } from "@/redux/store";
import { CheckDataType } from "@/utils";
const { store: reducersStore } = modelsStore;
// 映射Dispatch
const getDispatchToProps = (reducersStore, dispatch, modelsNames) => {
  let flag = false;
  const reducersStoreKeys = Object.keys(reducersStore);
  let dispatchToProps = {};

  if (
    CheckDataType.isUndefined(modelsNames) === true ||
    CheckDataType.isArray(modelsNames) === true ||
    CheckDataType.isString(modelsNames) === true
  ) {
    flag = true;
  }
  for (let reducersStoreKey of reducersStoreKeys) {
    if (
      !flag ||
      (CheckDataType.isArray(modelsNames) === true &&
        !modelsNames.includes(reducersStoreKey)) ||
      (CheckDataType.isString(modelsNames) === true &&
        !modelsNames == reducersStoreKey)
    ) {
      continue;
    }

    dispatchToProps = {
      ...dispatchToProps,
      [reducersStoreKey]: ((storeDispatch, key) => {
        const { dispatch: reducers } = storeDispatch;
        const reducersKeys = Object.keys(reducers);
        let newReducers = {};
        for (let reducersKey of reducersKeys) {
          newReducers = {
            ...newReducers,
            [reducersKey]: async (data) => {
              let state = Store.getState() || {};
              state = state[key] || {};
              return reducers[reducersKey](dispatch, state, data);
            },
          };
        }
        return newReducers;
      })(reducersStore[reducersStoreKey], reducersStoreKey),
    };
  }
  return dispatchToProps;
};
// 映射 State
const getStateToProps = (reducersStore, state, modelsNames) => {
  let flag = true;
  const reducersStoreKeys = Object.keys(reducersStore);
  let stateToProps = {};

  //   if (
  //     CheckDataType.isUndefined(modelsNames) === true ||
  //     CheckDataType.isArray(modelsNames) === true ||
  //     CheckDataType.isString(modelsNames) === true
  //   ) {
  //     flag = true;
  //   }
  if (CheckDataType.isUndefined(modelsNames) === true) {
    return state;
  }

  for (let reducersStoreKey of reducersStoreKeys) {
    if (
      (CheckDataType.isArray(modelsNames) === true &&
        !modelsNames.includes(reducersStoreKey)) ||
      (CheckDataType.isString(modelsNames) === true &&
        !modelsNames == reducersStoreKey)
    ) {
      continue;
    }

    stateToProps = {
      ...stateToProps,
      [reducersStoreKey]: state[reducersStoreKey],
    };
  }
  return stateToProps;
};
// 映射 Actions
const getActionsToProps = (reducersStore, allActions, modelsNames) => {
  const reducersStoreKeys = Object.keys(reducersStore);
  let actionsToProps = {};
  if (CheckDataType.isUndefined(modelsNames) === true) {
    return allActions;
  }

  for (let reducersStoreKey of reducersStoreKeys) {
    if (
      (CheckDataType.isArray(modelsNames) === true &&
        !modelsNames.includes(reducersStoreKey)) ||
      (CheckDataType.isString(modelsNames) === true &&
        !modelsNames == reducersStoreKey)
    ) {
      continue;
    }

    actionsToProps = {
      ...actionsToProps,
      [reducersStoreKey]: allActions[reducersStoreKey],
    };
  }
  return actionsToProps;
};
// 把redux 映射到 组件上
export default (modelsNames) => {
  return (Component) => {
    const mapDispatchToProps = (dispatch) => {
      return {
        dispatch: {
          reduxDispatch: dispatch,
          ...getDispatchToProps(reducersStore, dispatch, modelsNames),
        },
      };
    };

    const mapStateToProps = (state) => {
      console.log("state==", state);
      return {
        actions: getActionsToProps(reducersStore, actions, modelsNames),
        state: {
          ...getStateToProps(reducersStore, state, modelsNames),
        },
      };
    };
    return connect(mapStateToProps, mapDispatchToProps)(Component);
  };
};
