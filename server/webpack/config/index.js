import { merge } from "webpack-merge";
import baseConfig from "./webpack.baseConfig";
import devConfig from "./webpack.devConfig";
import prdConfig from "./webpack.prdConfig";
import { getArgv } from "../utils";

// const webpackEnv = getArgv("webpackEnv"); // 环境参数
const webpackEnv = process.env.NODE_ENV; // 环境参数
//   是否是测试开发环境
const isEnvDevelopment = webpackEnv === "development";
//   是否是生产环境
const isEnvProduction = webpackEnv === "production";
export default merge(baseConfig, isEnvDevelopment ? devConfig : prdConfig);
