require("@babel/polyfill");
require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("server", [], factory);
	else if(typeof exports === 'object')
		exports["server"] = factory();
	else
		root["server"] = factory();
})(this, function() {
return (() => {
var exports = {};
exports.id = "index";
exports.ids = ["index"];
exports.modules = {

/***/ "./app/bizMod/abnormity/bizMod/script/controller/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/controller/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _service = __webpack_require__(/*! ../service */ "./app/bizMod/abnormity/bizMod/script/service/index.js");

var _service2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_service);

class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', _service2.default.query); //添加service

    const data = await _service2.default.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

exports.default = Controller;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/index.js":
/*!********************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _resolvers = __webpack_require__(/*! ./resolvers */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/index.js");

var resolvers = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_resolvers);

var _typeDefs = __webpack_require__(/*! ./typeDefs */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/index.js");

var typeDefs = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

//脚本模块 
exports.default = {
  resolvers,
  typeDefs
};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Mutation/index.js":
/*!***************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Mutation/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const scriptAdd = exports.scriptAdd = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Query/index.js":
/*!************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Query/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const scriptQuery = exports.scriptQuery = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Subscription/index.js":
/*!*******************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Subscription/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const scriptTest = exports.scriptTest = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/index.js":
/*!******************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Subscription = exports.Query = exports.Mutation = undefined;


var _Mutation = __webpack_require__(/*! ./Mutation */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Mutation/index.js");

var Mutation = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Mutation);

var _Query = __webpack_require__(/*! ./Query */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Query/index.js");

var Query = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Query);

var _Subscription = __webpack_require__(/*! ./Subscription */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/resolvers/Subscription/index.js");

var Subscription = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Subscription);

//会员模块
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/index.js":
/*!*****************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/typeDefs.graphql");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/index.js":
/*!*****************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _router = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/bizMod/script/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_router).default;
  }
}));

var _schema = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/bizMod/script/graphql/schema/index.js");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_schema).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/router/index.js":
/*!************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/router/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _controller = __webpack_require__(/*! ../controller */ "./app/bizMod/abnormity/bizMod/script/controller/index.js");

var _controller2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_controller);

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

// koa 路由中间件
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new _koaRouter2.default({
      prefix: "/script" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", _controller2.default.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", _controller2.default.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", _controller2.default.edit);
  }

}

exports.default = router;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/service/index.js":
/*!*************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/service/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

exports.default = Service;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/controller/index.js":
/*!**************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/controller/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _service = __webpack_require__(/*! ../service */ "./app/bizMod/abnormity/bizMod/user/service/index.js");

var _service2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_service);

class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', _service2.default.query); //添加service

    const data = await _service2.default.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

exports.default = Controller;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/index.js":
/*!******************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _resolvers = __webpack_require__(/*! ./resolvers */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/index.js");

var resolvers = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_resolvers);

var _typeDefs = __webpack_require__(/*! ./typeDefs */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/index.js");

var typeDefs = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

//脚本模块
exports.default = {
  resolvers,
  typeDefs
};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Mutation/index.js":
/*!*************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Mutation/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userAdd = exports.userAdd = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Query/index.js":
/*!**********************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Query/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userQuery = exports.userQuery = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Subscription/index.js":
/*!*****************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Subscription/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userTest = exports.userTest = () => {};

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/index.js":
/*!****************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Subscription = exports.Query = exports.Mutation = undefined;


var _Mutation = __webpack_require__(/*! ./Mutation */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Mutation/index.js");

var Mutation = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Mutation);

var _Query = __webpack_require__(/*! ./Query */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Query/index.js");

var Query = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Query);

var _Subscription = __webpack_require__(/*! ./Subscription */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Subscription/index.js");

var Subscription = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Subscription);

//会员模块
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/index.js":
/*!***************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/typeDefs.graphql");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/index.js":
/*!***************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _router = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/bizMod/user/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_router).default;
  }
}));

var _schema = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/bizMod/user/graphql/schema/index.js");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_schema).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/router/index.js":
/*!**********************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/router/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _controller = __webpack_require__(/*! ../controller */ "./app/bizMod/abnormity/bizMod/user/controller/index.js");

var _controller2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_controller);

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

// koa 路由中间件
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new _koaRouter2.default({
      prefix: "/user" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", _controller2.default.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", _controller2.default.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", _controller2.default.edit);
  }

}

exports.default = router;

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/service/index.js":
/*!***********************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/service/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

exports.default = Service;

/***/ }),

/***/ "./app/bizMod/abnormity/graphql/schema/index.js":
/*!******************************************************!*\
  !*** ./app/bizMod/abnormity/graphql/schema/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _script = __webpack_require__(/*! ../../bizMod/script */ "./app/bizMod/abnormity/bizMod/script/index.js");

Object.defineProperty(exports, "scriptSchema", ({
  enumerable: true,
  get: function () {
    return _script.schema;
  }
}));

var _user = __webpack_require__(/*! ../../bizMod/user */ "./app/bizMod/abnormity/bizMod/user/index.js");

Object.defineProperty(exports, "userSchema", ({
  enumerable: true,
  get: function () {
    return _user.schema;
  }
}));

/***/ }),

/***/ "./app/bizMod/abnormity/index.js":
/*!***************************************!*\
  !*** ./app/bizMod/abnormity/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.schema = exports.router = undefined;



var _router = __webpack_require__(/*! ./router */ "./app/bizMod/abnormity/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1___default()(_router).default;
  }
}));

var _schema2 = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/abnormity/graphql/schema/index.js");

var _schema = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_schema2);

exports.schema = _schema; // export { schema as scriptSchema} from "./bizMod/script"; //scriptRouter 路由

/***/ }),

/***/ "./app/bizMod/abnormity/router/index.js":
/*!**********************************************!*\
  !*** ./app/bizMod/abnormity/router/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

var _script = __webpack_require__(/*! ../bizMod/script */ "./app/bizMod/abnormity/bizMod/script/index.js");

var _user = __webpack_require__(/*! ../bizMod/user */ "./app/bizMod/abnormity/bizMod/user/index.js");

// koa 路由中间件
//scriptRouter 路由  
//userRouter 路由  
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.twoLevelRoute = new _koaRouter2.default({
      prefix: "/abnormity" // 给路由统一加个前缀：

    });
    return this.twoLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 为script模块添加路由
    new _script.router(this.app, this.twoLevelRoute);
    new _user.router(this.app, this.twoLevelRoute); // 添加路由

    this.router.use(this.twoLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

}

exports.default = router;

/***/ }),

/***/ "./app/bizMod/index.js":
/*!*****************************!*\
  !*** ./app/bizMod/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.router = exports.schema = undefined;

var _abnormity = __webpack_require__(/*! ./abnormity */ "./app/bizMod/abnormity/index.js");

var _performance = __webpack_require__(/*! ./performance */ "./app/bizMod/performance/index.js");

var _utils = __webpack_require__(/*! @/utils */ "./app/utils/index.js");

const checkSchemas = (0, _utils.checkSchema)();

const schema = exports.schema = (() => {
  let typeDefs = {
    schema: "",
    schemas: []
  };
  let resolvers = {
    Mutation: {},
    Query: {},
    Subscription: {}
  }; // 动态添加模块

  const schemas = { ..._abnormity.schema,
    ..._performance.schema
  };
  const schemaKeys = Object.keys(schemas);

  for (let key of schemaKeys) {
    typeDefs.schema += schemas[key].typeDefs.schema + "\n";
    typeDefs.schemas.push(schemas[key].typeDefs.schema);
    checkSchemas(resolvers, schemas[key].resolvers);
  }

  return {
    typeDefs,
    resolvers
  };
})();

