export default {
  watch: false,
  optimization: {
    // 压缩
    minimize: true,
    splitChunks: {
      name: false,
      chunks: "all", // all async initial
      // minSize: 30000,
      // maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devtool: "eval", // 生产环境和开发环境判断
  mode: "production",
};
