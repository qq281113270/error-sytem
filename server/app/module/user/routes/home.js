
import  controller from '../controller/home'
class Route {
    constructor(app, router) {
      this.app=app;
      this.router=router;
      this.init()
    }
    middleware(){

    }
    init(){
     this.middleware();
     this.routers();
    }
    routers() {
        // 添加url
        this.router.get('/hello/:page',controller.hello);
    }
}

export default Route;