const router = exports.router = (app, router) => {
  // 动态添加模块
  new _abnormity.router(app, router);
  new _performance.router(app, router);
};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/controller/index.js":
/*!********************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/controller/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _service = __webpack_require__(/*! ../service */ "./app/bizMod/performance/bizMod/download/service/index.js");

var _service2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_service);

class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', _service2.default.query); //添加service

    const data = await _service2.default.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

exports.default = Controller;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/index.js":
/*!************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _resolvers = __webpack_require__(/*! ./resolvers */ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/index.js");

var resolvers = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_resolvers);

var _typeDefs = __webpack_require__(/*! ./typeDefs */ "./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/index.js");

var typeDefs = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

//脚本模块
exports.default = {
  resolvers,
  typeDefs
};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Mutation/index.js":
/*!*******************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Mutation/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const downloadAdd = exports.downloadAdd = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Query/index.js":
/*!****************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Query/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const downloadQuery = exports.downloadQuery = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Subscription/index.js":
/*!***********************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Subscription/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const downloadTest = exports.downloadTest = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/index.js":
/*!**********************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Subscription = exports.Query = exports.Mutation = undefined;


var _Mutation = __webpack_require__(/*! ./Mutation */ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Mutation/index.js");

var Mutation = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Mutation);

var _Query = __webpack_require__(/*! ./Query */ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Query/index.js");

var Query = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Query);

var _Subscription = __webpack_require__(/*! ./Subscription */ "./app/bizMod/performance/bizMod/download/graphql/schema/resolvers/Subscription/index.js");

var Subscription = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Subscription);

//会员模块
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/index.js":
/*!*********************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/typeDefs.graphql");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/index.js":
/*!*********************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _router = __webpack_require__(/*! ./router */ "./app/bizMod/performance/bizMod/download/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_router).default;
  }
}));

var _schema = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/bizMod/download/graphql/schema/index.js");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_schema).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/router/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/router/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _controller = __webpack_require__(/*! ../controller */ "./app/bizMod/performance/bizMod/download/controller/index.js");

var _controller2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_controller);

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

// koa 路由中间件
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new _koaRouter2.default({
      prefix: "/download" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", _controller2.default.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", _controller2.default.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", _controller2.default.edit);
  }

}

exports.default = router;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/service/index.js":
/*!*****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/service/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

exports.default = Service;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/controller/index.js":
/*!*******************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/controller/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _service = __webpack_require__(/*! ../service */ "./app/bizMod/performance/bizMod/network/service/index.js");

var _service2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_service);

class Controller {
  static async query(ctx, next) {
    console.log('Controller_query12341==');
    const {
      query = {},
      response,
      request
    } = ctx;
    const {
      body = {// mutation = '', variables = {}
      }
    } = request;
    const parameter = query; // 获取请求参数

    console.log('service.query==', _service2.default.query); //添加service

    const data = await _service2.default.query(ctx, next, parameter);
    ctx.response.body = data;
  }

  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    // //添加service
    // const data = await userService.add(ctx, next, parameter);
    // const getMessage = (data) => {
    //   const { status } = data;
    //   const message = {
    //     1: () =>
    //       merge(unsupported, {
    //         msg: "该用户名已经被注册过,请重新输入用户名",
    //       }),
    //     2: () =>
    //       merge(unsupported, {
    //         msg: "该手机号码已经被注册过,请重新输入手机号码",
    //       }),
    //     3: () => ({
    //       code: 200,
    //       msg: "注册成功",
    //     }),
    //   };
    // return message[status]();
    // };

    ctx.response.body = parameter;
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await userService.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => merge(unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => merge(unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

exports.default = Controller;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/index.js":
/*!***********************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _resolvers = __webpack_require__(/*! ./resolvers */ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/index.js");

var resolvers = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_resolvers);

var _typeDefs = __webpack_require__(/*! ./typeDefs */ "./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/index.js");

var typeDefs = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

//脚本模块
exports.default = {
  resolvers,
  typeDefs
};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Mutation/index.js":
/*!******************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Mutation/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const networkAdd = exports.networkAdd = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Query/index.js":
/*!***************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Query/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const networkQuery = exports.networkQuery = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Subscription/index.js":
/*!**********************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Subscription/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const networkTest = exports.networkTest = () => {};

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/index.js":
/*!*********************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Subscription = exports.Query = exports.Mutation = undefined;


var _Mutation = __webpack_require__(/*! ./Mutation */ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Mutation/index.js");

var Mutation = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Mutation);

var _Query = __webpack_require__(/*! ./Query */ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Query/index.js");

var Query = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Query);

var _Subscription = __webpack_require__(/*! ./Subscription */ "./app/bizMod/performance/bizMod/network/graphql/schema/resolvers/Subscription/index.js");

var Subscription = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Subscription);

//会员模块
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/index.js":
/*!********************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/typeDefs.graphql");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/index.js":
/*!********************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _router = __webpack_require__(/*! ./router */ "./app/bizMod/performance/bizMod/network/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_router).default;
  }
}));

var _schema = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/bizMod/network/graphql/schema/index.js");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_schema).default;
  }
}));

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/router/index.js":
/*!***************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/router/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _controller = __webpack_require__(/*! ../controller */ "./app/bizMod/performance/bizMod/network/controller/index.js");

var _controller2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_controller);

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

// koa 路由中间件
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.threeLevelRoute = new _koaRouter2.default({
      prefix: "/network" // 给路由统一加个前缀：

    });
    return this.threeLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 注册路由
    this.query();
    this.add();
    this.edit();
    this.router.use(this.threeLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  query() {
    // 添加 接口
    this.threeLevelRoute.get("/query", _controller2.default.query);
  }

  add() {
    // 添加 接口
    this.threeLevelRoute.post("/add", _controller2.default.add);
  }

  edit() {
    // 添加 接口
    this.threeLevelRoute.post("/edit", _controller2.default.edit);
  }

}

