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
};
