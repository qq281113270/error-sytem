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
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/config/constant.js":
/*!********************************!*\
  !*** ./app/config/constant.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenExpires": () => /* binding */ tokenExpires
/* harmony export */ });
var tokenExpires = 24 * 60 * 60 * 1000;

/***/ }),

/***/ "./app/config/db.js":
/*!**************************!*\
  !*** ./app/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MYSQL_CONF": () => /* binding */ MYSQL_CONF
/* harmony export */ });
var env = "development"; // 环境参数

var MYSQL_CONF = null;

if (env === 'development') {
  MYSQL_CONF = {
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
  MYSQL_CONF = {
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



/***/ }),

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MYSQL_CONF": () => /* reexport safe */ _db_js__WEBPACK_IMPORTED_MODULE_0__.MYSQL_CONF,
/* harmony export */   "setExpirationTime": () => /* reexport safe */ _token_js__WEBPACK_IMPORTED_MODULE_2__.setExpirationTime,
/* harmony export */   "tokenExpires": () => /* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_3__.tokenExpires
/* harmony export */ });
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ "./app/config/db.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redis.js */ "./app/config/redis.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redis_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _redis_js__WEBPACK_IMPORTED_MODULE_1__) if(["default","MYSQL_CONF"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _redis_js__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.js */ "./app/config/token.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.js */ "./app/config/constant.js");



 // export const MYSQL_CONF={
//     name:123
// }

/***/ }),

/***/ "./app/config/redis.js":
/*!*****************************!*\
  !*** ./app/config/redis.js ***!
  \*****************************/
/***/ ((module) => {

var env = "development"; // 环境参数

var REDIS_CONF = null;

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
  REDIS_CONF: REDIS_CONF
};

/***/ }),

/***/ "./app/config/token.js":
/*!*****************************!*\
  !*** ./app/config/token.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setExpirationTime": () => /* binding */ setExpirationTime
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./app/config/constant.js");

var setExpirationTime = function setExpirationTime() {
  var millisecond = new Date().getTime();
  var expiresTime = new Date(millisecond + _constant__WEBPACK_IMPORTED_MODULE_0__.tokenExpires); //一天后过期

  return expiresTime; // da.toUTCString(); //将 1598789234953这种格式的转换成=> "Sat, 29 Aug 2020 12:06:33 GMT"
};

/***/ }),

/***/ "./app/constant/httpCode.js":
/*!**********************************!*\
  !*** ./app/constant/httpCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlError": () => /* binding */ graphqlError,
/* harmony export */   "unsupported": () => /* binding */ unsupported,
/* harmony export */   "unauthorized": () => /* binding */ unauthorized
/* harmony export */ });
var graphqlError = {
  code: 400,
  msg: "请求参数有误，graphql语法错误"
};
var unsupported = {
  //对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。
  code: 415,
  msg: "服务器已经理解请求，但是拒绝执行它"
};
var unauthorized = {
  // 当前请求需要用户验证. 如果验证不通过则返回401
  code: 401,
  msg: "当前请求需要用户验证."
};


/***/ }),

/***/ "./app/constant/index.js":
/*!*******************************!*\
  !*** ./app/constant/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlError": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.graphqlError,
/* harmony export */   "unauthorized": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.unauthorized,
/* harmony export */   "unsupported": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.unsupported
/* harmony export */ });
/* harmony import */ var _httpCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpCode */ "./app/constant/httpCode.js");
// 整体输出


/***/ }),

/***/ "./app/controller/user.js":
/*!********************************!*\
  !*** ./app/controller/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user */ "./app/service/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");