exports.default = router;

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/service/index.js":
/*!****************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/service/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

class Service {
  static async query(ctx, next, parameter) {
    return {
      name: "Service",
      ...parameter
    };
  } // static list(page) {
  //     console.log('page=', page);
  //     const dataList = {
  //         list: [
  //             {
  //                 time: '2019-7-10',
  //                 id: 1,
  //                 title: 'this is news 1',
  //                 url: '/news/1',
  //             },
  //             {
  //                 time: '2019-8-10',
  //                 id: 2,
  //                 title: 'this is news 2',
  //                 url: '/news/2',
  //             },
  //         ],
  //     };
  //     return dataList.list[page] || {};
  // }
  // //注册用户
  // static async add(ctx, next, parameter) {
  //     const { username: name, phone, password } = parameter;
  //     /*
  //  1 查询用户名是否被注册过，
  //  2 查询手机号码是否被注册过
  //  3 如果都没有被注册那么就可以注册
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         phone,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (userInfo && userInfo.id) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     const data = await addUser({
  //         name,
  //         phone,
  //         password,
  //     });
  //     if (data) {
  //         return {
  //             status: 3,
  //         };
  //     }
  // }
  // // 编辑用户
  // static async edit(ctx, next, parameter) {}
  // // 数据库中查询用户
  // static async queryUser(...ags) {
  //     const userData = await queryUser(...ags);
  //     return userData;
  // }
  // // 登录
  // static async login(ctx, next, parameter = {}) {
  //     const { username: name, phone, password } = parameter;
  //     const { request, response,cookies } = ctx;
  //     /*
  //   1.先查询用户名是否正确，
  //   2.查询用户和密码是否正确
  //   3.创建token,存储到redis中
  //   4.把用户信息挂载response中
  // */
  //     let userInfo = await this.queryUser({
  //         name,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 1,
  //         };
  //     }
  //     userInfo = await this.queryUser({
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     if (!userInfo) {
  //         return {
  //             status: 2,
  //         };
  //     }
  //     userInfo = await queryUser({
  //         name,
  //         password,
  //     });
  //     userInfo = userInfo.length >= 1 ? userInfo[0] : null;
  //     /*
  //  创建 createToken
  // */
  //     const token = await createToken(userInfo);
  //     delete userInfo.password;
  //     ctx.response.userInfo = userInfo;
  //     console.log('setExpirationTime=', setExpirationTime());
  //     // console.log('token=', token);
  //     // console.log('request=', request);
  //     // console.log('session=', session);
  //    console.log('cookies===',cookies)
  //     // cookie.expires = false;
  //     // cookie.maxAge = 5 * 60 * 1000;
  //     cookies.set('token', token, {
  //         httpOnly: false,
  //         overwrite: false,
  //         // expires: setExpirationTime(),
  //     });
  //     if (userInfo) {
  //         //登录成功
  //         return {
  //             status: 3,
  //             token,
  //             userInfo,
  //         };
  //     }
  // }


}

exports.default = Service;

/***/ }),

/***/ "./app/bizMod/performance/graphql/schema/index.js":
/*!********************************************************!*\
  !*** ./app/bizMod/performance/graphql/schema/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _download = __webpack_require__(/*! ../../bizMod/download */ "./app/bizMod/performance/bizMod/download/index.js");

Object.defineProperty(exports, "downloadSchema", ({
  enumerable: true,
  get: function () {
    return _download.schema;
  }
}));

var _network = __webpack_require__(/*! ../../bizMod/network */ "./app/bizMod/performance/bizMod/network/index.js");

Object.defineProperty(exports, "networkSchema", ({
  enumerable: true,
  get: function () {
    return _network.schema;
  }
}));

/***/ }),

/***/ "./app/bizMod/performance/index.js":
/*!*****************************************!*\
  !*** ./app/bizMod/performance/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.schema = exports.router = undefined;



var _router = __webpack_require__(/*! ./router */ "./app/bizMod/performance/router/index.js");

Object.defineProperty(__webpack_exports__, "router", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_1___default()(_router).default;
  }
}));

var _schema2 = __webpack_require__(/*! ./graphql/schema */ "./app/bizMod/performance/graphql/schema/index.js");

var _schema = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_schema2);

exports.schema = _schema; // export { schema as scriptSchema} from "./bizMod/script"; //scriptRouter 路由

/***/ }),

/***/ "./app/bizMod/performance/router/index.js":
/*!************************************************!*\
  !*** ./app/bizMod/performance/router/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

var _network = __webpack_require__(/*! ../bizMod/network */ "./app/bizMod/performance/bizMod/network/index.js");

var _download = __webpack_require__(/*! ../bizMod/download */ "./app/bizMod/performance/bizMod/download/index.js");

// koa 路由中间件
//networkRouter 路由  
//downloadRouter 路由  
class router {
  constructor(app, parentRouter) {
    this.app = app;
    this.router = parentRouter;
    this.init();
  }

  createRouter() {
    this.twoLevelRoute = new _koaRouter2.default({
      prefix: "/performance" // 给路由统一加个前缀：

    });
    return this.twoLevelRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 为script模块添加路由
    new _network.router(this.app, this.twoLevelRoute);
    new _download.router(this.app, this.twoLevelRoute); // 添加路由

    this.router.use(this.twoLevelRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

}

exports.default = router;

/***/ }),

/***/ "./app/config/constant.js":
/*!********************************!*\
  !*** ./app/config/constant.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tokenExpires = exports.tokenExpires = 30 * 60 * 1000; // 设置如果没有请求 30分钟token登录失效

const port = exports.port = 3100;

/***/ }),

/***/ "./app/config/db.js":
/*!**************************!*\
  !*** ./app/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const env = "development"; // 环境参数

let MYSQL_CONF = null;

if (env === 'development') {
  exports.MYSQL_CONF = MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'admin',
    // charset:'utf8mb4',   //字符集一定要写，否则表情包存储不了
    multipleStatements: true // 是否许一个query中有多个MySQL语句 （默认：false）

  };
}

if (env === 'production') {
  exports.MYSQL_CONF = MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'admin',
    charset: 'utf8mb4',
    //字符集一定要写，否则表情包存储不了
    multipleStatements: true // 是否许一个query中有多个MySQL语句 （默认：false）

  };
}

exports.MYSQL_CONF = MYSQL_CONF;

/***/ }),

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _db = __webpack_require__(/*! ./db.js */ "./app/config/db.js");

Object.keys(_db).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _db[key];
    }
  });
});

var _redis = __webpack_require__(/*! ./redis.js */ "./app/config/redis.js");

Object.keys(_redis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _redis[key];
    }
  });
});

var _token = __webpack_require__(/*! ./token.js */ "./app/config/token.js");

Object.keys(_token).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _token[key];
    }
  });
});

var _constant = __webpack_require__(/*! ./constant.js */ "./app/config/constant.js");

Object.keys(_constant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constant[key];
    }
  });
});

/***/ }),

/***/ "./app/config/redis.js":
/*!*****************************!*\
  !*** ./app/config/redis.js ***!
  \*****************************/
/***/ ((module) => {

"use strict";


const env = "development"; // 环境参数

let REDIS_CONF = null;

if (env === 'development') {
  REDIS_CONF = {
    host: '127.0.0.1',
    //地址
    port: '6378',
    // 端口
    options: {
      auth_pass: 123456 // 密码

    }
  };
}

if (env === 'production') {
  REDIS_CONF = {
    host: '127.0.0.1',
    port: '6378',
    options: {
      auth_pass: 123456
    }
  };
}

module.exports = {
  REDIS_CONF
};

/***/ }),

/***/ "./app/config/token.js":
/*!*****************************!*\
  !*** ./app/config/token.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setExpirationTime = undefined;

var _constant = __webpack_require__(/*! ./constant */ "./app/config/constant.js");

const setExpirationTime = exports.setExpirationTime = () => {
  const millisecond = new Date().getTime();
  const expiresTime = new Date(millisecond + _constant.tokenExpires); //一天后过期

  return expiresTime; // da.toUTCString(); //将 1598789234953这种格式的转换成=> "Sat, 29 Aug 2020 12:06:33 GMT"
};

/***/ }),

/***/ "./app/constant/httpCode.js":
/*!**********************************!*\
  !*** ./app/constant/httpCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const graphqlError = {
  code: 400,
  msg: "请求参数有误，graphql语法错误"
};
const unsupported = {
  //对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。
  code: 415,
  msg: "服务器已经理解请求，但是拒绝执行它"
};
const unauthorized = {
  // 当前请求需要用户验证. 如果验证不通过则返回401
  code: 401,
  msg: "当前请求需要用户验证."
};
exports.graphqlError = graphqlError;
exports.unsupported = unsupported;
exports.unauthorized = unauthorized;

/***/ }),

