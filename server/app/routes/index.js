const router = require('../../config/router');
import Home from './home';
import User from './user';
import {common} from '../middleware/index';
 
class Route {
    constructor(app){
        this.app=app
        this.router=router;
        this.init();
    }
    // 添加中间件
    middleware() {
        // 添加 404 500 中间件 
        common(this.app, this.router);
    }
    
    // 添加路由
    routers() {
        new User(this.app,router);
        new Home(this.app,router);
    }
    init() {
        // 添加中间件
        this.middleware();
        // 添加路由
        this.routers();
        this.app.use(this.router.routes())
        .use(router.allowedMethods());
    }    

}

module.exports = Route;
