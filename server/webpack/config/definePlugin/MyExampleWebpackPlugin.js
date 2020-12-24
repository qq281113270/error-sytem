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
      compiler.hooks[hookName].tap("MyExampleWebpackPlugin:" + hookName, fn);
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

    //   compiler.hooks.compile.tap("MyPlugin", (params) => {
    //     console.log("以同步方式触及 compile 钩子。");
    //   });

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