/***/ "./app/constant/index.js":
/*!*******************************!*\
  !*** ./app/constant/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _httpCode = __webpack_require__(/*! ./httpCode */ "./app/constant/httpCode.js");

Object.keys(_httpCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _httpCode[key];
    }
  });
});

/***/ }),

/***/ "./app/controller/user.js":
/*!********************************!*\
  !*** ./app/controller/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _user = __webpack_require__(/*! ../service/user */ "./app/service/user.js");

var _user2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_user);

var _constant = __webpack_require__(/*! ../constant */ "./app/constant/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./app/utils/index.js");

class Controller {
  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await _user2.default.add(ctx, next, parameter);

    const getMessage = data => {
      const {
        status
      } = data;
      const message = {
        1: () => (0, _utils.merge)(_constant.unsupported, {
          msg: "该用户名已经被注册过,请重新输入用户名"
        }),
        2: () => (0, _utils.merge)(_constant.unsupported, {
          msg: "该手机号码已经被注册过,请重新输入手机号码"
        }),
        3: () => ({
          code: 200,
          msg: "注册成功"
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await _user2.default.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => (0, _utils.merge)(_constant.unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => (0, _utils.merge)(_constant.unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

exports.default = Controller;

/***/ }),

/***/ "./app/db/checkTable.js":
/*!******************************!*\
  !*** ./app/db/checkTable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CheckTable = undefined;

var _mysql = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");

const {
  MYSQL_CONF
} = __webpack_require__(/*! ../config/db */ "./app/config/db.js");

class CheckTable {
  constructor() {
    this.tables = [{
      name: "user",
      sql: `CREATE TABLE user(
                    id INT(11) PRIMARY KEY  auto_increment primary key,
                    name VARCHAR(25),
                    phone VARCHAR(200),
                    password VARCHAR(255)
                ) AUTO_INCREMENT=1;
           `
    }, {
      name: 'collect',
      sql: `
         CREATE TABLE collect(
              id INT(11) PRIMARY KEY,
              name VARCHAR(25)  NOT NULL,
              phone INT(11)  NOT NULL,
              user_id INT(11)  NOT NULL,
              FOREIGN KEY(user_id) REFERENCES user(id)
         );
         `
    }, {
      name: 'code',
      sql: `
          CREATE TABLE code(
            id INT(11) PRIMARY KEY,
            name VARCHAR(25),
            collect_id INT(11),
            FOREIGN KEY(collect_id) REFERENCES collect(id),
            user_id INT(11),
            FOREIGN KEY(user_id) REFERENCES user(id)
            );
          `
    }, {
      name: 'role',
      sql: `
        CREATE TABLE role(
          id INT(11) PRIMARY KEY,
          name VARCHAR(25),
          root TINYINT(2)
          );
        `
    }];
    this.init();
  }

  init() {
    this.tables.forEach(table => {
      this.queryTable(table);
    });
  }

  createTable() {}

  async checkTable(data, table) {
    if (data.length == 0) {
      await (0, _mysql.exec)(table.sql).then(data => {
        console.log("创建表成功");
      }).catch(error => {
        console.log("创建表失败=", error);
      });
    }
  }

  async queryTable(table) {
    const sql = `
           SELECT
           TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
           WHERE TABLE_SCHEMA='${MYSQL_CONF.database}' 
           AND TABLE_NAME= '${table.name}'`;
    await (0, _mysql.exec)(sql).then(async data => {
      await this.checkTable(data, table);
    }).catch(() => {});
  }

}

exports.CheckTable = CheckTable;

/***/ }),

/***/ "./app/db/index.js":
/*!*************************!*\
  !*** ./app/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _checkTable = __webpack_require__(/*! ./checkTable */ "./app/db/checkTable.js");

Object.defineProperty(exports, "CheckTable", ({
  enumerable: true,
  get: function () {
    return _checkTable.CheckTable;
  }
}));

var _mysql = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");

Object.defineProperty(exports, "connection", ({
  enumerable: true,
  get: function () {
    return _mysql.connection;
  }
}));
Object.defineProperty(exports, "exec", ({
  enumerable: true,
  get: function () {
    return _mysql.exec;
  }
}));

var _user = __webpack_require__(/*! ./user */ "./app/db/user.js");

Object.defineProperty(exports, "addUser", ({
  enumerable: true,
  get: function () {
    return _user.addUser;
  }
}));
Object.defineProperty(exports, "deleteUser", ({
  enumerable: true,
  get: function () {
    return _user.deleteUser;
  }
}));
Object.defineProperty(exports, "queryUser", ({
  enumerable: true,
  get: function () {
    return _user.queryUser;
  }
}));

/***/ }),

/***/ "./app/db/mysql.js":
/*!*************************!*\
  !*** ./app/db/mysql.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.exec = exports.connection = undefined;


var _mysql = __webpack_require__(/*! mysql */ "mysql");

var _mysql2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_mysql);

var _index = __webpack_require__(/*! ../config/index */ "./app/config/index.js");

// 创建链接对象
const connection = _mysql2.default.createConnection(_index.MYSQL_CONF); // 统一执行 sql 的函数


const exec = async sql => {
  return await new Promise((resolve, reject) => {
    console.log('sql=', sql);
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
    });
  });
};

exports.connection = connection;
exports.exec = exec;

/***/ }),

/***/ "./app/db/user.js":
/*!************************!*\
  !*** ./app/db/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.queryUser = exports.deleteUser = exports.addUser = undefined;

var _mysql = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");

// 添加用户
const addUser = async ({
  name,
  phone,
  password
}) => {
  const sql = `insert into user(name,phone,password) values('${name}','${phone}',md5('${password}'));`;
  return await (0, _mysql.exec)(sql);
}; //查询用户


const queryUser = async (andConditionData = {}, orConditionData = {}, sql) => {
  const andKeys = Object.keys(andConditionData);
  const orKeys = Object.keys(orConditionData);

  if (sql) {
    return await (0, _mysql.exec)(sql);
  }

  sql = `select * from user where `;
  andKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${andConditionData[key]}') and` : ` ${key}='${andConditionData[key]}' and`;
  });
  orKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${orConditionData[key]}') or` : ` ${key}='${orConditionData[key]}' or`;
  });
  sql = andKeys.length >= 1 && orKeys.length == 0 ? sql.substring(0, sql.length - 3) : orKeys.length >= 1 ? sql.substring(0, sql.length - 2) : sql;
  return await (0, _mysql.exec)(sql);
}; //删除用户


const deleteUser = async id => {
  const sql = `DELETE  FROM user  WHERE id=${id};`;
  return await (0, _mysql.exec)(sql);
}; // 导出


exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.queryUser = queryUser;

/***/ }),

/***/ "./app/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./app/graphql/schema/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.schema = undefined;


var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _user = __webpack_require__(/*! ./user */ "./app/graphql/schema/user/index.js");

var _user2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_user);

var _bizMod = __webpack_require__(/*! ../../bizMod */ "./app/bizMod/index.js");

var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/graphql/schema/typeDefs.graphql");

var _typeDefs2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

var _utils = __webpack_require__(/*! @/utils */ "./app/utils/index.js");

//会员模块
const checkSchemas = (0, _utils.checkSchema)();

