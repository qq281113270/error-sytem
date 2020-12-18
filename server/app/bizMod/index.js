import * as abnormity from "./abnormity";

// export default class {
//   constructor(app, parentRouter) {
//     this.app = app;
//     this.router = parentRouter;
//     this.init();
//   }
//   init() {
//     new abnormity.router(this.app, this.router);
//   }
// }

export const router = (app, router) => {
  new abnormity.router(app, router);
};
