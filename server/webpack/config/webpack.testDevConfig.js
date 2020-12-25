import path from "path";
import fs from "fs";
//glob 获取目录下面所有文件
import glob from "glob";
//获取html文件
let testJs = ((globalPath) => {
  let jsFiles = {},
    pageName;

  glob.sync(globalPath).forEach((pagePath) => {
    var basename = path.basename(pagePath, path.extname(pagePath));
    console.log("match=", pagePath.match(/\.js$/g));
    pageName = pagePath.replace(/\.js$/g, "");
    jsFiles[pageName] = pagePath;
  });
  return jsFiles;
})(path.resolve(__dirname, "../../app/**/*.test.js"));

let buildEntries = {};

/*获取所有模块的文件夹名称*/
const modules = fs.readdirSync(path.resolve(__dirname, "../../app"));

// for (let moduleName of modules) {
//   buildEntries[moduleName] = path.join(path.resolve(__dirname, "../../app"),'modules',moduleName,'main.js');
// }

console.log("testJs===", testJs);
console.log("modules===", modules);
console.log("buildEntries===", buildEntries);

export default {
  entry: {
    // ...testJs,
    "__test__/add.test":
      "/Users/admin/Documents/code/error-sytem/server/app/__test__/add.test.js",
    "bizMod/abnormity/bizMod/script/graphql/schema/index2.test":
      "/Users/admin/Documents/code/error-sytem/server/app/bizMod/abnormity/bizMod/script/graphql/schema/index2.test.js",
    "graphql/schema/index.test":
      "/Users/admin/Documents/code/error-sytem/server/app/graphql/schema/index.test.js",
    // myVue: [path.resolve(__dirname, "../../app/myVue.js")], // 公共包抽取
    // index: [
    //   //添加编译缓存
    //   "webpack/hot/poll?1000",
    //   //  path.resolve(__dirname, "../../app/index.js")
    //   //入口主文件
    //   //  path.resolve(__dirname,"../../app/index.js"), // 如果没有配置 context 则需要这样引入  path.resolve(__dirname, "../../app/index.js")
    // ],
  },
  output: {
    //告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释
    pathinfo: true,
    //此选项会向硬盘写入一个输出文件，只在 devtool 启用了 SourceMap 选项时才使用。
    //默认不用配置也可以
    sourceMapFilename: "[file].map",
    // 自定义热更新的主文件名(main filename)。可选的值的详细信息，请查看 output.filename 选项
    // 占位符只能是 [hash]，默认值是： 可以默认不配置
    // hotUpdateMainFilename: "[hash].hot-update.json",
    // 自定义热更新 chunk 的文件名。可选的值的详细信息，请查看 output.filename 选项。
    // 占位符只能是 [id] 和 [hash]，默认值是：
    hotUpdateChunkFilename: "[id].[hash].hot-update.js",
  },
  watch: true,
  watchOptions: {
    //延迟监听时间
    aggregateTimeout: 200,
    //忽略监听文件夹
    ignored: "/node_modules/",
  },
  optimization: {
    // 压缩
    minimize: false,
    minimizer: [],
    //  任何字符串：用于设置 process.env.NODE_ENV 的值。
    nodeEnv: "development",
    moduleIds: "named",
    chunkIds: "named",
  },
  devtool: "source-map", // 生产环境和开发环境判断
  mode: "development",
  plugins: [
    //这个Webpack插件将强制所有必需模块的整个路径与磁盘上实际路径的确切情况相匹配。
    // 使用此插件有助于缓解OSX上的开发人员不遵循严格的路径区分大小写的情况，
    // 这些情况将导致与其他开发人员或运行其他操作系统（需要正确使用大小写正确的路径）的构建箱发生冲突。
    // new CaseSensitivePathsPlugin()
  ],
};