const schema = exports.schema = (() => {
  let typeDefs = {
    schema: "",
    schemas: []
  };
  let resolvers = {
    Mutation: {},
    Query: {},
    Subscription: {}
  };
  const schemas = {
    //添加最外层模块
    user: _user2.default,
    bizMod: _bizMod.schema
  };
  const schemaKeys = Object.keys(schemas);
  typeDefs.schema = _typeDefs2.default + "\n" + typeDefs.schema;

  for (let key of schemaKeys) {
    typeDefs.schema += schemas[key].typeDefs.schema + "\n";

    if (key !== "bizMod") {
      typeDefs.schemas.push(schemas[key].typeDefs.schema);
    }

    checkSchemas(resolvers, schemas[key].resolvers);
  }

  typeDefs.schemas = [_typeDefs2.default, ...typeDefs.schemas, ..._bizMod.schema.typeDefs.schemas]; //

  const schemaValidationErrors = (0, _graphql.validateSchema)((0, _graphql.buildSchema)(`
   
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  type Query {
      dummy: String
  }
  type Mutation {
      dummy: String
  }
  type Subscription {
      dummy: String
  }
  schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
  }
   
  
  type Playlist {
    id: ID!
    title: String!
    songs: [Song]!
    favorite: Boolean!
  }
  
  input UpdatedPlaylist {
    id: ID!
    title: String
    songs: [ID!]
    favorite: Boolean
  }
  
  input NewPlaylist {
    title: String
    songs: [ID!]
    favorite: Boolean
  }
  
  extend type Query {
    Playlist(id: ID!): Playlist!
    allPlaylists: [Playlist]!
  }
  
  extend type Mutation {
    newPlaylist(input: NewPlaylist!): Playlist!
    updatePlaylist(input: UpdatedPlaylist!): Playlist!
  }
  `));
  console.log('schemaValidationErrors=========', schemaValidationErrors);

  if (schemaValidationErrors.length > 0) {
    // Return 500: Internal Server Error if invalid schema.
    response.status = 500;
    return resolve({
      errors: schemaValidationErrors
    });
  }

  return {
    typeDefs,
    resolvers
  };
})();

/***/ }),

/***/ "./app/graphql/schema/user/index.js":
/*!******************************************!*\
  !*** ./app/graphql/schema/user/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _resolvers = __webpack_require__(/*! ./resolvers */ "./app/graphql/schema/user/resolvers/index.js");

var resolvers = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_resolvers);

var _typeDefs = __webpack_require__(/*! ./typeDefs */ "./app/graphql/schema/user/typeDefs/index.js");

var typeDefs = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs);

//会员模块
exports.default = {
  resolvers,
  typeDefs
};

/***/ }),

/***/ "./app/graphql/schema/user/resolvers/Mutation/index.js":
/*!*************************************************************!*\
  !*** ./app/graphql/schema/user/resolvers/Mutation/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userEditor = exports.userEditor = () => {};

/***/ }),

/***/ "./app/graphql/schema/user/resolvers/Query/index.js":
/*!**********************************************************!*\
  !*** ./app/graphql/schema/user/resolvers/Query/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userGet = exports.userGet = () => {};

/***/ }),

/***/ "./app/graphql/schema/user/resolvers/Subscription/index.js":
/*!*****************************************************************!*\
  !*** ./app/graphql/schema/user/resolvers/Subscription/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const userSubscription = exports.userSubscription = () => {};

/***/ }),

/***/ "./app/graphql/schema/user/resolvers/index.js":
/*!****************************************************!*\
  !*** ./app/graphql/schema/user/resolvers/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.Subscription = exports.Query = exports.Mutation = undefined;


var _Mutation = __webpack_require__(/*! ./Mutation */ "./app/graphql/schema/user/resolvers/Mutation/index.js");

var Mutation = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Mutation);

var _Query = __webpack_require__(/*! ./Query */ "./app/graphql/schema/user/resolvers/Query/index.js");

var Query = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Query);

var _Subscription = __webpack_require__(/*! ./Subscription */ "./app/graphql/schema/user/resolvers/Subscription/index.js");

var Subscription = _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_0___default()(_Subscription);

//会员模块
exports.Mutation = Mutation;
exports.Query = Query;
exports.Subscription = Subscription;

/***/ }),

/***/ "./app/graphql/schema/user/typeDefs/index.js":
/*!***************************************************!*\
  !*** ./app/graphql/schema/user/typeDefs/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _typeDefs = __webpack_require__(/*! ./typeDefs.graphql */ "./app/graphql/schema/user/typeDefs/typeDefs.graphql");

Object.defineProperty(__webpack_exports__, "schema", ({
  enumerable: true,
  get: function () {
    return _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeDefs).default;
  }
}));

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


__webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");

var _koa = __webpack_require__(/*! koa */ "koa");

var _koa2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koa);

var _utils = __webpack_require__(/*! ./utils */ "./app/utils/index.js");

var _index = __webpack_require__(/*! ./db/index.js */ "./app/db/index.js");

var _redis = __webpack_require__(/*! ./redis */ "./app/redis/index.js");

var _index2 = __webpack_require__(/*! ./routes/index */ "./app/routes/index.js");

var _index3 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_index2);

var _killPort = __webpack_require__(/*! kill-port */ "kill-port");

var _killPort2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_killPort);

var _config = __webpack_require__(/*! ./config */ "./app/config/index.js");

var _myVue = __webpack_require__(/*! myVue */ "./app/myVue.js");

var _myVue2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_myVue);

class App {
  constructor() {
    this.app = new _koa2.default();
    this.init();
  }

  async init() {
    // redis链接
    await this.connectRedis(); // 数据库连接

    await this.connectSql(); //加载路由

    this.addRoute(); // 设置监听端口

    this.listen();
  }

  async connectRedis() {
    await (0, _utils.promise)((reslove, reject) => {
      _redis.Redis.connect(() => {
        console.log("Redis 链接成功");
        reslove();
      });

      _redis.Redis.error(() => {
        console.log("Redis 链接错误");
        reject();
      });
    });
  }

  async connectSql() {
    await (0, _utils.promise)((reslove, reject) => {
      _index.connection.connect(err => {
        if (err) {
          console.log("数据库连失败");
          reject();
          throw err;
        }

        new _index.CheckTable();
        console.log("mysql数据库连接成功");
        reslove();
      });
    });
  }

  addRoute() {
    // 导入路由
    new _index3.default(this.app);
  }

  listen() {
    // try {
    //   kill(port, "tcp");
    // } catch (e) {}
    this.server = this.app.listen(_config.port, () => {
      console.log(`服务器启动成功:http://localhost:${_config.port}/`);
    });
    this.server.setTimeout(5 * 60 * 1000);
  }

}

exports.default = new App();

/***/ }),

/***/ "./app/middleware/common.js":
/*!**********************************!*\
  !*** ./app/middleware/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");

var _koaBodyparser2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaBodyparser);

var _koa2Cors = __webpack_require__(/*! koa2-cors */ "koa2-cors");

var _koa2Cors2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koa2Cors);

var _koaCookie = __webpack_require__(/*! koa-cookie */ "koa-cookie");

var _koaCookie2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaCookie);