var Controller = /*#__PURE__*/function () {
  function Controller() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Controller);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Controller, null, [{
    key: "add",
    value: function () {
      var _add = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx, next) {
        var parameter, data, getMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // ctx.set("Content-Type", "application/json")
                parameter = ctx.request.body; // 获取请求参数
                //添加service

                _context.next = 3;
                return _service_user__WEBPACK_IMPORTED_MODULE_4__.default.add(ctx, next, parameter);

              case 3:
                data = _context.sent;

                getMessage = function getMessage(data) {
                  var status = data.status;
                  var message = {
                    1: function _() {
                      return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.merge)(_constant__WEBPACK_IMPORTED_MODULE_5__.unsupported, {
                        msg: "该用户名已经被注册过,请重新输入用户名"
                      });
                    },
                    2: function _() {
                      return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.merge)(_constant__WEBPACK_IMPORTED_MODULE_5__.unsupported, {
                        msg: "该手机号码已经被注册过,请重新输入手机号码"
                      });
                    },
                    3: function _() {
                      return {
                        code: 200,
                        msg: "注册成功"
                      };
                    }
                  };
                  return message[status]();
                };

                ctx.response.body = getMessage(data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function add(_x, _x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "edit",
    value: function edit(ctx, next) {
      ctx.set("Content-Type", "application/json");
      var page = ctx.params.page; // 获取请求参数
      //添加service
      // const data = userService.list(page);
      // ctx.response.body = "d";
    }
  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ctx, next) {
        var parameter, data, getMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // ctx.set("Content-Type", "application/json")
                parameter = ctx.request.body; // 获取请求参数
                //添加service

                _context2.next = 3;
                return _service_user__WEBPACK_IMPORTED_MODULE_4__.default.login(ctx, next, parameter);

              case 3:
                data = _context2.sent;

                getMessage = function getMessage(data) {
                  var status = data.status,
                      token = data.token,
                      userInfo = data.userInfo;
                  var message = {
                    1: function _() {
                      return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.merge)(_constant__WEBPACK_IMPORTED_MODULE_5__.unauthorized, {
                        msg: "用户名错误，请重新输入用户名"
                      });
                    },
                    2: function _() {
                      return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.merge)(_constant__WEBPACK_IMPORTED_MODULE_5__.unauthorized, {
                        msg: "密码错误请重新输入密码"
                      });
                    },
                    3: function _() {
                      return {
                        code: 200,
                        msg: "登录成功",
                        data: {
                          token: token,
                          userInfo: userInfo
                        }
                      };
                    }
                  };
                  return message[status]();
                };

                ctx.response.body = getMessage(data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return Controller;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./app/db/checkTable.js":
/*!******************************!*\
  !*** ./app/db/checkTable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTable": () => /* binding */ CheckTable
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");






var _require = __webpack_require__(/*! ../config/db */ "./app/config/db.js"),
    MYSQL_CONF = _require.MYSQL_CONF;

var CheckTable = /*#__PURE__*/function () {
  function CheckTable() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CheckTable);

    this.tables = [{
      name: "user",
      sql: "CREATE TABLE user(\n                    id INT(11) PRIMARY KEY  auto_increment primary key,\n                    name VARCHAR(25),\n                    phone VARCHAR(200),\n                    password VARCHAR(255)\n                ) AUTO_INCREMENT=1;\n           "
    }, {
      name: 'collect',
      sql: "\n         CREATE TABLE collect(\n              id INT(11) PRIMARY KEY,\n              name VARCHAR(25)  NOT NULL,\n              phone INT(11)  NOT NULL,\n              user_id INT(11)  NOT NULL,\n              FOREIGN KEY(user_id) REFERENCES user(id)\n         );\n         "
    }, {
      name: 'code',
      sql: "\n          CREATE TABLE code(\n            id INT(11) PRIMARY KEY,\n            name VARCHAR(25),\n            collect_id INT(11),\n            FOREIGN KEY(collect_id) REFERENCES collect(id),\n            user_id INT(11),\n            FOREIGN KEY(user_id) REFERENCES user(id)\n            );\n          "
    }, {
      name: 'role',
      sql: "\n        CREATE TABLE role(\n          id INT(11) PRIMARY KEY,\n          name VARCHAR(25),\n          root TINYINT(2)\n          );\n        "
    }];
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CheckTable, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tables.forEach(function (table) {
        _this.queryTable(table);
      });
    }
  }, {
    key: "createTable",
    value: function createTable() {}
  }, {
    key: "checkTable",
    value: function () {
      var _checkTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data, table) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(data.length == 0)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return (0,_mysql__WEBPACK_IMPORTED_MODULE_4__.exec)(table.sql).then(function (data) {
                  console.log("创建表成功");
                })["catch"](function (error) {
                  console.log("创建表失败=", error);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkTable(_x, _x2) {
        return _checkTable.apply(this, arguments);
      }

      return checkTable;
    }()
  }, {
    key: "queryTable",
    value: function () {
      var _queryTable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(table) {
        var _this2 = this;

        var sql;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sql = "\n           SELECT\n           TABLE_NAME FROM INFORMATION_SCHEMA.TABLES\n           WHERE TABLE_SCHEMA='".concat(MYSQL_CONF.database, "' \n           AND TABLE_NAME= '").concat(table.name, "'");
                _context3.next = 3;
                return (0,_mysql__WEBPACK_IMPORTED_MODULE_4__.exec)(sql).then( /*#__PURE__*/function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this2.checkTable(data, table);

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function () {});

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function queryTable(_x3) {
        return _queryTable.apply(this, arguments);
      }

      return queryTable;
    }()
  }]);

  return CheckTable;
}();



/***/ }),

/***/ "./app/db/index.js":
/*!*************************!*\
  !*** ./app/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTable": () => /* reexport safe */ _checkTable__WEBPACK_IMPORTED_MODULE_0__.CheckTable,
