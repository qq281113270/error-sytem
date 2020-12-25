import { merge } from "webpack-merge";
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
import baseConfig from "./webpack.baseConfig";
import devConfig from "./webpack.devConfig";
import prdConfig from "./webpack.prdConfig";
import testDevConfig from "./webpack.testDevConfig";
import testPrdConfig from "./webpack.testPrdConfig";
import bannerPlugin from "./bannerPlugin";
import { getArgv } from "../utils";

const webpackEnv = getArgv("webpackEnv"); // 环境参数
const NODE_ENV = process.env.NODE_ENV; // 环境参数
//   是否是测试开发环境
const isEnvDevelopment = NODE_ENV === "development";
//    是否是生产环境
const isEnvProduction = NODE_ENV === "production";

//添加smp.wrap会有bug 编译缓存出问题
const smp = new SpeedMeasurePlugin();
let config = {};
if (webpackEnv == "test") {
  // node 测试打包
  config = merge(baseConfig, isEnvDevelopment ? testDevConfig : testPrdConfig);
} else {
  // node 源码打包
  config = merge(baseConfig, isEnvDevelopment ? devConfig : prdConfig);
}
export default config;
// smp.wrap(config))