const common = (app, router) => {
  // 处理404
  // app.use(function* (next) {
  //     try {
  //         yield* next;
  //     } catch (e) {
  //         this.status = 500;
  //         this.body = '500';
  //     }
  //     if (parseInt(this.status) === 404) {
  //         this.body = '404';
  //     }
  // });
  //处理500
  // router.get('/', function* (next) {
  //     throw new Error('500');
  // });
  // 添加获取参数中间件
  app.use((0, _koaBodyparser2.default)()); // 添加 cookie

  app.use((0, _koaCookie2.default)()); // 添加跨域
  // app.use(async (ctx, next) => {
  //     console.log(ctx.request.headers);
  //     // if( req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com"
  //     //     || req.headers.origin.toLowerCase() =="http://127.0.0.1" ) {
  //     //     //设置允许跨域的域名，*代表允许任意域名跨域
  //     //     res.header("Access-Control-Allow-Origin", req.headers.origin);
  //     // }
  //     ctx.set('Cache-Control','no-cache')
  //     //设置允许跨域的域名，*代表允许任意域名跨域
  //     ctx.set('Access-Control-Allow-Origin', '*');
  //     //允许的header类型
  //     ctx.set('Access-Control-Allow-Headers', 'content-type');
  //     // 设置 跨域 cookie
  //  ctx.set('Access-Control-Allow-Credentials', true);
  //     //跨域允许的请求方式
  //     ctx.set('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  //     //     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  //     //     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //     // await next();
  //     if (ctx.method == 'OPTIONS') {
  //         ctx.body = 200;
  //     } else {
  //         await next();
  //     }
  // });
  // 跨域

  app.use((0, _koa2Cors2.default)({
    // origin: ['http://localhost:3000','http://127.0.0.1:3000'],    // 前端地址
    credentials: true
  }));
};

exports.default = common;

/***/ }),

/***/ "./app/middleware/index.js":
/*!*********************************!*\
  !*** ./app/middleware/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.common = undefined;


var _common = __webpack_require__(/*! ./common */ "./app/middleware/common.js");

var _common2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_common);

exports.common = _common2.default;

/***/ }),

/***/ "./app/myVue.js":
/*!**********************!*\
  !*** ./app/myVue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

class Vue {
  extends() {}

}

exports.default = Vue;

/***/ }),

/***/ "./app/redis/index.js":
/*!****************************!*\
  !*** ./app/redis/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.RedisClass = exports.redisClient = exports.Redis = undefined;


var _jwt = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");

Object.keys(_jwt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jwt[key];
    }
  });
});

var _user = __webpack_require__(/*! ./user */ "./app/redis/user.js");

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _user[key];
    }
  });
});

var _redis = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");

var _redis2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_redis);

exports.Redis = _redis.Redis;
exports.redisClient = _redis.redisClient;
exports.RedisClass = _redis2.default;

/***/ }),

/***/ "./app/redis/jwt.js":
/*!**************************!*\
  !*** ./app/redis/jwt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.userIdCheckToken = exports.destroyToken = exports.checkToken = exports.createToken = undefined;


var _redis = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");

var _jwtRedis = __webpack_require__(/*! jwt-redis */ "jwt-redis");

var _jwtRedis2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_jwtRedis);

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_jsonwebtoken);

var _utils = __webpack_require__(/*! @/utils */ "./app/utils/index.js");

var _config = __webpack_require__(/*! @/config */ "./app/config/index.js");

const {
  sign,
  verify,
  decode
} = _jsonwebtoken2.default; // 用用户id验证token

const userIdCheckToken = userId => {
  return (0, _utils.promise)((resolve, reject) => {
    _redis.redisClient.keys(`userid_${userId}_*`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}; //验证token


const checkToken = token => {
  return (0, _utils.promise)((resolve, reject) => {
    _redis.redisClient.keys(`userid_*_${token}`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

const createToken = async (userInfo = {}, payload = {}) => {
  const {
    id = ""
  } = userInfo; //  产生token

  payload = (0, _utils.merge)({
    ctime: Date.now() //创建时间

  }, payload); //创建token

  const token = await sign(payload, `${id}`, {
    expiresIn: 0
  }); //获取用户token key

  const userIdTokens = await userIdCheckToken(id);

  if (userIdTokens && userIdTokens.length >= 1) {
    // 删除多余的key实现单点登录
    userIdTokens.forEach(async key => {
      await _redis.Redis.del(key);
    });
  } // 重新设置 redis 


  await _redis.Redis.set(`userid_${id}_${token}`, JSON.stringify(userInfo));

  _redis.redisClient.pexpire(`userid_${id}_${token}`, _config.tokenExpires);

  return token;
}; //销毁token


const destroyToken = async tokenOrId => {
  const userIdTokens = (await userIdCheckToken(tokenOrId)) || [];
  const tokens = (await checkToken(tokenOrId)) || [];
  (0, _utils.merge)(userIdTokens, tokens).forEach(async key => {
    await _redis.Redis.del(key);
  });
  return "成功删除token";
};

exports.createToken = createToken;
exports.checkToken = checkToken;
exports.destroyToken = destroyToken;
exports.userIdCheckToken = userIdCheckToken;

/***/ }),

/***/ "./app/redis/redis.js":
/*!****************************!*\
  !*** ./app/redis/redis.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.redisClient = exports.Redis = undefined;


var _redis = __webpack_require__(/*! redis */ "redis");

var _redis2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_redis);

var _utils = __webpack_require__(/*! ../utils */ "./app/utils/index.js");

var _config = __webpack_require__(/*! ../config */ "./app/config/index.js");

class RedisClass {
  constructor(port, url, options = {}) {
    this.port = port;
    this.url = url;
    this.options = options;
  } //连接


  createRedisClient() {
    this.redisClient = _redis2.default.createClient(this.port, this.url, this.options);
  } // 连接


  connect(callback = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.on('connect', () => {
        callback();
        resolve();
      });
    });
  }

  ready(callback = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.on('ready', (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  error(callback = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.on('error', error => {
        callback(error);
        reject(error);
      });
    });
  }

  end(callback = () => {}) {
    this.redisClient.on('end', (err, res) => {
      if (err) {
        callback(error);
        reject(error);
      } else {
        resolve(res);
      }
    });
  }

  set(key, value, callback = () => {}, options = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.set(key, value, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          let keys = Object.keys(options);
          keys.forEach(_key => {
            this.redisClient[_key](key, options[key]);
          });
          callback(res);
          resolve(res);
        }
      });
    });
  }

  get(key, callback = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.get(key, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  del(key, callback = () => {}) {
    return (0, _utils.promise)((resolve, reject) => {
      this.redisClient.del(key, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  init() {
    this.createRedisClient();
    return this;
  }

}

const Redis = exports.Redis = new RedisClass(_config.REDIS_CONF.port, _config.REDIS_CONF.host, _config.REDIS_CONF.options);
Redis.init();
const redisClient = exports.redisClient = Redis.redisClient;
exports.default = RedisClass;

/***/ }),

/***/ "./app/redis/user.js":
/*!***************************!*\
  !*** ./app/redis/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getUserIfo = undefined;

var _jwt = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");

var _redis = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");

var _utils = __webpack_require__(/*! @/utils */ "./app/utils/index.js");

var _config = __webpack_require__(/*! @/config */ "./app/config/index.js");

// 获取用户信息
const getUserIfo = async tokenOrId => {
  const userIdTokens = (await (0, _jwt.userIdCheckToken)(tokenOrId)) || [];
  const tokens = (await (0, _jwt.checkToken)(tokenOrId)) || [];
  const data = await _redis.Redis.get((0, _utils.merge)(userIdTokens, tokens)[0]);

  _redis.redisClient.pexpire((0, _utils.merge)(userIdTokens, tokens)[0], _config.tokenExpires);

  return data;
};

exports.getUserIfo = getUserIfo;

/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _type = __webpack_require__(/*! graphql/type */ "graphql/type");

var _graphql = __webpack_require__(/*! graphql */ "graphql");

var _httpErrors = __webpack_require__(/*! http-errors */ "http-errors");

var _httpErrors2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_httpErrors);

var _redis = __webpack_require__(/*! @/redis */ "./app/redis/index.js");

var _utils = __webpack_require__(/*! @/utils */ "./app/utils/index.js");

var _constant = __webpack_require__(/*! @/constant */ "./app/constant/index.js");

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

var _graphqlTools = __webpack_require__(/*! graphql-tools */ "graphql-tools");

var _user = __webpack_require__(/*! ./user */ "./app/routes/user.js");

var _user2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_user);

