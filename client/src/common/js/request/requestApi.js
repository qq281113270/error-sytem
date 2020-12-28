import Request, { gql, GraphqlClient } from "./request";

var userId = "559645cd1a38532d14349246";

// 注册
export const register = (data) => {
  return Request.post("/user/register", data);
};

// 登录
export const login = (data) => {
  return Request.post("/user/login", data);
};

// 查询
export const query = (schema, data) => {
  return GraphqlClient.query({
    query: gql`${schema}`,
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
      mutation M($name: String!) {
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

// 查询
export const getUserInfo = (data) => {
  return GraphqlClient.query({
    query: gql`
      {
        getUserInfo {
          code
          mgs
          data {
            name
            phone
          }
        }
      }
    `,
  });
};

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
