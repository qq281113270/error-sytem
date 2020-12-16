
export default  {
  watch: true,
  watchOptions: {
   aggregateTimeout: 600,
   ignored: 'node_modules/**'
 },
  optimization: {
    // 压缩
    minimize: false,
  },
  devtool:"source-map",  // 生产环境和开发环境判断
  mode: "development",
};


// export default  {
//   watch: false,
//   optimization: {
//     // 压缩
//     minimize: true,
//   },
//   devtool:"eval",  // 生产环境和开发环境判断
//   mode: "production",
// };
