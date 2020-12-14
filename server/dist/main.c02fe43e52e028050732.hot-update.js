require("source-map-support").install();
exports.id = "main";
exports.ids = null;
exports.modules = {

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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1203f8cebe3ec64ad615"
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=main.c02fe43e52e028050732.hot-update.js.map