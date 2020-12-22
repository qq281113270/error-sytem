import TerserPlugin from "terser-webpack-plugin";
import os from "os";
export default {
  watch: false,
  optimization: {
    // 压缩
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // sourceMap: "eval",
        // include: /\/includes/,// 包括
        exclude: /(node_modules|bower_components)/, // 排除
        extractComments: "all", //将注释剥离到单独的文件中
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
            inline: 0,
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
        parallel: os.cpus().length - 1,
        // minify: (file, sourceMap) => {
        //   // https://github.com/mishoo/UglifyJS2#minify-options
        //   const uglifyJsOptions = {
        //     /* your `uglify-js` package options */
        //   };

        //   if (sourceMap) {
        //     uglifyJsOptions.sourceMap = {
        //       content: sourceMap,
        //     };
        //   }

        //   return require('uglify-js').minify(file, uglifyJsOptions);
        // },
      }),
    ],
  },
  devtool: "eval", // 生产环境和开发环境判断
  mode: "production",
  plugins: [
    // This is only used in production mode
  ],
};
