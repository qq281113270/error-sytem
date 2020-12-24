import {
  router as abnormityRouter,
  schema as abnormitySchema,
} from "./abnormity";
import {
  router as performanceRouter,
  schema as performanceSchema,
} from "./performance";

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
// console.log('abnormitySchema=========',abnormitySchema)
// console.log('abnormityRouter=========',abnormityRouter)

// console.log('performanceSchema=========',performanceSchema)
// console.log('performanceRouter=========',performanceRouter)

export const schema = (() => {
  let typeDefs = {
    schema:''
  };
  let resolvers = {
    Mutation: {},
    Query: {},
    Subscription: {},
  };

  const schemas={
    ...abnormitySchema,
    ...performanceSchema,
  }
  console.log('schemas=============',schemas)

   const schemaKeys = Object.keys(schemas);
  // const performanceSchemaKeys = Object.keys(performanceSchema);

  for (let key of schemaKeys) {
    //  console.log("abnormitySchema[key]===", abnormitySchema[key].typeDefs.schema);
     typeDefs.schema+=schemas[key].typeDefs.schema+'\n'

     /*
      resolvers.Mutation,
      resolvers.Query,
      resolvers.Subscription
     */  
  }
  console.log('typeDefs.schema2=======',typeDefs.schema)

  return abnormitySchema;
})();
export const router = (app, router) => {
  new abnormityRouter(app, router);
  new performanceRouter(app, router);
};
