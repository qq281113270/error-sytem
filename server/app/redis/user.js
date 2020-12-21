import {userIdCheckToken,checkToken } from "./jwt";
import { Redis, redisClient } from "./redis";
import { merge, promise } from '@/utils';
import { tokenExpires } from '@/config';
// 获取用户信息
const getUserIfo = async (tokenOrId) => {
  const userIdTokens = (await userIdCheckToken(tokenOrId)) || [];
  const tokens = (await checkToken(tokenOrId)) || [];
  const data = await Redis.get(merge(userIdTokens,tokens)[0]);
  redisClient.pexpire(merge(userIdTokens,tokens)[0],tokenExpires)
  return data;
};

export { getUserIfo };
