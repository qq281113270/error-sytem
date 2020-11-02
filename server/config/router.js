const Router = require('koa-router') // koa 路由中间件
const router = new Router({
	prefix: '/api' // 给路由统一加个前缀：
});

module.exports = router;
 
