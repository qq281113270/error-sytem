import redis from "redis";
import JWTR from "jwt-redis";
import { merge } from "./common";
//创建redisClient 客户端
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);
const { sign, verify, destroy } = jwtr;

const createToken = async (id, payload = {}) => {
  //产生token
  payload = merge(
    {
      ctime: Date.now(), //创建时间
    },
    payload
  );
  //可加其他字段
  return sign(payload, id + "", { expiresIn: 60 }); //设置过期时间60s
};

//验证token
const checkToken = (token, id) => {
  return new Promise((resolve, reject) => {
    verify(token, id + "", (err, data) => {
      if (err) {
        reject("token 验证失败");
      } else {
        resolve(data);
      }
    });
  });
};
//销毁token
const destroyToken = (token) => {
  return new Promise((resolve, reject) => {
    destroy(token, (err, data) => {
      if (err) {
        reject("token 验证失败");
      } else {
        resolve(data);
      }
    });
  });
};

export { createToken, checkToken, destroyToken };
