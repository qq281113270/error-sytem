import userService from '../service/user';

class Controller {
    static async add(ctx, next) {
        ctx.set("Content-Type", "application/json")
        var parameter = ctx.request.body; // 获取请求参数
        console.log('ctx.request.body=',ctx.request.body)
        // console.log('ctx.request=',ctx.request)
        
        //添加service
        const data = await userService.add(parameter,ctx,next);
        // console.log('data=', data);
        // ctx.response.send(JSON.stringify({
        //     name:'abc'
        // }))
        ctx.response.body =   [
            [
                "卫衣女",
                "634431.258470436"
            ],
            [
                "卫衣男",
                "462448.3085296621"
            ],
            [
                "卫衣女宽松韩版",
                "455916.48205616674"
            ],
            [
                "卫衣女潮ins",
                "190011.3005487628"
            ],
            [
                "卫衣女春秋薄款",
                "393896.9700550876"
            ],
            [
                "卫衣男连帽",
                "174961.5414169734"
            ],
            [
                "卫衣男潮",
                "352557.87316480116"
            ],
            [
                "卫衣男秋季",
                "363991.3595397119"
            ],
            [
                "卫衣女秋冬",
                "451388.6286025625"
            ],
            [
                "卫衣女春秋",
                "560178.3128390596"
            ]
        ] 
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
        ctx.set("Content-Type", "application/json")
        var parameter = ctx.request.body; // 获取请求参数
        console.log('ctx.request.body=',ctx.request.body)
        console.log('userService.login=',userService.login)
        //添加service
         const data = await userService.login(parameter,ctx,next);
          ctx.response.body= data
    }
}

export default Controller;
