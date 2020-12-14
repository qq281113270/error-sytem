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
  // gql,
} from "graphql";
// import schema from '../graphql/schema';
import httpError from "http-errors";
import { merge } from "../utils";
import { graphqlError } from "../constant";
import Router from "koa-router";
import { makeExecutableSchema } from "graphql-tools";
// import Home from "./home";
import User from "./user";
import { common } from "../middleware/index";
import { user } from "../graphql/schema";
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
const typeDefs = `
  type Query {
    hello: String
  }
`;

 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

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
    // this.app.use(
    //   webpackDevMiddleware(compiler, {
    //     publicPath: config.output.publicPath,
    //   })
    // );

    // 添加 404 500 中间件
    common(this.app, this.router);
  }

  checkToken() {
    this.router.use(async (ctx, next) => {
      // console.log('ctx.request==',ctx.request.header)
      const {
        request: { header },
        cookies,
      } = ctx;

      let token = cookies.get("token") || header.token;
      console.log("token=", token);

      //   ctx.cookies.set('cid','comedy',{
      //     domain:'localhost',     //写cookie所在的域名
      //     path:'/index',          //写cookie所在的路径
      //     maxAge:60*1000,         //写cookie有效时长
      //     expires:7,
      //     httpOnly:false,
      //     overwrite:false
      // })
      // ctx.body = 'cookie is ok'

      console.log("中间键1开始");

      await next();
      console.log("中间键1结束");
    });
  }
  // 添加路由
  addRouters() {
    new User(this.app, this.router);
    // new Home(this.app,router);

    console.log("checkToken====");

    this.checkToken();

    // 查询
    this.router.get("/data", async (ctx, next) => {
      const {
        query: { query = "", variables = {} },
        response,
        request,
      } = ctx;
      const {
        body: {
          // mutation = '', variables = {}
        },
      } = request;

      // const { query = '', variables = {} } = ctx.query;
      // const { response } = ctx;
      // console.log('schema==',schema)
      console.log("query==", query);
      console.log("variables==", variables);
      console.log("token=====", ctx.cookies.get("token"));
      // ctx.response.body = {
      //   name:'123'
      // }
      const baseSchema = `
                    schema {
                        query: Query
                        mutation: Mutation
                    }
              `;

      const schema = makeExecutableSchema({
        typeDefs: [
          // baseSchema,
          typeDefs,
          //   baseSchema,
          //   userType,
          //   songType,
          //   playlistType
        ],
        resolvers: resolvers,
        //  merge(
        //   {},
        //   userResolvers,
        //   songResolvers,
        //   playlistResolvers
        // )
      });

      await graphql(schema, query, { ctx, next }, variables)
        .then((data) => {
          const { errors } = data;
          console.log("data=", data);
          console.log("stringify data=", JSON.stringify(data));

          if (errors) {
            response.body = merge(graphqlError, {
              errors,
            });
          } else {
            console.log("get==", data);
            // ctx.response.body = {
            //   name:'123'
            // }
            response.body = data;

            // JSON.stringify(data);
          }
        })
        .catch((error) => {
          console.log("error==", error);
        });
    });
    // //变异
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
    this.app.use(this.router.routes()).use(this.router.allowedMethods());

    // this.app.use(this.router.routes()).use(this.router.allowedMethods());
  }
  init() {
    // 添加中间件
    this.middleware();
    //创建路由
    this.createRouter();

    // 添加路由
    this.addRouters();
  }
}

export default   Route;