var _index = __webpack_require__(/*! @/middleware/index */ "./app/middleware/index.js");

var _index2 = __webpack_require__(/*! @/bizMod/index */ "./app/bizMod/index.js");

var _schema = __webpack_require__(/*! @/graphql/schema */ "./app/graphql/schema/index.js");

// import Home from "./home";
console.log("bizModRouter======", _index2.router);
console.log("schema======", _schema.schema);
const typeDefs = `
  type Query {
    hello: String
  }
`; // Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

class Route {
  constructor(app) {
    this.app = app; // this.router = router;

    this.init();
  }

  createRouter() {
    this.router = new _koaRouter2.default({
      prefix: "/api" // 给路由统一加个前缀：

    });
  } // 添加中间件


  middleware() {
    // 添加 404 500 中间件
    (0, _index.common)(this.app, this.router);
  }

  checkToken() {
    this.router.use(async (ctx, next) => {
      const {
        request: {
          header
        },
        cookies,
        response
      } = ctx;
      const token = cookies.get("token") || header.token;
      await (0, _redis.getUserIfo)(token).then(async value => {
        console.log("value=", value);
        response.userInfo = value;
        await next();
      }).catch(error => {
        response.userInfo = null;
        ctx.response.body = (0, _utils.merge)(_constant.unauthorized, {
          msg: "登录回话已过期，请重新登录"
        });
      }); //  await next();
    });
  } // 添加路由


  addRouters() {
    new _user2.default(this.app, this.router);
    (0, _index2.router)(this.app, this.router); // new bizMod.abnormity.script.router(this.app, this.router)

    console.log("checkToken====");
    this.checkToken(); // 查询

    this.router.get("/data", async (ctx, next) => {
      const {
        query: {
          query = "",
          variables = {}
        },
        response,
        request
      } = ctx;
      const {
        body: {// mutation = '', variables = {}
        }
      } = request; // console.log('cookies===', cookies.get('token'));
      // const { query = '', variables = {} } = ctx.query;
      // const { response } = ctx;
      // console.log('schema==',schema)

      console.log("query==", query);
      console.log("variables==", variables); // console.log("token=====", ctx.cookies.get("token"));
      // ctx.response.body = {
      //   name:'123'
      // }

      const baseSchema = `
                    schema {
                        query: Query
                        mutation: Mutation
                    }
              `;
      const schema = (0, _graphqlTools.makeExecutableSchema)({
        typeDefs: [// baseSchema,
        typeDefs //   baseSchema,
        //   userType,
        //   songType,
        //   playlistType
        ],
        resolvers: resolvers //  merge(
        //   {},
        //   userResolvers,
        //   songResolvers,
        //   playlistResolvers
        // )

      });
      await (0, _graphql.graphql)(schema, query, {
        ctx,
        next
      }, variables).then(data => {
        const {
          errors
        } = data;
        console.log("data=", data);
        console.log("stringify data=", JSON.stringify(data));

        if (errors) {
          response.body = (0, _utils.merge)(_constant.graphqlError, {
            errors
          });
        } else {
          console.log("get==", data); // ctx.response.body = {
          //   name:'123'
          // }

          response.body = data; // JSON.stringify(data);
        }
      }).catch(error => {
        console.log("error==", error);
      });
    }); // //变异
    // this.router.post('/data', async (ctx, next) => {
    //     const {
    //         // query: { query = '', variables = {} },
    //         response,
    //         request,
    //     } = ctx;
    //     const {
    //         body: { mutation = '', variables = {} },
    //     } = request;
    //     await graphql(schema, mutation, { ctx, next }, variables)
    //         .then((data) => {
    //             const { errors } = data;
    //             if (errors) {
    //                 response.body = merge(graphqlError, {
    //                     errors,
    //                 });
    //             } else {
    //                 console.log('post==', data);
    //                 response.body = data;
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('error==', error);
    //         });
    // });
    //  const server = new ApolloServer({ typeDefs, resolvers });
    //  this.router.get('/data',server.getMiddleware())
    // 挂载路由中间件

    this.app.use(this.router.routes()).use(this.router.allowedMethods()); // this.app.use(this.router.routes()).use(this.router.allowedMethods());
  }

  init() {
    // 添加中间件
    this.middleware(); //创建路由

    this.createRouter(); // 添加路由

    this.addRouters();
  }

}

exports.default = Route;

/***/ }),

/***/ "./app/routes/user.js":
/*!****************************!*\
  !*** ./app/routes/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));


var _user = __webpack_require__(/*! ../controller/user */ "./app/controller/user.js");

var _user2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_user);

var _koaRouter = __webpack_require__(/*! koa-router */ "koa-router");

var _koaRouter2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_koaRouter);

// koa 路由中间件
class Route {
  constructor(app, router) {
    this.app = app;
    this.router = router;
    this.init();
  }

  createRouter() {
    this.secondaryRoute = new _koaRouter2.default({
      prefix: "/user" // 给路由统一加个前缀：

    });
    return this.secondaryRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 添加路由
    this.registered();
    this.login();
    this.router.use(this.secondaryRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  registered() {
    // 添加 接口
    this.secondaryRoute.post("/register", _user2.default.add);
  }

  login() {
    // 添加 接口
    this.secondaryRoute.post("/login", _user2.default.login);
  }

}

exports.default = Route;

/***/ }),

/***/ "./app/service/user.js":
/*!*****************************!*\
  !*** ./app/service/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _user = __webpack_require__(/*! ../db/user */ "./app/db/user.js");

var _constant = __webpack_require__(/*! ../constant */ "./app/constant/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./app/utils/index.js");

var _redis = __webpack_require__(/*! @/redis */ "./app/redis/index.js");

var _config = __webpack_require__(/*! ../config */ "./app/config/index.js");

class Service {
  static list(page) {
    console.log('page=', page);
    const dataList = {
      list: [{
        time: '2019-7-10',
        id: 1,
        title: 'this is news 1',
        url: '/news/1'
      }, {
        time: '2019-8-10',
        id: 2,
        title: 'this is news 2',
        url: '/news/2'
      }]
    };
    return dataList.list[page] || {};
  } //注册用户


