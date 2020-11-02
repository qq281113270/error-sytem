
import controller from '../controller/user';
import Router from 'koa-router'  // koa 路由中间件
const  nowRoute = new Router({
	prefix: '/user' // 给路由统一加个前缀：
});

class Route {
    constructor(app, router) {
        this.app = app;
        this.router = router;
        this.init();
    }
    middleware() {
        // 处理404
        // this.app.use('/user',function* (next) {
        //     try {
        //         yield* next;
        //     } catch (e) {
        //         this.status = 500;
        //         this.body = '500';
        //     }
        //     if (parseInt(this.status) === 404) {
        //         this.body = '404';
        //     }
        // });
    }
    init() {
        this.middleware();
        this.routers();
        this.router.use(nowRoute.routes());//第二种挂载方式  这里前面不需要加前缀 /user
    }
    routers() {
        // 添加url
        nowRoute.post('/register', controller.add);
    }
    login() {
        // 添加url
        nowRoute.post('/login', controller.login);
    }
}

export default Route;
