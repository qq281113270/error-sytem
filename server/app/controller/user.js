import userService from '../service/user';

class Controller {
    static async add(ctx, next) {
        // ctx.set("Content-Type", "application/json")
        const parameter = ctx.request.body; // 获取请求参数
        //添加service
        const data = await userService.add(ctx,next,parameter);
        ctx.response.body = data   
    }
    static edit(ctx, next) {
        
        ctx.set("Content-Type", "application/json")
        console.log('add=',)
        var page = ctx.params.page; // 获取请求参数
        //添加service
        // const data = userService.list(page);
        // console.log('data=', data);
        ctx.response.body =  'd'
    }

    static async login (ctx, next) {
        // ctx.set("Content-Type", "application/json")
        var parameter = ctx.request.body; // 获取请求参数
        //添加service
         const data = await userService.login(ctx,next,parameter);
         ctx.response.body = data
    }
}

export default Controller;
