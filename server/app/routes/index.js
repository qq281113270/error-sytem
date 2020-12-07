import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from "graphql/type";
import {
  graphql,
  Source,
  validateSchema,
  parse,
  validate,
  execute,
  formatError,
  getOperationAST,
  specifiedRules,
  validationRules,
} from "graphql";
import Home from "./home";
import User from "./user";
import { common } from "../middleware/index";
import schema from "../graphql/schema";
import httpError from "http-errors";
import { merge } from "../utils";
import { graphqlError } from "../constant";
import Router from "koa-router";

class Route {
  constructor(app) {
    this.app = app;
    // this.router = router;
    this.init();
  }
  createRouter() {
    this.router = new Router({
      prefix: "/api", // 给路由统一加个前缀：
    });
  }
  // 添加中间件
  middleware() {
    // 添加 404 500 中间件
    common(this.app, this.router);
  }

  // 添加路由
  addRouters() {
    new User(this.app, this.router);
    // new Home(this.app,router);

    // 查询
    this.router.get("/data", async (ctx, next) => {
      const { query = "", variables = {} } = ctx.query;
      graphql(schema, query, { ctx, next }, variables)
        .then((data) => {
          const { errors } = data;
          if (errors) {
            ctx.response.body = merge(graphqlError, {
              errors,
            });
          }
        })
        .catch((error) => {
          console.log("error==", error);
        });
    });
    //变异
    this.router.post("/data", async (ctx, next) => {
      // const { query = "", variables = {} } = ctx.query;
      const { mutation = "", variables = {} } = ctx.request.body;

      graphql(schema, mutation, { ctx, next }, variables)
        .then((data) => {
          const { errors } = data;
          if (errors) {
            ctx.response.body = merge(graphqlError, {
              errors,
            });
          }
        })
        .catch((error) => {
          console.log("error==", error);
        });
    });
    // 挂载路由中间件
    this.app.use(this.router.routes()).use(this.router.allowedMethods());
  }
  init() {
    //创建路由
    this.createRouter()
    // 添加中间件
    this.middleware();
    // 添加路由
    this.addRouters();
  }
}

module.exports = Route;
