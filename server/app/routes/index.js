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
import { merge } from "../urils";
import { graphqlError } from "../constant";

const router = require("../../config/router");

class Route {
  constructor(app) {
    this.app = app;
    this.router = router;
    this.init();
  }
  // 添加中间件
  middleware() {
    // 添加 404 500 中间件
    common(this.app, this.router);
  }

  // 添加路由
  routers() {
    new User(this.app, router);
    // new Home(this.app,router);

    // 查询
    this.router.get("/data", async (ctx, next) => {
      const { query = "", variables = {} } = ctx.query;
      graphql(schema, query, { ctx, next }, variables)
        .then((data) => {
          const { errors }=data
          if (errors) {
            ctx.response.body = merge(
              {
                errors
              },
              graphqlError
            );
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
          const { errors }=data
          if (errors) {
            ctx.response.body = merge(
              {
                errors
              },
              graphqlError
            );
          }
        })
        .catch((error) => {
          console.log("error==", error);
        });
    });
  }
  init() {
    // 添加中间件
    this.middleware();
    // 添加路由
    this.routers();
    this.app.use(this.router.routes()).use(router.allowedMethods());
  }
}

module.exports = Route;
