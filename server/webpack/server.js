import '@babel/polyfill';
import Koa from 'koa';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './config/webpack.config.js';
import portfinder from 'portfinder';

const compiler = webpack(config);

class App {
    constructor() {
        this.app = new Koa();
        this.init();
    }
    async init() {
        this.middleware();
        this.listen();
    }
    async middleware() {
        this.app.use(
            webpackDevMiddleware(compiler, {
                publicPath: config.output.publicPath,
            })
        );
    }

    async listen() {
        const port = await new Promise((resolve, reject) => {
            //查找端口号
            portfinder.getPort((err, port) => {
                if (err) {
                    reject(err);
                    return;
                }
                // 新端口
                resolve(port);
            });
        });
        this.server = this.app.listen(port, () => {
            console.log('开始编译代码');
        });
    }
}

export default App;
