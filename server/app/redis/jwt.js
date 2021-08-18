/*
 * @Author: your name
 * @Date: 2020-12-24 16:21:28
 * @LastEditTime: 2021-08-18 17:40:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/server/app/redis/jwt.js
 */
import { Redis, redisClient } from "./redis";
import nJwt from "njwt";
import { merge, promise } from "@/utils";
import { tokenExpires } from "@/config";
let jwtsCache = {};

// 创建Token
const createToken = async (userInfo = {}, payload = {}) => {
  const { id = "", username, password } = userInfo;
  // delete userInfo.name;
  // delete userInfo.password;
  //  产生token
  payload = {
    ...payload,
    password,
    username,
    createTime: new Date().getTime(), //创建时间
    exp: new Date().getTime() + tokenExpires,
  };
  const jwt = nJwt.create(payload, `${id}`);
  //创建token
  const token = jwt.compact();
  jwtsCache[token] = jwt;
  // 删除旧的token
  await destroyToken(token);
  // 重新设置 redis
  // await Redis.set(
  //   `${id}`,
  //   JSON.stringify({
  //     token,
  //     id,
  //     ...userInfo,
  //   })
  // );
  await Redis.set(
    `${token}`,
    JSON.stringify({
      token,
      id,
      ...userInfo,
    })
  );
  //更新token时间
  updateRequestTime(token);
  return token;
};

//销毁token
const destroyToken = async (token) => {
  await Redis.del(token);
  return "成功删除token";
};
//获取用户信息
const getTokenUserInfo = (token) => {
  return promise((resolve, reject) => {
    redisClient.get(token, (err, data) => {
      if (err) {
        reject(null);
        return false;
      }
      resolve(JSON.parse(data));
    });
  });
};

// 检验Token
const verifyToken = async (token) => {
  const userInfo = (await getTokenUserInfo(token)) || {};
  const { id: signingKey = "" } = userInfo;
  return promise((resolve, reject) => {
    nJwt.verify(token, `${signingKey}`, (err, verifiedJwt) => {
      if (err) {
        reject(null);
      } else {
        updateRequestTime(token);
        resolve(userInfo);
      }
    });
  });
};

//更新请求时间
const updateRequestTime = (token) => {
  jwtsCache[token].setExpiration(new Date().getTime() + tokenExpires);
  redisClient.pexpire(`${token}`, tokenExpires);
};

export { createToken, destroyToken, getTokenUserInfo, verifyToken };