/* harmony export */   "connection": () => /* reexport safe */ _mysql__WEBPACK_IMPORTED_MODULE_1__.connection,
/* harmony export */   "exec": () => /* reexport safe */ _mysql__WEBPACK_IMPORTED_MODULE_1__.exec,
/* harmony export */   "addUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.addUser,
/* harmony export */   "deleteUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.deleteUser,
/* harmony export */   "queryUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.queryUser
/* harmony export */ });
/* harmony import */ var _checkTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkTable */ "./app/db/checkTable.js");
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./app/db/user.js");




/***/ }),

/***/ "./app/db/mysql.js":
/*!*************************!*\
  !*** ./app/db/mysql.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connection": () => /* binding */ connection,
/* harmony export */   "exec": () => /* binding */ exec
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/index */ "./app/config/index.js");




console.log('mysql============', (mysql__WEBPACK_IMPORTED_MODULE_2___default()));
console.log('MYSQL_CONF============', _config_index__WEBPACK_IMPORTED_MODULE_3__.MYSQL_CONF); // 创建链接对象

var connection = mysql__WEBPACK_IMPORTED_MODULE_2___default().createConnection(_config_index__WEBPACK_IMPORTED_MODULE_3__.MYSQL_CONF); // 统一执行 sql 的函数

var exec = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sql) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              console.log('sql========', sql);
              connection.query(sql, function (err, result) {
                if (err) {
                  reject(err);
                  return;
                }

                resolve(result);
              });
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function exec(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./app/db/user.js":
/*!************************!*\
  !*** ./app/db/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUser": () => /* binding */ addUser,
/* harmony export */   "deleteUser": () => /* binding */ deleteUser,
/* harmony export */   "queryUser": () => /* binding */ queryUser
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");


 // 添加用户

var addUser = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
    var name, phone, password, sql;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = _ref.name, phone = _ref.phone, password = _ref.password;
            sql = "insert into user(name,phone,password) values('".concat(name, "','").concat(phone, "',md5('").concat(password, "'));");
            _context.next = 4;
            return (0,_mysql__WEBPACK_IMPORTED_MODULE_2__.exec)(sql);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addUser(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //查询用户


var queryUser = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var andConditionData,
        orConditionData,
        sql,
        andKeys,
        orKeys,
        _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            andConditionData = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            orConditionData = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            sql = _args2.length > 2 ? _args2[2] : undefined;
            andKeys = Object.keys(andConditionData);
            orKeys = Object.keys(orConditionData);

            if (!sql) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return (0,_mysql__WEBPACK_IMPORTED_MODULE_2__.exec)(sql);

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 9:
            sql = "select * from user where ";
            andKeys.forEach(function (key) {
              sql += key == "password" ? " ".concat(key, "=md5('").concat(andConditionData[key], "') and") : " ".concat(key, "='").concat(andConditionData[key], "' and");
            });
            orKeys.forEach(function (key) {
              sql += key == "password" ? " ".concat(key, "=md5('").concat(orConditionData[key], "') or") : " ".concat(key, "='").concat(orConditionData[key], "' or");
            });
            sql = andKeys.length >= 1 && orKeys.length == 0 ? sql.substring(0, sql.length - 3) : orKeys.length >= 1 ? sql.substring(0, sql.length - 2) : sql;
            _context2.next = 15;
            return (0,_mysql__WEBPACK_IMPORTED_MODULE_2__.exec)(sql);

          case 15:
            return _context2.abrupt("return", _context2.sent);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function queryUser() {
    return _ref3.apply(this, arguments);
  };
}(); //删除用户


var deleteUser = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
    var sql;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = "DELETE  FROM user  WHERE id=".concat(id, ";");
            _context3.next = 3;
            return (0,_mysql__WEBPACK_IMPORTED_MODULE_2__.exec)(sql);

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteUser(_x2) {
    return _ref4.apply(this, arguments);
  };
}(); // 导出




/***/ }),

/***/ "./app/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./app/graphql/schema/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => /* binding */ user
/* harmony export */ });
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/type */ "graphql/type");
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./app/graphql/schema/user/index.js");
 //会员模块


var user = {
  userResolvers: _user__WEBPACK_IMPORTED_MODULE_1__.default,
  userSchema: _user__WEBPACK_IMPORTED_MODULE_1__
}; // import user from "./user";
// import home from "./home";

console.log('user=', user);
 // export {
//   user
// }

/***/ }),

/***/ "./app/graphql/schema/user/index.js":
/*!******************************************!*\
  !*** ./app/graphql/schema/user/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": () => /* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.hello,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers */ "./app/graphql/schema/user/resolvers.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./app/graphql/schema/user/schema.js");
 // import * as schema from "./schema";
