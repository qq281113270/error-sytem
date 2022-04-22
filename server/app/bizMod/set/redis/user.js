/*
 * @Author: your name
 * @Date: 2020-12-24 16:21:28
 * @LastEditTime: 2022-04-22 15:41:03
 * @LastEditors: Yao guan shou
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/server/app/bizMod/set/redis/user.js
 */
import { Redis, redisClient, RedisClass } from "@/redis";
import { verifyCodeExpires } from "../config";
export const setVerifyCode = (key, value, time) => {
  Redis.set(key, value);
  Redis.pexpire(key, time || verifyCodeExpires);
};

export const getVerifyCode = (key) => {
  console.log('getVerifyCode=',key)
  console.log('Redis.get(key)=',Redis.get(key))
  return Redis.get(key);
};
export {};
