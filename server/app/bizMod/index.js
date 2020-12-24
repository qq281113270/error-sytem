import {
  // 动态导入模块
  router as abnormityRouter,
  schema as abnormitySchema,
} from "./abnormity";
import {
  // 动态导入模块
  router as performanceRouter,
  schema as performanceSchema,
} from "./performance";
import { checkSchema } from "@/utils";
const checkSchemas = checkSchema();
export const schema = (() => {
  let typeDefs = {
    schema: "",
    schemas: [],
  };
  let resolvers = {
    Mutation: {},
    Query: {},
    Subscription: {},
  };

  // 动态添加模块
  const schemas = {
    ...abnormitySchema,
    ...performanceSchema,
  };

  const schemaKeys = Object.keys(schemas);

  for (let key of schemaKeys) {
    typeDefs.schema += schemas[key].typeDefs.schema + "\n";
    typeDefs.schemas.push(schemas[key].typeDefs.schema);
    checkSchemas(resolvers, schemas[key].resolvers);
  }

  return {
    typeDefs,
    resolvers,
  };
})();
export const router = (app, router) => {
  // 动态添加模块
  new abnormityRouter(app, router);
  new performanceRouter(app, router);
};
