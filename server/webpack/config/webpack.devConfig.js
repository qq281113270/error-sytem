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
  },
  devtool: "source-map", // 生产环境和开发环境判断
  mode: "development",
};
