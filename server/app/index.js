import Koa from 'koa';
import { promise } from './utils';
import { CheckTable, connection, exec, addUser } from './db/index.js';
import { Redis } from './redis';

const Route = require('./routes/index');

class App {
    constructor() {
        this.app = new Koa();
        this.init();
    }
    async init() {
        // redis链接
        await this.connectRedis();
        // 数据库连接
        await this.connectSql();
        //加载路由
        this.addRoute();
        // 设置监听端口
        this.listen();
    }
    async connectRedis() {
        await promise((reslove, reject) => {
            Redis.connect(() => {
                console.log('Redis 链接成功');
                reslove();
            });
            Redis.error(() => {
                console.log('Redis 链接错误');
                reject();
            });
        });
    }
    async connectSql() {
        await promise((reslove, reject) => {
            connection.connect((err) => {
                if (err) {
                    console.log('数据库连失败');
                    reject();
                    throw err;
                }
                new CheckTable();
                console.log('mysql数据库连接成功');
                reslove();
            });
        });
    }
    addRoute() {
        // 导入路由
        new Route(this.app);
    }
    listen() {
        this.app.listen(3100, () => {
            console.log('服务器启动成功:http://localhost:3100/');
        });
    }
}

export default new App();
