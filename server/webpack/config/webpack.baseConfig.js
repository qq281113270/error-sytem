import webpack from "webpack";
import { merge } from "webpack-merge";
import path from "path";
import nodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import WebpackBar from "webpackbar";

export default {
  entry: ["webpack/hot/poll?1000", "./app/index"],
  watch: true,
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "index.js",
    publicPath: "/",
    library: "server",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    chunkFilename: "[id].js",
    chunkLoadTimeout: 30000,
    devtoolModuleFilenameTemplate:
      "webpack://[namespace]/[resource-path]?[loaders]",
  },
  optimization: {
    // // 压缩
    // minimize: isEnvProduction,
  },
  target: "node",
  // devtool: webpackEnv ? "source-map" : "eval", // 生产环境和开发环境判断

  node: {
    __filename: true,
    __dirname: true,
  },
  // mode: "development",
  externals: [nodeExternals({ allowlist: ["webpack/hot/poll?1000"] })],
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },

      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: "raw-loader",
        },
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": { BUILD_TARGET: JSON.stringify("index") },
    }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
};
