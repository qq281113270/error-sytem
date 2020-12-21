import { Redis, redisClient } from "./redis";
import JWTR from "jwt-redis";
import webJwt from "jsonwebtoken";
import { merge, promise } from "@/utils";
import { tokenExpires } from '@/config';
const { sign, verify, decode } = webJwt;

// 用用户id验证token
const userIdCheckToken = (userId) => {
  return promise((resolve, reject) => {
    redisClient.keys(`userid_${userId}_*`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

//验证token
const checkToken = (token) => {
  return promise((resolve, reject) => {
    redisClient.keys(`userid_*_${token}`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

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
  //获取用户token key
  const userIdTokens = await userIdCheckToken(id);
  if (userIdTokens && userIdTokens.length >= 1) {
    // 删除多余的key实现单点登录
    userIdTokens.forEach(async (key) => {
      await Redis.del(key);
    });
  }
  // 重新设置 redis 
  await Redis.set(`userid_${id}_${token}`, JSON.stringify(userInfo));
  redisClient.pexpire(`userid_${id}_${token}`,tokenExpires)

  return token;
};

//销毁token
const destroyToken = async(tokenOrId) => {
  const userIdTokens = await userIdCheckToken(tokenOrId)||[];
  const tokens = await checkToken(tokenOrId)||[];
  merge(userIdTokens,tokens).forEach(async (key)=>{
    await Redis.del(key);
  }) 
  return "成功删除token"
};


export { createToken, checkToken, destroyToken,userIdCheckToken };
