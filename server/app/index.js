import Koa from 'koa'
import {promise} from './utils'
// import { connection, exec} from '../db/mysql'
import { CheckTable,connection, exec,addUser } from './db/index.js'

console.log('addUser=',addUser)

// const SQL = require('../db/mysql')



// const app = new Koa();
const Route = require('./routes/index')

class App{
  constructor(){
    this.app=new Koa()
    this.init()
  }
  async init (){
    // 数据库连接
    await this.connectSql();
    //加载路由
    this.addRoute()
    // 设置监听端口
    this.listen()

  }
  async  connectSql(){
    await  promise((reslove,reject)=>{
          connection.connect((err)=>{
            if(err){
                console.log('数据库连失败')
                reject();
                throw err
            }
            new CheckTable()
            console.log('数据库连接成功')
            reslove();
        }) 
   })

  }
  addRoute(){
    // 导入路由
    new Route(this.app);
  }
  listen(){
    this.app.listen(3100,()=>{
      console.log('服务器启动成功:http://localhost:3100/')
    });
  }

}

export default new App();