// export * as userType from './schema.graphql'

 // export * from "./schema.graphql";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_resolvers__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./app/graphql/schema/user/resolvers.js":
/*!**********************************************!*\
  !*** ./app/graphql/schema/user/resolvers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// Provide resolver functions for your schema fields
var hello = function hello() {
  return 'Hello world!';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mutation: {// createUser,
  },
  query: {
    // user,
    // getUserInfo,
    hello: hello
  }
}); // export default {
//         Query:{
//             hello   
//         }
// }
// export duf {
//     Query:{
//         hello
//     }
// }

/***/ }),

/***/ "./app/graphql/schema/user/schema.js":
/*!*******************************************!*\
  !*** ./app/graphql/schema/user/schema.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": () => /* binding */ hello
/* harmony export */ });
var hello = "\ntype Query {\n  hello: String\n}\n";

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./app/utils/index.js");
/* harmony import */ var _db_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db/index.js */ "./app/db/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redis */ "./app/redis/index.js");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/index */ "./app/routes/index.js");











var App = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, App);

    this.app = new (koa__WEBPACK_IMPORTED_MODULE_5___default())();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(App, [{
    key: "init",
    value: function () {
      var _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.connectRedis();

              case 2:
                _context.next = 4;
                return this.connectSql();

              case 4:
                //加载路由
                this.addRoute(); // 设置监听端口

                this.listen();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "connectRedis",
    value: function () {
      var _connectRedis = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.promise)(function (reslove, reject) {
                  _redis__WEBPACK_IMPORTED_MODULE_8__.Redis.connect(function () {
                    console.log('Redis 链接成功');
                    reslove();
                  });
                  _redis__WEBPACK_IMPORTED_MODULE_8__.Redis.error(function () {
                    console.log('Redis 链接错误');
                    reject();
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function connectRedis() {
        return _connectRedis.apply(this, arguments);
      }

      return connectRedis;
    }()
  }, {
    key: "connectSql",
    value: function () {
      var _connectSql = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.promise)(function (reslove, reject) {
                  _db_index_js__WEBPACK_IMPORTED_MODULE_7__.connection.connect(function (err) {
                    if (err) {
                      console.log('数据库连失败');
                      reject();
                      throw err;
                    }

                    new _db_index_js__WEBPACK_IMPORTED_MODULE_7__.CheckTable();
                    console.log('mysql数据库连接成功');
                    reslove();
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function connectSql() {
        return _connectSql.apply(this, arguments);
      }

      return connectSql;
    }()
  }, {
    key: "addRoute",
    value: function addRoute() {
      // 导入路由
      new _routes_index__WEBPACK_IMPORTED_MODULE_9__.default(this.app);
    }
  }, {
    key: "listen",
    value: function listen() {
      this.server = this.app.listen(3100, function () {
        console.log('服务器启动成功:http://localhost:3100/');
      });
      this.server.setTimeout(5 * 60 * 1000);
    }
  }]);

  return App;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./app/middleware/common.js":
/*!**********************************!*\
  !*** ./app/middleware/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2-cors */ "koa2-cors");
/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2_cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-cookie */ "koa-cookie");
/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_cookie__WEBPACK_IMPORTED_MODULE_2__);




var common = function common(app, router) {
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
  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_0___default()()); // 添加 cookie
  // app.use(cookie());
  // // 添加跨域
  // app.use(async (ctx, next)=> {
  //   console.log(ctx.request.headers)
  // // // if( req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com"
  // // //     || req.headers.origin.toLowerCase() =="http://127.0.0.1" ) {
  // // //     //设置允许跨域的域名，*代表允许任意域名跨域
  // // //     res.header("Access-Control-Allow-Origin", req.headers.origin);
  // // // }
  //     // ctx.set('Access-Control-Allow-Origin', '*');
  //      //设置允许跨域的域名，*代表允许任意域名跨域
  //      ctx.set("Access-Control-Allow-Origin","*");
  // //允许的header类型
  // ctx.set("Access-Control-Allow-Headers","content-type");
  // //跨域允许的请求方式 
  // ctx.set("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  // //     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // //     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //      await next();
  // //     if (ctx.method == 'OPTIONS') {
  // //       ctx.body = 200; 
  // //     } else {
  // //       await next();
  // //     }
  //   });
  // 跨域

  app.use(koa2_cors__WEBPACK_IMPORTED_MODULE_1___default()());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./app/middleware/index.js":
/*!*********************************!*\
  !*** ./app/middleware/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./app/middleware/common.js");



/***/ }),

/***/ "./app/redis/index.js":
/*!****************************!*\
  !*** ./app/redis/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redis": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.Redis,
/* harmony export */   "redisClient": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient,
/* harmony export */   "RedisClass": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "checkToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.checkToken,
/* harmony export */   "createToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.createToken,
/* harmony export */   "destroyToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.destroyToken,
/* harmony export */   "userIdCheckToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.userIdCheckToken,
/* harmony export */   "getUserIfo": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.getUserIfo
/* harmony export */ });
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./app/redis/user.js");





