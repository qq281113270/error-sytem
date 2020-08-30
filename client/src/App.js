import React from 'react';
import Router from './router/index';
// import logo from './logo.svg';
import './App.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

moment.locale('zh-cn');
function App() {
  return (
    <div  >
     <Router></Router>
      
    </div>
  );
}

export default App;
