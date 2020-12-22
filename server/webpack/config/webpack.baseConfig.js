import "@babel/polyfill";
import webpack from "webpack";
import fs from "fs";
import path from "path";
import nodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import WebpackBar from "webpackbar";
import HappyPack from "happypack";
import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import os from "os";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import WebpackBuildDllPlugin from "webpack-build-dll-plugin";
import DllReferencePlugin from "webpack/lib/DllReferencePlugin";
import HardSourceWebpackPlugin from "hard-source-webpack-plugin";
import bannerPlugin from "./bannerPlugin";
const bannerPluginKeys = Object.keys(bannerPlugin);
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

export default {
  // 基目录，绝对路径，用于解析配置中的入口点和加载器。
  context: path.resolve(__dirname, "../../app"),
  // 入口
  entry: {
    // $vendor: ['vue'], // 公共包抽取
    index: [
      //添加编译缓存
      "webpack/hot/poll?1000",
      //  path.resolve(__dirname, "../../app/index.js")
      //入口主文件
      "index.js", // 如果没有配置 context 则需要这样引入  path.resolve(__dirname, "../../app/index.js")
    ],
  },

  // 是否监听文件
  watch: false,
  //dllPlugin 插件需要的包
  resolve: {
    // 模块查找优先顺序配置
    // 1.配置模块的查找规则,
    // 2.导入 require('sql')，会先在node_modules下查找，然后再到app下查找
    // 相对路径是相对于webpack.config.js文件所在的路劲
    // 详细教程: https://blog.csdn.net/u012987546/article/details/97389078
    modules: [
      path.resolve(__dirname, "../../node_modules"),
      path.resolve(__dirname, "../../app"),
    ],
    // 可以省略引用后缀
    extensions: [".tsx", ".ts", ".js", ".graphql", ".json"],
    // 1.不需要node polyfilss webpack 去掉了node polyfilss 需要自己手动添加
    alias: {
      buffer: "buffer",
      crypto: "crypto-browserify",
      vm: "vm-browserify",
      crypto: false,
      stream: "stream-browserify",
      "@": path.join(__dirname, "../../app"),
    },
    // 2.手动添加polyfills
    fallback: {
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      http: require.resolve("stream-http"),
    },
  },
  // 出口
  output: {
    path: path.join(__dirname, "../../dist"),
    // filename: 'index.js',
    // chunkFilename: '[id].js',
    // Chunk 配置
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
    library: "server",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    chunkLoadTimeout: 30000,
    devtoolModuleFilenameTemplate:
      "webpack://[namespace]/[resource-path]?[loaders]",
  },
  //选项决定文件系统快照的创建和失效方式。
  snapshot: {
    managedPaths: [path.resolve(__dirname, "../../node_modules")],
    immutablePaths: [],
    buildDependencies: {
      hash: true,
      timestamp: true,
    },
    module: {
      timestamp: true,
    },
    resolve: {
      timestamp: true,
    },
    resolveBuildDependencies: {
      hash: true,
      timestamp: true,
    },
  },
  bail: true,
  //启用编译缓存日志输出
  infrastructureLogging: {
    level: "log",
  },
  cache: {
    type: "filesystem", //  'memory' | 'filesystem'
    store: "pack",
    cacheDirectory: path.resolve(
      __dirname,
      "../../node_modules/.cache/webpack"
    ), // 默认将缓存存储在 node_modules/.cache/webpack
    // 缓存依赖，当缓存依赖修改时，缓存失效
    buildDependencies: {
      // 将你的配置添加依赖，更改配置时，使得缓存失效
      config: [__filename],
    },
  },

  // 打包优化配置
  optimization: {
    //告知 webpack 去决定每个模块使用的导出内容。这取决于 optimization.providedExports 选项。
    //由 optimization.usedExports 收集的信息会被其它优化手段或者代码生成使用，比如未使用的导出内容不会被生成， 当所有的使用都适配，导出名称会被处理做单个标记字符
    usedExports: "global",
    //告知 webpack 去辨识 package.json 中的 副作用 标记或规则，以跳过那些当导出不被使用且被标记不包含副作用的模块。
    sideEffects: true,
    //使用 optimization.emitOnErrors 在编译时每当有错误时，就会 emit asset。这样可以确保出错的 asset 被 emit 出来。关键错误会被 emit 到生成的代码中，并会在运行时报错
    emitOnErrors: true,
    //如果模块已经包含在所有父级模块中，告知 webpack 从 chunk 中检测出这些模块，或移除这些模块
    removeAvailableModules: true,
    //如果 chunk 为空，告知 webpack 检测或移除这些 chunk
    removeEmptyChunks: true,
    //告知 webpack 合并含有相同模块的 chunk
    mergeDuplicateChunks: true,
    //告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk，其方式是在已经加载过较大的 chunk 之后，就不再去加载这些 chunk 子集。
    flagIncludedChunks: true,
    /*
    允许控制导出处理(export mangling)。
     默认 optimization.mangleExports: 'deterministic' 会在 production 模式下 启用而其它情况会被禁用
    */
    mangleExports: true,
    //告知 webpack 去确定那些由模块提供的导出内容，为 export * from ... 生成更多高效的代码。
    providedExports: true,
    //告知 webpack 是否对未使用的导出内容，实施内部图形分析(graph analysis)。
    innerGraph: true,
    //在处理资产之后添加额外的散列编译通道，以获得正确的资产内容散列。如果realContentHash被设置为false，则使用内部数据来计算散列，当资产相同时，它可以更改。
    realContentHash: true,
    // Chunk start splitChunks [name].chunk  公共包抽取  vendor
    // 开启这个编译包更小
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    //
    splitChunks: {
      name: false,
      chunks: "all",
      // minSize: 20000,
      minRemainingSize: 0,
      // maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // vendor: {
        //     //第三方依赖
        //     priority: 1, //设置优先级，首先抽离第三方模块
        //     name: 'vendor',
        //     test: /node_modules/,
        //     chunks: 'initial',
        //     minSize: 0,
        //     minChunks: 1, //最少引入了1次
        // },
        // //缓存组
        // common: {
        //     //公共模块
        //     chunks: 'initial',
        //     name: 'common',
        //     minSize: 1000, //大小超过1000个字节
        //     minChunks: 3, //最少引入了3次
        // },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // Chunk end
  },
  //配置node环境
  target: "node",
  node: {
    __filename: true,
    __dirname: true,
    global: false,
  },

  //引入缓存
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?1000"],
    }),
    //将node_modules目录下的所有模块加入到externals中    告知 webpack  ，并忽略 externals 中的模块
    (() => {
      const nodeModules = {};
      fs.readdirSync(path.resolve(__dirname, "../../node_modules"))
        .filter((catalogue) => {
          return [".bin"].indexOf(catalogue) === -1;
        })
        .forEach((mod) => {
          if (mod.indexOf(".") === 0) return;
          nodeModules[mod] = "commonjs " + mod;
        });
      // console.log("nodeModules============", nodeModules);
      return nodeModules;
    })(),
  ],
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "../../app"),
        sideEffects: true,
      },
      {
        test: /\.node$/,
        use: [
          "happypack/loader?id=node&cacheDirectory=true",
          "thread-loader",
          "cache-loader",
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
        // 排除文件,因为这些包已经编译过，无需再次编译
        exclude: /(node_modules|bower_components)/,
        // use: {
        //   loader:"node-loader",
        //   options: {
        //     name: "[path][name].[ext]",
        //   },
        // },
      },
      {
        test: /\.m?js$/,
        // 排除文件,因为这些包已经编译过，无需再次编译
        exclude: /(node_modules|bower_components)/,
        use: [
          "happypack/loader?id=babel&cacheDirectory=true",
          "thread-loader",
          "cache-loader",
        ],
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
        // 排除文件,因为这些包已经编译过，无需再次编译
        exclude: /(node_modules|bower_components)/,
        use: [
          "happypack/loader?id=graphql&cacheDirectory=true",
          "thread-loader",
          "cache-loader",
        ],
        // use: {
        //   loader: "raw-loader",
        // },
      },
    ],
  },

  plugins: [
    // 加载该插件报错 找不到原因
    // new HardSourceWebpackPlugin({
    // // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
    // // 果清除了node_modules，则缓存也是如此
    // cacheDirectory: "node_modules/.cache/hard-source/[confighash]",
    // // Either an absolute path or relative to webpack's options.context.
    // // Sets webpack's recordsPath if not already set.
    // recordsPath: "node_modules/.cache/hard-source/[confighash]/records.json",
    // // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
    // // 置构建不同的缓存
    // configHash: function (webpackConfig) {
    //   // node-object-hash on npm can be used to build this.
    //   return require("node-object-hash")({ sort: false }).hash(webpackConfig);
    // },
    // // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
    // // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
    // environmentHash: {
    //   root: process.cwd(),
    //   directories: [],
    //   files: ["package-lock.json", "yarn.lock"],
    // },
    // }),

    // dll start dll配置 在服务端 DllPlugin 用不了没办法加载js, 只有客户端才能用
    // 运行DllPlugin配置文件
    // new WebpackBuildDllPlugin({
    //   // dllConfigPath: required, your Dll Config Path, support absolute path.
    //   dllConfigPath: path.resolve(__dirname, "./webpack.dll.config.js"),
    //   forceBuild: false,
    // }),

    //    告诉webpack使用了哪些第三方库代码
    // new webpack.DllReferencePlugin({
    //   // vue 映射到json文件上去
    //   manifest: path.join(__dirname, "../../dist/dllFile", "vue.manifest.json"),
    // }),
    // dll end dll配置
    // //体积包分析插件
    // new BundleAnalyzerPlugin(),

    //友好的错误WebPACK插件 错误提示插件
    //友好的错误认识webpackerrors WebPACK插件类  这是很容易添加类型的错误，所以如果你想看moreerrors得到处理
    new FriendlyErrorsPlugin(),
    //这个Webpack插件将强制所有必需模块的整个路径与磁盘上实际路径的确切情况相匹配。
    // 使用此插件有助于缓解OSX上的开发人员不遵循严格的路径区分大小写的情况，
    // 这些情况将导致与其他开发人员或运行其他操作系统（需要正确使用大小写正确的路径）的构建箱发生冲突。
    new CaseSensitivePathsPlugin(),
    // 开启多进程
    new HappyPack({
      id: "node",
      use: ["node-loader"],
      // 输出执行日志
      verbose: true,
      // 使用共享线程池
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: "babel",
      use: ["babel-loader"],
      // use: ["babel-loader", "unicode-loader"],
      // 输出执行日志
      verbose: true,
      // 使用共享线程池
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: "graphql",
      use: ["raw-loader"],
      // 输出执行日志
      verbose: true,
      // 使用共享线程池
      threadPool: happyThreadPool,
    }),
    // 编译进度条
    new WebpackBar(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      //配置清理文件 如果不清理则加 ！
      cleanOnceBeforeBuildPatterns: ["*", "!dllFile*"],
      // cleanOnceBeforeBuildPatterns: [
      //   "index.html",
      //   "**/index*.js",
      //   "**/index*.css",
      // !./image/*
      // ],
    }),
    //缓存包 热启动
    new webpack.HotModuleReplacementPlugin(),
    /* 当 HMR 替换时在浏览器控制台输出对用户更友好的模块名字信息 */
    // new webpack.NamedModulesPlugin(),
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
      "process.env": { BUILD_TARGET: "BUILD_TARGET" },
    }),

    // webpack.BannerPlugin 为每一个头文件添加一个文件，这里可以加入公共文件
    // source-map-support 源映射(Source Map)是一种数据格式，它存储了源代码和生成代码之间的位置映射关系。
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),

    // 这样利用原理可以动态加入公共库
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