/***/ }),

/***/ "./app/redis/jwt.js":
/*!**************************!*\
  !*** ./app/redis/jwt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToken": () => /* binding */ createToken,
/* harmony export */   "checkToken": () => /* binding */ checkToken,
/* harmony export */   "destroyToken": () => /* binding */ destroyToken,
/* harmony export */   "userIdCheckToken": () => /* binding */ userIdCheckToken
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-redis */ "jwt-redis");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_redis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");





 // const jwtr = new JWTR(redisClient);
// const { sign, verify, destroy } = jwtr;

var sign = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign),
    verify = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify),
    decode = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode); // var secret = "secret";
// var jti = "test";
// var payload = { jti };
// 用用户id验证token

var userIdCheckToken = function userIdCheckToken(userId) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.promise)(function (resolve, reject) {
    _redis__WEBPACK_IMPORTED_MODULE_2__.redisClient.keys("userid_".concat(userId, "_*"), function (error, value) {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}; //验证token


var checkToken = function checkToken(token) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.promise)(function (resolve, reject) {
    _redis__WEBPACK_IMPORTED_MODULE_2__.redisClient.keys("userid_*_".concat(token), function (error, value) {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

var createToken = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var userInfo,
        payload,
        _userInfo$id,
        id,
        token,
        userIdTokens,
        _args2 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userInfo = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            payload = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _userInfo$id = userInfo.id, id = _userInfo$id === void 0 ? "" : _userInfo$id; //  产生token

            payload = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.merge)({
              ctime: Date.now() //创建时间

            }, payload); //创建token

            _context2.next = 6;
            return sign(payload, "".concat(id), {
              expiresIn: 0
            });

          case 6:
            token = _context2.sent;
            _context2.next = 9;
            return userIdCheckToken(id);

          case 9:
            userIdTokens = _context2.sent;

            if (userIdTokens && userIdTokens.length >= 1) {
              // 删除多余的key实现单点登录
              userIdTokens.forEach( /*#__PURE__*/function () {
                var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _redis__WEBPACK_IMPORTED_MODULE_2__.Redis.del(key);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            } // 重新设置 redis 


            _context2.next = 13;
            return _redis__WEBPACK_IMPORTED_MODULE_2__.Redis.set("userid_".concat(id, "_").concat(token), JSON.stringify(userInfo));

          case 13:
            return _context2.abrupt("return", token);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createToken() {
    return _ref.apply(this, arguments);
  };
}(); //销毁token


var destroyToken = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(tokenOrId) {
    var userIdTokens, tokens;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return userIdCheckToken(tokenOrId);

          case 2:
            _context4.t0 = _context4.sent;

            if (_context4.t0) {
              _context4.next = 5;
              break;
            }

            _context4.t0 = [];

          case 5:
            userIdTokens = _context4.t0;
            _context4.next = 8;
            return checkToken(tokenOrId);

          case 8:
            _context4.t1 = _context4.sent;

            if (_context4.t1) {
              _context4.next = 11;
              break;
            }

            _context4.t1 = [];

          case 11:
            tokens = _context4.t1;
            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.merge)(userIdTokens, tokens).forEach( /*#__PURE__*/function () {
              var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(key) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _redis__WEBPACK_IMPORTED_MODULE_2__.Redis.del(key);

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
            return _context4.abrupt("return", "成功删除token");

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function destroyToken(_x2) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./app/redis/redis.js":
/*!****************************!*\
  !*** ./app/redis/redis.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redis": () => /* binding */ Redis,
/* harmony export */   "redisClient": () => /* binding */ redisClient,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./app/config/index.js");






var RedisClass = /*#__PURE__*/function () {
  function RedisClass(port, url) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RedisClass);

    this.port = port;
    this.url = url;
    this.options = options;
  } //连接


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RedisClass, [{
    key: "createRedisClient",
    value: function createRedisClient() {
      this.redisClient = redis__WEBPACK_IMPORTED_MODULE_2___default().createClient(this.port, this.url, this.options);
    } // 连接

  }, {
    key: "connect",
    value: function connect() {
      var _this = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this.redisClient.on('connect', function () {
          callback();
          resolve();
        });
      });
    }
  }, {
    key: "ready",
    value: function ready() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this2.redisClient.on('ready', function (err, res) {
          if (err) {
            callback(error);
            reject(error);
          } else {
            resolve(res);
          }
        });
      });
    }
  }, {
    key: "error",
    value: function error() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this3.redisClient.on('error', function (error) {
          callback(error);
          reject(error);
        });
      });
    }
  }, {
    key: "end",
    value: function end() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      this.redisClient.on('end', function (err, res) {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var _this4 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this4.redisClient.set(key, value, function (error, res) {
          if (error) {
            callback(error);
            reject(error);
          } else {
            var keys = Object.keys(options);
            keys.forEach(function (_key) {
              _this4.redisClient[_key](key, options[key]);
            });
            callback(res);
            resolve(res);
          }
        });
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this5.redisClient.get(key, function (error, res) {
          if (error) {
            callback(error);
            reject(error);
          } else {
            resolve(res);
          }
        });
      });
    }
  }, {
    key: "del",
    value: function del(key) {
      var _this6 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)(function (resolve, reject) {
        _this6.redisClient.del(key, function (error, res) {
          if (error) {
            callback(error);
            reject(error);
          } else {
            resolve(res);
          }
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.createRedisClient();
      return this;
    }
  }]);

  return RedisClass;
}();

