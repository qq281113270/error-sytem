import fs from "fs";
export default class MyExampleWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  write(data) {
    let { outputPath } = this.options;
    outputPath = outputPath + "/myVue.js";
    console.log("outputPath===", outputPath);
    fs.writeFileSync(outputPath, data);
  }
  // 做兼容
  hook(compiler, hookName, fn) {
    if (compiler.hooks) {
      compiler.hooks[hookName].tap("WebpackBar:" + hookName, fn);
    } else {
      compiler.plugin(hookName, fn);
    }
  }

  apply(compiler) {
    // var _this=this;
    let data = `
         export default class Vue {
                extends() {}
         }
    `;
    this.write.call(this, data);

    // 开始编译 只会调用一次
    this.hook(compiler, "afterPlugins", () => {
      console.log("afterPlugins======== 开始");
      this.write(data);
    });
    // 开始编译
    this.hook(compiler, "compile", () => {
      //编译中
      console.log("compile======");
    });
    // 编译中期
    this.hook(compiler, "invalid", () => {
      console.log("invalid==========");
    });
    // 编译完成
    this.hook(compiler, "done", () => {
      console.log("done========== 完成");
    });

    // compiler.hooks.emit.tapAsync("MyPlugin", (compiler, callback) => {
    //   // console.log("outputPath========", outputPath);
    //   console.log("以异步方式触及 run 钩子。");
    //   let data = `
    //   export default class Vue {
    //         extends() {}
    //   }
    // `;
    //   // this.write(data);
    //   callback();
    //   // fs.open(outputPath, "wx", (err, fd) => {
    //   // if (err) {
    //   //   if (err.code === "EEXIST") {
    //   //     console.error("myfile 已存在");
    //   //     return;
    //   //   }

    //   //   throw err;
    //   // }

    //   // fs.writeFile(outputPath, data, (err) => {
    //   //   if (err) throw err;
    //   //   console.log("文件已被写入");
    //   //   callback();
    //   // });
    //   // });
    // });

    //   console.log("compiler========", compiler);

    //   compiler.hooks.compile.tap("MyPlugin", (params) => {
    //     console.log("以同步方式触及 compile 钩子。");
    //   });

    //   compiler.hooks.run.tapAsync
    //   compiler.hooks.emit.tapAsync("MyPlugin", (compiler, callback) => {
    //     console.log("以异步方式触及 run 钩子。");
    //     callback();
    //   });

    // compiler.hooks.emit.tapPromise("MyPlugin", (compiler) => {
    //   return new Promise((resolve) => setTimeout(resolve, 10000)).then(() => {
    //     console.log("以具有延迟的异步方式触及 run 钩子");
    //   });
    // });
  }
}

// /*
// 	MIT License http://www.opensource.org/licenses/mit-license.php
// 	Author Tobias Koppers @sokra
// */

//  "use strict";
// import DllReferencePlugin from "webpack/lib/DllReferencePlugin";
// const { validate } = require("schema-utils");
// const { ConcatSource } = require("webpack-sources");
// const Compilation = require("webpack/lib/Compilation");
// const ModuleFilenameHelpers = require("webpack/lib//ModuleFilenameHelpers");
// const Template = require("webpack/lib/Template");

// // const schema = require("../schemas/plugins/BannerPlugin.json");

// /** @typedef {import("../declarations/plugins/BannerPlugin").BannerPluginArgument} BannerPluginArgument */
// /** @typedef {import("../declarations/plugins/BannerPlugin").BannerPluginOptions} BannerPluginOptions */
// /** @typedef {import("./Compiler")} Compiler */

// const wrapComment = str => {
// 	if (!str.includes("\n")) {
// 		return Template.toComment(str);
// 	}
// 	return `/*!\n * ${str
// 		.replace(/\*\//g, "* /")
// 		.split("\n")
// 		.join("\n * ")
// 		.replace(/\s+\n/g, "\n")
// 		.trimRight()}\n */`;
// };

// class MyExampleWebpackPlugin {
// 	/**
// 	 * @param {BannerPluginArgument} options options object
// 	 */
// 	constructor(options) {
// 		if (typeof options === "string" || typeof options === "function") {
// 			options = {
// 				banner: options
// 			};
// 		}

// 		// validate(schema, options, {
// 		// 	name: "Banner Plugin",
// 		// 	baseDataPath: "options"
// 		// });

// 		this.options = options;

// 		const bannerOption = options.banner;
// 		if (typeof bannerOption === "function") {
// 			const getBanner = bannerOption;
// 			this.banner = this.options.raw
// 				? getBanner
// 				: data => wrapComment(getBanner(data));
// 		} else {
// 			const banner = this.options.raw
// 				? bannerOption
// 				: wrapComment(bannerOption);
// 			this.banner = () => banner;
// 		}
// 	}

// 	/**
// 	 * Apply the plugin
// 	 * @param {Compiler} compiler the compiler instance
// 	 * @returns {void}
// 	 */
// 	apply(compiler) {
// 		const options = this.options;
// 		const banner = this.banner;
// 		const matchObject = ModuleFilenameHelpers.matchObject.bind(
// 			undefined,
// 			options
// 		);

// 		compiler.hooks.compilation.tap("BannerPlugin", compilation => {
// 			compilation.hooks.processAssets.tap(
// 				{
// 					name: "BannerPlugin",
// 					stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
// 				},
// 				() => {
// 					for (const chunk of compilation.chunks) {

// 						if (options.entryOnly && !chunk.canBeInitial()) {
// 							continue;
// 						}

// 						for (const file of chunk.files) {
// 							if (!matchObject(file)) {
// 								continue;
// 							}

// 							const data = {
// 								chunk,
// 								filename: file
// 							};
//                 console.log('banner=',banner)
// 							const comment = compilation.getPath(banner, data);

// 							compilation.updateAsset(
// 								file,
// 								old => new ConcatSource(comment, "\n", old)
// 							);
// 						}
// 					}
// 				}
// 			);
// 		});
// 	}
// }

// export  default    MyExampleWebpackPlugin
