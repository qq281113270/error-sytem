import Request, { gql, GraphqlClient } from "./request";

var userId = "559645cd1a38532d14349246";

const register = (data) => {
  return Request.post("/user/register", data);
};

const login = (data) => {
  return GraphqlClient.query({
    query: gql`{
            user(id: "${userId}") {
              name
              friends {
                name
              }
            }
          }`,
  });
};

const createUser = (data) => {
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

export { createUser, register, login };