var Redis = new RedisClass(_config__WEBPACK_IMPORTED_MODULE_4__.REDIS_CONF.port, _config__WEBPACK_IMPORTED_MODULE_4__.REDIS_CONF.host, _config__WEBPACK_IMPORTED_MODULE_4__.REDIS_CONF.options);
Redis.init();
var redisClient = Redis.redisClient;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedisClass);

/***/ }),

/***/ "./app/redis/user.js":
/*!***************************!*\
  !*** ./app/redis/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserIfo": () => /* binding */ getUserIfo
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");




 // 获取用户信息

var getUserIfo = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(tokenOrId) {
    var userIdTokens, tokens, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_jwt__WEBPACK_IMPORTED_MODULE_2__.userIdCheckToken)(tokenOrId);

          case 2:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 5;
              break;
            }

            _context.t0 = [];

          case 5:
            userIdTokens = _context.t0;
            _context.next = 8;
            return (0,_jwt__WEBPACK_IMPORTED_MODULE_2__.checkToken)(tokenOrId);

          case 8:
            _context.t1 = _context.sent;

            if (_context.t1) {
              _context.next = 11;
              break;
            }

            _context.t1 = [];

          case 11:
            tokens = _context.t1;
            _context.next = 14;
            return _redis__WEBPACK_IMPORTED_MODULE_3__.Redis.get((0,_utils__WEBPACK_IMPORTED_MODULE_4__.merge)(userIdTokens, tokens)[0]);

          case 14:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserIfo(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "@babel/runtime/helpers/objectDestructuringEmpty");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/type */ "graphql/type");
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_type__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user */ "./app/routes/user.js");
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middleware/index */ "./app/middleware/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../graphql/schema */ "./app/graphql/schema/index.js");






 // import schema from '../graphql/schema';





 // import Home from "./home";



 // const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const config = require("../../webpack.config.js");
// const compiler = webpack(config);
// import  userResolvers,  * as userSchema  from '../graphql/schema/user/index.js';
// const { ApolloServer, gql } = require('apollo-server-koa');
// import { ApolloServer, gql } from 'apollo-server-koa';
// console.log('userResolvers===',userResolvers)
// console.log('userSchema===',userSchema)
// // Construct a schema, using GraphQL schema language

var typeDefs = "\n  type Query {\n    hello: String\n  }\n"; // Provide resolver functions for your schema fields

var resolvers = {
  Query: {
    hello: function hello() {
      return "Hello world!";
    }
  }
};

