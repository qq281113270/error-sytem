const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");

module.exports = {
  // node: {
  //   // __filename: true,
  //   // __dirname: true,
  //   fs: 'empty',
  //   net:'empty',
  //   tls:'empty',
  // },
  // 入口文件
  entry: {
    // 项目中用到该两个依赖库文件
    //编译vue dll文件
    vue: [path.join(__dirname, "../../node_modules/vue")],
    //编译react dll文件
    react: [path.join(__dirname, "../../node_modules/react")],

    // 编译不了koa和mysql 会报错, 不理解。 难道是不能编译后端 包？
    // koa: [path.join(__dirname, "../../node_modules/koa/dist/koa.mjs")],
    // mysql: [path.join(__dirname, "../../node_modules/_mysql@2.18.1@mysql")],
  },
  resolve: {
    // 1.不需要node polyfilss webpack 去掉了node polyfilss 需要自己手动添加
    alias: {
      crypto: false,
      stream: "stream-browserify",
    },
    // 2.手动添加polyfills
    fallback: {
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      http: require.resolve("stream-http"),
      timers: require.resolve("timers-browserify"),
    },
  },

  // 输出文件
  output: {
    // 文件名称
    filename: "[name].dll.js",
    // 将输出的文件放到dist目录下
    path: path.resolve(__dirname, "../../dist/dllFile"),
    /*
     存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery, 在前面加 _dll
     是为了防止全局变量冲突。
    */
    library: "_dll_[name]",
  },
  plugins: [
    // 使用插件 DllPlugin
    new DllPlugin({
      /*
       该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
       比如在jquery.manifest文件中有 name: '_dll_jquery'
      */
      name: "_dll_[name]",
      /* 生成manifest文件输出的位置和文件名称 */
      path: path.join(__dirname, "../../dist/dllFile", "[name].manifest.json"),
    }),
  ],
};
