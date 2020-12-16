import "@babel/polyfill";
import webpack from "webpack";
import { merge } from "webpack-merge";
import path from "path";
import nodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import WebpackBar from "webpackbar";
import HappyPack from "happypack";
import TerserPlugin from "terser-webpack-plugin";
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
import WebpackBuildDllPlugin from "webpack-build-dll-plugin";
import DllReferencePlugin from "webpack/lib/DllReferencePlugin";
import HardSourceWebpackPlugin from "hard-source-webpack-plugin";
// import vue from "vue";
// import koa from "koa";
import bannerPlugin from "./bannerPlugin";

const bannerPluginKeys = Object.keys(bannerPlugin);

//添加smp.wrap会有bug 编译缓存出问题
// const smp = new SpeedMeasurePlugin();

export default // smp.wrap(
{
  // 入口
  entry: [
    //添加编译缓存
    "webpack/hot/poll?1000",
    //入口主文件
    "./app/index.js",
  ],
  // 是否监听文件
  // watch: true,
  //dllPlugin 插件需要的包
  // resolve: {
  //   // 1.不需要node polyfilss webpack 去掉了node polyfilss 需要自己手动添加
  //   alias: {
  //     crypto: false,
  //     stream: "stream-browserify",
  //   },
  //   // 2.手动添加polyfills
  //   fallback: {
  //     path: require.resolve("path-browserify"),
  //     crypto: require.resolve("crypto-browserify"),
  //     stream: require.resolve("stream-browserify"),
  //     util: require.resolve("util/"),
  //     assert: require.resolve("assert/"),
  //     http: require.resolve("stream-http"),
  //   },
  // },
  // 出口
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "index.js",
    chunkFilename: "[id].js",
    // Chunk 配置
    // filename: "[name].js",
    // chunkFilename: "[name].chunk.js",
    publicPath: "/",
    library: "server",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    chunkLoadTimeout: 30000,
    devtoolModuleFilenameTemplate:
      "webpack://[namespace]/[resource-path]?[loaders]",
  },
  // 打包优化配置
  optimization: {
    emitOnErrors: true,
    // Chunk start splitChunks [name].chunk 生成的 文件名是main文件名，和HotModuleReplacementPlugin插件有冲突 所以暂时不用
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime~${entrypoint.name}`,
    // },
    // splitChunks: {
    //   chunks: "async",
    //   minSize: 20000,
    //   minRemainingSize: 0,
    //   maxSize: 0,
    //   minChunks: 1,
    //   maxAsyncRequests: 30,
    //   maxInitialRequests: 30,
    //   automaticNameDelimiter: "~",
    //   enforceSizeThreshold: 50000,
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       reuseExistingChunk: true,
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
    // Chunk end
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        extractComments: true,
        // terserOptions: {
        //   myCustomOption: true,

        // },
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          // keep_classnames: isEnvProductionProfile,
          // keep_fnames: isEnvProductionProfile,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
        parallel: 4,
      }),
    ],
  },
  target: "node",
  // devtool: webpackEnv ? "source-map" : "eval", // 生产环境和开发环境判断

  node: {
    __filename: true,
    __dirname: true,
    // fs: 'empty',
    // net:'empty',
    // tls:'empty',
  },
  // mode: "development",
  externals: [nodeExternals({ allowlist: ["webpack/hot/poll?1000"] })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["happypack/loader?id=cache"],
        // use: ["cache-loader", "babel-loader"],
        // 排除文件
        include: path.resolve("./app/index.js"),
      },
      {
        test: /\.node$/,
        use: [
          "happypack/loader?id=node",
          "thread-loader",
          // {
          //   loader: "thread-loader",
          //   // 有同样配置的 loader 会共享一个 worker 池(worker pool)
          //   options: {
          //     // 产生的 worker 的数量，默认是 cpu 的核心数
          //     workers: 2,
          //     // 一个 worker 进程中并行执行工作的数量
          //     // 默认为 20
          //     workerParallelJobs: 50,
          //     // 额外的 node.js 参数
          //     workerNodeArgs: ['--max-old-space-size', '1024'],
          //     // 闲置时定时删除 worker 进程
          //     // 默认为 500ms
          //     // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
          //     poolTimeout: 2000,
          //     // 池(pool)分配给 worker 的工作数量
          //     // 默认为 200
          //     // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
          //     poolParallelJobs: 50,
          //     // 池(pool)的名称
          //     // 可以修改名称来创建其余选项都一样的池(pool)
          //     name: "my-pool"
          //   }
          // },
        ],
        // use: {
        //   loader:"node-loader",
        //   options: {
        //     name: "[path][name].[ext]",
        //   },
        // },
      },
      {
        test: /\.m?js$/,
        // 排除文件
        exclude: /(node_modules|bower_components)/,
        use: ["happypack/loader?id=babel", "thread-loader"],
        // use: {
        //  loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //     plugins: ["@babel/plugin-transform-runtime"],
        //   },
        // },
      },

      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: ["happypack/loader?id=graphql", "thread-loader"],
        // use: {
        //   loader: "raw-loader",
        // },
      },
    ],
  },
  // 在服务端 externals 用不了没办法加载js
  // externals: {
  //   //jquery通过script引入之后，全局中即有了 jQuery 变量
  //   jquery: "jquery",
  // },
  plugins: [
    // 加载该插件报错 找不到原因
    // new HardSourceWebpackPlugin({
    //   // // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
    //   // // 果清除了node_modules，则缓存也是如此
    //   // cacheDirectory: "node_modules/.cache/hard-source/[confighash]",
    //   // // Either an absolute path or relative to webpack's options.context.
    //   // // Sets webpack's recordsPath if not already set.
    //   // recordsPath: "node_modules/.cache/hard-source/[confighash]/records.json",
    //   // // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
    //   // // 置构建不同的缓存
    //   // configHash: function (webpackConfig) {
    //   //   // node-object-hash on npm can be used to build this.
    //   //   return require("node-object-hash")({ sort: false }).hash(webpackConfig);
    //   // },
    //   // // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
    //   // // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
    //   // environmentHash: {
    //   //   root: process.cwd(),
    //   //   directories: [],
    //   //   files: ["package-lock.json", "yarn.lock"],
    //   // },
    // }),

    // dll start dll配置 在服务端 DllPlugin 用不了没办法加载js, 只有客户端才能用
    // 运行DllPlugin配置文件
    // new WebpackBuildDllPlugin({
    //   // dllConfigPath: required, your Dll Config Path, support absolute path.
    //   dllConfigPath: path.resolve(__dirname, "./webpack.dll.config.js"),
    //   // forceBuild: default is {false}, when dependencies change, will rebuild DllReference files
    //   // if {true} it will build DllReference in once upon starting Webpack.
    //   forceBuild: false,
    //   //  manifest:   path.join(__dirname, './dist', '[name].manifest.json')
    // }),

    // // 告诉webpack使用了哪些第三方库代码
    // new webpack.DllReferencePlugin({
    //   // react 映射到json文件上去
    //   manifest: path.join(
    //     __dirname,
    //     "../../dist/dllFile",
    //     "react.manifest.json"
    //   ),
    // }),
    // dll end dll配置

    // 开启多进程
    new HappyPack({
      // 用唯一的标识符id来代表当前的HappyPack 处理一类特定的文件
      id: "cache",
      use: ["cache-loader"],
    }),
    new HappyPack({
      id: "node",
      use: ["node-loader"],
    }),
    new HappyPack({
      id: "babel",
      use: ["babel-loader"],
    }),
    new HappyPack({
      id: "graphql",
      use: ["raw-loader"],
    }),
    new WebpackBar(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      //配置清理文件 如果不清理则加！
      // cleanOnceBeforeBuildPatterns: ["!dllFile*"],
      // cleanOnceBeforeBuildPatterns: [
      //   "index.html",
      //   "**/index*.js",
      //   "**/index*.css",
      // !./image/*
      // ],
    }),
    //缓存包
    new webpack.HotModuleReplacementPlugin(),
    //使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
    //DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用
    // 如果是配置前端就很好注入插件
    new webpack.DefinePlugin({
      //也可以注入插件 能 注入vue 但是不能注入 Koa
      // vue,
      //不能注入 Koa
      // Koa,
      //注入一个环境变量
      // "process.env": { BUILD_TARGET: "BUILD_TARGET" },
      "process.env": { BUILD_TARGET: JSON.stringify("index") },
    }),

    // webpack.BannerPlugin 为每一个头文件添加一个文件，这里可以加入公共文件
    // source-map-support 源映射(Source Map)是一种数据格式，它存储了源代码和生成代码之间的位置映射关系。
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),

    // new webpack.BannerPlugin({
    //   banner: 'const koa = require("koa");',
    //   raw: true,
    //   entryOnly: false,
    // }),

    ...bannerPlugin.map((item) => {
      return new webpack.BannerPlugin({
        banner: item.variable
          ? `const ${item.variable} = require("${item.packageName}");`
          : `require("${item.packageName}");`,
        raw: true,
        entryOnly: false,
      });
    }),
  ],
};
// );