  static async add(ctx, next, parameter) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    /*
    1 查询用户名是否被注册过，
    2 查询手机号码是否被注册过
    3 如果都没有被注册那么就可以注册
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      phone
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 2
      };
    }

    const data = await (0, _user.addUser)({
      name,
      phone,
      password
    });

    if (data) {
      return {
        status: 3
      };
    }
  } // 编辑用户


  static async edit(ctx, next, parameter) {} // 数据库中查询用户


  static async queryUser(...ags) {
    const userData = await (0, _user.queryUser)(...ags);
    return userData;
  } // 登录


  static async login(ctx, next, parameter = {}) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    const {
      request,
      response,
      cookies
    } = ctx;
    /*
    1.先查询用户名是否正确，
    2.查询用户和密码是否正确
    3.创建token,存储到redis中
    4.把用户信息挂载response中
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 2
      };
    }

    userInfo = await (0, _user.queryUser)({
      name,
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    /*
    创建 createToken  
    */

    const token = await (0, _redis.createToken)(userInfo);
    delete userInfo.password;
    ctx.response.userInfo = userInfo;
    console.log('setExpirationTime=', (0, _config.setExpirationTime)()); // console.log('token=', token);
    // console.log('request=', request);
    // console.log('session=', session);

    console.log('cookies===', cookies.get('token')); // cookie.expires = false;
    // cookie.maxAge = 5 * 60 * 1000;

    cookies.set('token', token, {
      httpOnly: false,
      overwrite: false,
      expires: (0, _config.setExpirationTime)() // domain: 'http://localhost/',

    });

    if (userInfo) {
      //登录成功
      return {
        status: 3,
        token,
        userInfo
      };
    }
  }

}

exports.default = Service;

/***/ }),

/***/ "./app/utils/CheckDataType.js":
/*!************************************!*\
  !*** ./app/utils/CheckDataType.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

// js校验数据类型
class CheckDataType {
  static init(type) {
    // 校验的数据类型
    this.dataType = {
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      null: 'null',
      undefined: 'undefined',
      symbol: 'symbol',
      object: 'object',
      array: 'array',
      regexp: 'regexp',
      function: 'function',
      promise: 'promise'
    };
    return type in this.dataType && this.dataType.hasOwnProperty(type) && this.dataType[type] || false;
  }

  static isString(data) {
    return this.init('string') && this.init('string') === this.checkType(data) ? true : false;
  }

  static isNumber(data) {
    return this.init('number') && this.init('number') === this.checkType(data) ? true : false;
  }

  static isBoolean(data) {
    return this.init('boolean') && this.init('boolean') === this.checkType(data) ? true : false;
  }

  static isNull(data) {
    return this.init('null') && this.init('null') === this.checkType(data) ? true : false;
  }

  static isUndefined(data) {
    return this.init('undefined') && this.init('undefined') === this.checkType(data) ? true : false;
  }

  static isSymbol(data) {
    return this.init('symbol') && this.init('symbol') === this.checkType(data) ? true : false;
  }

  static isObject(data) {
    return this.init('object') && this.init('object') === this.checkType(data) ? true : false;
  }

  static isArray(data) {
    return this.init('array') && this.init('array') === this.checkType(data) ? true : false;
  }

  static isRegexp(data) {
    return this.init('regexp') && this.init('regexp') === this.checkType(data) ? true : false;
  }

  static isFunction(data) {
    return this.init('function') && this.init('function') === this.checkType(data) ? true : false;
  }

  static isPromise(data) {
    return this.init('promise') && this.init('promise') === this.checkType(data) ? true : false;
  }

  static checkType(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
  }

}

exports.CheckDataType = CheckDataType;

/***/ }),

/***/ "./app/utils/common.js":
/*!*****************************!*\
  !*** ./app/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


Object.defineProperty(__webpack_exports__, "__esModule", ({
  value: true
}));
exports.checkSchema = exports.merge = exports.promise = undefined;


var _CheckDataType = __webpack_require__(/*! ./CheckDataType */ "./app/utils/CheckDataType.js");

var _chalk = __webpack_require__(/*! chalk */ "chalk");

var _chalk2 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_chalk);

const promise = (fn = () => {}) => {
  return new Promise((resolve, reject) => {
    fn(resolve, reject);
  });
};

const merge = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

const checkSchema = name => {
  let cache = [];
  return function checkSchemas(target) {
    for (var i = 1; i < arguments.length; i++) {
      let source = new Object({ ...arguments[i]
      });

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (Object.prototype.toString.call(source[key]) == "[object Module]" || _CheckDataType.CheckDataType.isObject(source[key])) {
            target[key] = { ...(target[key] || {}),
              ...checkSchemas(target[key], source[key])
            };
          } else {
            if (cache.includes(key)) {
              throw new Error(_chalk2.default.red(`graphql schema 发生 ${key}命名冲突,请重新命名${key}`));
            }

            !["Mutation", "Query", "Subscription"].includes(key) && cache.push(key);
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };
};

exports.promise = promise;
exports.merge = merge;
exports.checkSchema = checkSchema;

/***/ }),

/***/ "./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _common = __webpack_require__(/*! ./common */ "./app/utils/common.js");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _common[key];
    }
  });
});

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/typeDefs.graphql":
/*!*************************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/script/graphql/schema/typeDefs/typeDefs.graphql ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\nextend type Query {\n  getScript  \n}\n\n");

/***/ }),

/***/ "./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/typeDefs.graphql":
/*!***********************************************************************************!*\
  !*** ./app/bizMod/abnormity/bizMod/user/graphql/schema/typeDefs/typeDefs.graphql ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\nextend type Query {\n  getUser \n}\n\n\n");

/***/ }),

/***/ "./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/typeDefs.graphql":
/*!*****************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/download/graphql/schema/typeDefs/typeDefs.graphql ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\nextend type Query {\n  getDownload \n}\n\n");

/***/ }),

/***/ "./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/typeDefs.graphql":
/*!****************************************************************************************!*\
  !*** ./app/bizMod/performance/bizMod/network/graphql/schema/typeDefs/typeDefs.graphql ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\nextend type Query {\n  getNetwork \n}\n\n\n");

/***/ }),

/***/ "./app/graphql/schema/typeDefs.graphql":
/*!*********************************************!*\
  !*** ./app/graphql/schema/typeDefs.graphql ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    type Query {\n      dummy: String\n    }\n    type Mutation {\n      dummy: String\n    }\n    type Subscription {\n      dummy: String\n    }\n    schema {\n      query: Query\n      mutation: Mutation\n      subscription: Subscription\n    }");

/***/ }),

/***/ "./app/graphql/schema/user/typeDefs/typeDefs.graphql":
/*!***********************************************************!*\
  !*** ./app/graphql/schema/user/typeDefs/typeDefs.graphql ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("extend type Query {\n  getMe \n}\n\n ");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!***********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?1000 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?1000";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 0;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function (updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function (err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/interopRequireDefault");;

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/*!****************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireWildcard" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/interopRequireWildcard");;

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("chalk");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-tools");;

/***/ }),

/***/ "graphql/type":
/*!*******************************!*\
  !*** external "graphql/type" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql/type");;

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "jwt-redis":
/*!****************************!*\
  !*** external "jwt-redis" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-redis");;

/***/ }),

/***/ "kill-port":
/*!****************************!*\
  !*** external "kill-port" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("kill-port");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-bodyparser");;

/***/ }),

/***/ "koa-cookie":
/*!*****************************!*\
  !*** external "koa-cookie" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-cookie");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa2-cors":
/*!****************************!*\
  !*** external "koa2-cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa2-cors");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime~index.js");
__webpack_require__.C(exports);
__webpack_require__.X([], "./node_modules/webpack/hot/poll.js?1000");
return __webpack_require__.X([], "./app/index.js");
})();
});
//# sourceMappingURL=index.js.map