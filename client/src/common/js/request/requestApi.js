/*
 * @Author: your name
 * @Date: 2020-12-14 10:03:45
 * @LastEditTime: 2021-08-17 17:34:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/common/js/request/requestApi.js
 */
import Request, { gql, GraphqlClient } from "./request";

var userId = "559645cd1a38532d14349246";

// 注册
export const register = (data) => {
  return Request.post("/abnormity/user/register", data);
};

// 登录
export const login = (data) => {
  return Request.post("/abnormity/user/login", data);
};

// 查询
export const query = (schema, data) => {
  return GraphqlClient.query({
    query: gql`
      ${schema}
    `,
    variables: data,
  });
};
export const mutation = (schema, data) => {
  return GraphqlClient.mutate({
    mutation: `${schema}`,
    variables: data,
  });
};

//变异
export const createUser = (data) => {
  return GraphqlClient.mutate({
    mutation: `
      mutation($name: String!) {
        createUser(name: $name) {
          name
          friends {
            name
          }
        }
      }
      `,
    variables: data,
  });
};

export const getUser = () => {
  return GraphqlClient.query({
    query: gql`
      {
        hello
      }
    `,
  });
};

//   更改
export const setUserInfo = (data) => {
  return GraphqlClient.mutate({
    mutation: `
      mutation ($user: UserInfoInput!) {
        setUserInfo(user: $user) {
          code
          mgs
          data {
            name
            phone
          }
        }
      }
    `,
    variables: {
      user: {
        id: 123,
        toKen: "123",
      },
    },
  });
};

// 查询
export const getUserInfo = (id = "") => {
  return GraphqlClient.query({
    query: `
      query{
          getUserInfo(id: ${id}) {
            code
            message
            data {
              name
              phone
            }
          }
      }
    `,
  });
};

// // 查询
// export const getUserInfo = (id='') => {
//   return GraphqlClient.query({
//     query: `
//       query($id:ID){
//           getUserInfo(id:$id) {
//             code
//             message
//             data {
//               name
//               phone
//             }
//           }
//       }
//     `,
//     variables: {
//       id:123
//     },
//   });
// };

export const hello = (data) => {
  return GraphqlClient.query({
    query: gql`
            {
                hello()
                {

                }
            }
        `,
  });
};
