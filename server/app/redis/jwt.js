/*
 * @Author: your name
 * @Date: 2020-12-24 16:21:28
 * @LastEditTime: 2021-08-17 11:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/server/app/redis/jwt.js
 */
import { Redis, redisClient } from "./redis";
import JWTR from "jwt-redis";
import webJwt from "jsonwebtoken";
import { merge, promise } from "@/utils";
import { tokenExpires } from "@/config";
const { sign, verify, decode } = webJwt;
// 创建Token
const createToken = async (userInfo = {}, payload = {}) => {
  const { id = "" } = userInfo;
  //  产生token
  payload = merge(
    {
      ctime: Date.now(), //创建时间
    },
    payload
  );
  //创建token
  const token = await sign(payload, `${id}`, { expiresIn: 0 });
  //删除旧的token
  await destroyToken(id);
  // 重新设置 redis
  await Redis.set(
    `${id}`,
    JSON.stringify({
      token,
      id,
      ...userInfo,
    })
  );
  await Redis.set(
    `${token}`,
    JSON.stringify({
      token,
      id,
      ...userInfo,
    })
  );
  updateRequestTime(token);
  return token;
};

//销毁token
const destroyToken = async (tokenOrId) => {
  const userInfo = (await getUserInfo(tokenOrId)) || {};
  const { id, token } = userInfo;
  id && (await Redis.del(id));
  token && (await Redis.del(token));
  return "成功删除token";
};
//获取用户信息
const getUserInfo = (tokenOrId) => {
  return promise((resolve, reject) => {
    redisClient.get(tokenOrId, (err, data) => {
      if (err) {
        console.log(err);
        reject();
        return false;
      }
      // console.log("idGetUserInfo:" + data);
      resolve(data);
    });
  });
};

//验证token
const checkToken = (tokenOrId) => {
  return getUserInfo(tokenOrId) ? true : false;
};

//更新请求时间
const updateRequestTime = (tokenOrId) => { 
  const { id, token } = getUserInfo(tokenOrId) || {};
  id && redisClient.pexpire(`${id}`, tokenExpires);
  token && redisClient.pexpire(`${token}`, tokenExpires);
};

export { createToken, destroyToken, getUserInfo, checkToken };
