import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import cookie from 'koa-cookie';

const common = (app, router) => {
    // 处理404
    // app.use(function* (next) {
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

    //处理500
    // router.get('/', function* (next) {
    //     throw new Error('500');
    // });

    // 添加获取参数中间件
    app.use(bodyParser());
    // 添加 cookie
    app.use(cookie());
    // 添加跨域
    // app.use(async (ctx, next) => {
    //     console.log(ctx.request.headers);
    //     // if( req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com"
    //     //     || req.headers.origin.toLowerCase() =="http://127.0.0.1" ) {
    //     //     //设置允许跨域的域名，*代表允许任意域名跨域
    //     //     res.header("Access-Control-Allow-Origin", req.headers.origin);
    //     // }
    //     ctx.set('Cache-Control','no-cache')
    //     //设置允许跨域的域名，*代表允许任意域名跨域
    //     ctx.set('Access-Control-Allow-Origin', '*');
    //     //允许的header类型
    //     ctx.set('Access-Control-Allow-Headers', 'content-type');

    //     // 设置 跨域 cookie
      //  ctx.set('Access-Control-Allow-Credentials', true);

    //     //跨域允许的请求方式
    //     ctx.set('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    //     //     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    //     //     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //     // await next();
    //     if (ctx.method == 'OPTIONS') {
    //         ctx.body = 200;
    //     } else {
    //         await next();
    //     }
    // });
    // 跨域
    app.use(cors({
      // origin: ['http://localhost:3000','http://127.0.0.1:3000'],    // 前端地址
      credentials:true
    }));
};

export default common;
