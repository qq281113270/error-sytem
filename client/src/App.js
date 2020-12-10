import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./router/index";
import store from "./redux/store";
// import Router from "./router/index";

// import logo from './logo.svg';
import "./App.css";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./index.css";

moment.locale("zh-cn");
console.log('store=======',store)
class App extends Component {
  // constructor(){

  // }
  componentDidMount() {
    //     const location = history.location; //获取location对象
    // const unlisten = history.listen( (location, action) => {
    //     console.log('location=',location)
    // } )
  
  }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps=", nextProps);
    console.log("props=", this.props);
    this.setState({
      children: nextProps.children,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router></Router>
      </Provider>
    );
  }
}

// function App() {
//   return <Router></Router>;
// }

export default App;
