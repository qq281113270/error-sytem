
// import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
export default {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    ignored: "node_modules/**",
  },
  optimization: {
    // 压缩
    minimize: false,
    minimizer: [],
   //  任何字符串：用于设置 process.env.NODE_ENV 的值。
    nodeEnv: "development",
    moduleIds: 'named',
    chunkIds: 'named',
  },
  devtool: "source-map", // 生产环境和开发环境判断
  mode: "development",
  plugins: [
    //这个Webpack插件将强制所有必需模块的整个路径与磁盘上实际路径的确切情况相匹配。
    // 使用此插件有助于缓解OSX上的开发人员不遵循严格的路径区分大小写的情况，
    // 这些情况将导致与其他开发人员或运行其他操作系统（需要正确使用大小写正确的路径）的构建箱发生冲突。
    // new CaseSensitivePathsPlugin()
  ]
};
