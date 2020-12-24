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
import httpError from "http-errors";
import { createToken, checkToken, destroyToken, getUserIfo } from "@/redis";
import { merge } from "@/utils";
import { graphqlError } from "@/constant";
import Router from "koa-router";
import { makeExecutableSchema } from "graphql-tools";
// import Home from "./home";
import User from "./user";
import { common } from "@/middleware/index";
import { router as bizModRouter } from "@/bizMod/index";
import { unsupported, unauthorized } from "@/constant";
import { schema } from "@/graphql/schema";

console.log("bizModRouter======", bizModRouter);
console.log("schema======", schema);

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
    // 添加 404 500 中间件
    common(this.app, this.router);
  }

  checkToken() {
    this.router.use(async (ctx, next) => {
      const {
        request: { header },
        cookies,
        response,
      } = ctx;

      const token = cookies.get("token") || header.token;

      await getUserIfo(token)
        .then(async (value) => {
          console.log("value=", value);
          response.userInfo = value;
          await next();
        })
        .catch((error) => {
          response.userInfo = null;
          ctx.response.body = merge(unauthorized, {
            msg: "登录回话已过期，请重新登录",
          });
        });

      //  await next();
    });
  }
  // 添加路由
  addRouters() {
    new User(this.app, this.router);
    bizModRouter(this.app, this.router);

    // new bizMod.abnormity.script.router(this.app, this.router)

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

      // console.log('cookies===', cookies.get('token'));
      // const { query = '', variables = {} } = ctx.query;
      // const { response } = ctx;
      // console.log('schema==',schema)
      console.log("query==", query);
      console.log("variables==", variables);
      // console.log("token=====", ctx.cookies.get("token"));
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

export default Route;