var Route = /*#__PURE__*/function () {
  function Route(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Route);

    this.app = app; // this.router = router;

    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Route, [{
    key: "createRouter",
    value: function createRouter() {
      this.router = new (koa_router__WEBPACK_IMPORTED_MODULE_10___default())({
        prefix: "/api" // 给路由统一加个前缀：

      });
    } // 添加中间件

  }, {
    key: "middleware",
    value: function middleware() {
      // this.app.use(
      //   webpackDevMiddleware(compiler, {
      //     publicPath: config.output.publicPath,
      //   })
      // );
      // 添加 404 500 中间件
      (0,_middleware_index__WEBPACK_IMPORTED_MODULE_13__.common)(this.app, this.router);
    }
  }, {
    key: "checkToken",
    value: function checkToken() {
      this.router.use( /*#__PURE__*/function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx, next) {
          var header, cookies, token;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // console.log('ctx.request==',ctx.request.header)
                  header = ctx.request.header, cookies = ctx.cookies;
                  token = cookies.get("token") || header.token;
                  console.log("token=", token); //   ctx.cookies.set('cid','comedy',{
                  //     domain:'localhost',     //写cookie所在的域名
                  //     path:'/index',          //写cookie所在的路径
                  //     maxAge:60*1000,         //写cookie有效时长
                  //     expires:7,
                  //     httpOnly:false,
                  //     overwrite:false
                  // })
                  // ctx.body = 'cookie is ok'

                  console.log("中间键1开始");
                  _context.next = 6;
                  return next();

                case 6:
                  console.log("中间键1结束");

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } // 添加路由

  }, {
    key: "addRouters",
    value: function addRouters() {
      new _user__WEBPACK_IMPORTED_MODULE_12__.default(this.app, this.router); // new Home(this.app,router);

      console.log("checkToken====");
      this.checkToken(); // 查询

      this.router.get("/data", /*#__PURE__*/function () {
        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(ctx, next) {
          var _ctx$query, _ctx$query$query, query, _ctx$query$variables, variables, response, request, baseSchema, schema;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _ctx$query = ctx.query, _ctx$query$query = _ctx$query.query, query = _ctx$query$query === void 0 ? "" : _ctx$query$query, _ctx$query$variables = _ctx$query.variables, variables = _ctx$query$variables === void 0 ? {} : _ctx$query$variables, response = ctx.response, request = ctx.request;

                  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(request.body); // const { query = '', variables = {} } = ctx.query;
                  // const { response } = ctx;
                  // console.log('schema==',schema)


                  console.log("query==", query);
                  console.log("variables==", variables);
                  console.log("token=====", ctx.cookies.get("token")); // ctx.response.body = {
                  //   name:'123'
                  // }

                  baseSchema = "\n                    schema {\n                        query: Query\n                        mutation: Mutation\n                    }\n              ";
                  schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_11__.makeExecutableSchema)({
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
                  _context2.next = 9;
                  return (0,graphql__WEBPACK_IMPORTED_MODULE_6__.graphql)(schema, query, {
                    ctx: ctx,
                    next: next
                  }, variables).then(function (data) {
                    var errors = data.errors;
                    console.log("data=", data);
                    console.log("stringify data=", JSON.stringify(data));

                    if (errors) {
                      response.body = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.merge)(_constant__WEBPACK_IMPORTED_MODULE_9__.graphqlError, {
                        errors: errors
                      });
                    } else {
                      console.log("get==", data); // ctx.response.body = {
                      //   name:'123'
                      // }

                      response.body = data; // JSON.stringify(data);
                    }
                  })["catch"](function (error) {
                    console.log("error==", error);
                  });

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }()); // //变异
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
  }, {
    key: "init",
    value: function init() {
      // 添加中间件
      this.middleware(); //创建路由

      this.createRouter(); // 添加路由

      this.addRouters();
    }
  }]);

  return Route;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "./app/routes/user.js":
/*!****************************!*\
  !*** ./app/routes/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/user */ "./app/controller/user.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);



 // koa 路由中间件

var Route = /*#__PURE__*/function () {
  function Route(app, router) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Route);

    this.app = app;
    this.router = router;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Route, [{
    key: "createRouter",
    value: function createRouter() {
      this.secondaryRoute = new (koa_router__WEBPACK_IMPORTED_MODULE_3___default())({
        prefix: "/user" // 给路由统一加个前缀：

      });
      return this.secondaryRoute;
    }
  }, {
    key: "middleware",
    value: function middleware() {// 处理404
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

  }, {
    key: "addRouters",
    value: function addRouters() {
      // 添加路由
      this.registered();
      this.login();
      this.router.use(this.secondaryRoute.routes()); //挂载二级路由
    }
  }, {
    key: "init",
    value: function init() {
      // 创建路由
      this.createRouter(); // 添加中间件

      this.middleware(); // 添加路由

      this.addRouters();
    }
  }, {
    key: "registered",
    value: function registered() {
      // 添加 接口
      this.secondaryRoute.post("/register", _controller_user__WEBPACK_IMPORTED_MODULE_2__.default.add);
    }
  }, {
    key: "login",
    value: function login() {
      // 添加 接口
      this.secondaryRoute.post("/login", _controller_user__WEBPACK_IMPORTED_MODULE_2__.default.login);
    }
  }]);

  return Route;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "./app/service/user.js":
/*!*****************************!*\
  !*** ./app/service/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _db_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db/user */ "./app/db/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redis */ "./app/redis/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./app/config/index.js");










var Service = /*#__PURE__*/function () {
  function Service() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Service);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Service, null, [{
    key: "list",
    value: function list(page) {
      console.log('page=', page);
      var dataList = {
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

  }, {
    key: "add",
    value: function () {
      var _add = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx, next, parameter) {
        var name, phone, password, userInfo, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = parameter.username, phone = parameter.phone, password = parameter.password;
                /*
                1 查询用户名是否被注册过，
                2 查询手机号码是否被注册过
                3 如果都没有被注册那么就可以注册
                */

                _context.next = 3;
                return this.queryUser({
                  name: name
                });

              case 3:
                userInfo = _context.sent;
                userInfo = userInfo.length >= 1 ? userInfo[0] : null;

                if (!(userInfo && userInfo.id)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  status: 1
                });

              case 7:
                _context.next = 9;
                return this.queryUser({
                  phone: phone
                });

              case 9:
                userInfo = _context.sent;
                userInfo = userInfo.length >= 1 ? userInfo[0] : null;

                if (!(userInfo && userInfo.id)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", {
                  status: 2
                });

              case 13:
                _context.next = 15;
                return (0,_db_user__WEBPACK_IMPORTED_MODULE_4__.addUser)({
                  name: name,
                  phone: phone,
                  password: password
                });

              case 15:
                data = _context.sent;

                if (!data) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", {
                  status: 3
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function add(_x, _x2, _x3) {
        return _add.apply(this, arguments);
      }

      return add;
    }() // 编辑用户

  }, {
    key: "edit",
    value: function () {
      var _edit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ctx, next, parameter) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function edit(_x4, _x5, _x6) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }() // 数据库中查询用户

  }, {
    key: "queryUser",
    value: function () {
      var _queryUser2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var userData,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _db_user__WEBPACK_IMPORTED_MODULE_4__.queryUser.apply(void 0, _args3);

              case 2:
                userData = _context3.sent;
                return _context3.abrupt("return", userData);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function queryUser() {
        return _queryUser2.apply(this, arguments);
      }

      return queryUser;
    }() // 登录

  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(ctx, next) {
        var parameter,
            name,
            phone,
            password,
            request,
            response,
            cookies,
            userInfo,
            token,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                parameter = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                name = parameter.username, phone = parameter.phone, password = parameter.password;
                request = ctx.request, response = ctx.response, cookies = ctx.cookies;
                /*
                1.先查询用户名是否正确，
                2.查询用户和密码是否正确
                3.创建token,存储到redis中
                4.把用户信息挂载response中
                */

                _context4.next = 5;
                return this.queryUser({
                  name: name
                });

              case 5:
                userInfo = _context4.sent;
                userInfo = userInfo.length >= 1 ? userInfo[0] : null;

                if (userInfo) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 1
                });

              case 9:
                _context4.next = 11;
                return this.queryUser({
                  password: password
                });

              case 11:
                userInfo = _context4.sent;
                userInfo = userInfo.length >= 1 ? userInfo[0] : null;

                if (userInfo) {
                  _context4.next = 15;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 2
                });

              case 15:
                _context4.next = 17;
                return (0,_db_user__WEBPACK_IMPORTED_MODULE_4__.queryUser)({
                  name: name,
                  password: password
                });

              case 17:
                userInfo = _context4.sent;
                userInfo = userInfo.length >= 1 ? userInfo[0] : null;
                /*
                创建 createToken  
                */

                _context4.next = 21;
                return (0,_redis__WEBPACK_IMPORTED_MODULE_7__.createToken)(userInfo);

              case 21:
                token = _context4.sent;
                delete userInfo.password;
                ctx.response.userInfo = userInfo;
                console.log('setExpirationTime=', (0,_config__WEBPACK_IMPORTED_MODULE_8__.setExpirationTime)()); // console.log('token=', token);
                // console.log('request=', request);
                // console.log('session=', session);

                console.log('cookies===', cookies); // cookie.expires = false;
                // cookie.maxAge = 5 * 60 * 1000;

                cookies.set('token', token, {
                  httpOnly: false,
                  overwrite: false // expires: setExpirationTime(),

                });

                if (!userInfo) {
                  _context4.next = 29;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 3,
                  token: token,
                  userInfo: userInfo
                });

              case 29:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function login(_x7, _x8) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return Service;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

/***/ }),

/***/ "./app/utils/common.js":
/*!*****************************!*\
  !*** ./app/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promise": () => /* binding */ promise,
/* harmony export */   "merge": () => /* binding */ merge
/* harmony export */ });
var promise = function promise() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  return new Promise(function (resolve, reject) {
    fn(resolve, reject);
  });
};

var merge = Object.assign || function (target) {
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



/***/ }),

/***/ "./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.merge,
/* harmony export */   "promise": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.promise
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./app/utils/common.js");
 // export * from "./jwt";



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

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");;

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");;

/***/ }),

/***/ "@babel/runtime/helpers/objectDestructuringEmpty":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/objectDestructuringEmpty" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/objectDestructuringEmpty");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");;

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1203f8cebe3ec64ad615"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?1000");
/******/ 	return __webpack_require__("./app/index.js");
/******/ })()
;
});
//# sourceMappingURL=index.js.map