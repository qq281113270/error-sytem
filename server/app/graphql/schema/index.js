//会员模块
import { default as userSchema } from "./user";
import { schema as bizModSchema } from "../../bizMod";

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

  const schemas = {
    //添加最外层模块
    user: userSchema,
    bizMod: bizModSchema,
  };

  const schemaKeys = Object.keys(schemas);

  for (let key of schemaKeys) {
    typeDefs.schema += schemas[key].typeDefs.schema + "\n";
    if (key != "bizMod") {
      typeDefs.schemas.push(schemas[key].typeDefs.schema);
    }
    // typeDefs.schemas.push(schemas[key].typeDefs.schema);
    checkSchemas(resolvers, schemas[key].resolvers);
  }
  typeDefs.schemas = [...typeDefs.schemas, ...bizModSchema.typeDefs.schemas];

  return {
    typeDefs,
    resolvers,
  };
})();
