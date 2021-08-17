/*
 * @Author: your name
 * @Date: 2020-12-28 16:02:26
 * @LastEditTime: 2021-08-17 17:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/server/app/bizMod/abnormity/bizMod/user/graphql/schema/resolvers/Query/index.js
 */
import { outHttpLog } from "@/utils";

export const getUserInfo = (root, parameter, source, fieldASTs) => {
  const { ctx: { request, response } = {} } = root;
  console.log('parameter=',parameter)
  outHttpLog({
    source,
    response,
    __filename,
  });
  return {
    code: 200,
    message: "请求成功",
    data: {
      name: "名称12312323",
      phone: 123456,
    },
  };
};
