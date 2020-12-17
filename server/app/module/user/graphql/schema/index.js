import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from "graphql/type";
//会员模块
import  userResolvers,  * as userSchema  from './user';
const user ={
  userResolvers,
  userSchema,
}
// import user from "./user";
// import home from "./home";
console.log('user=',user)

export  {user};
// export {
//   user
// }
