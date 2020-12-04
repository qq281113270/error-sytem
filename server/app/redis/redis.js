import redis from "redis";
import { merge, promise } from "../utils";
class RedisClass {
  constructor(port, url, options = {}) {
    this.port = port;
    this.url = url;
    this.options = options;
  }
  //连接
  createRedisClient() {
    this.redisClient = redis.createClient(this.port, this.url, this.options);
  }
  // 连接
  connect(callback = () => {}) {
    return promise((resolve, reject) => {
      this.redisClient.on("connect", (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }
  ready(callback = () => {}) {
    return promise((resolve, reject) => {
      this.redisClient.on("ready", (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }
  error(callback = () => {}) {
    return promise((resolve, reject) => {
      this.redisClient.on("error", (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }
  end(callback = () => {}) {
    this.redisClient.on("end", (err, res) => {
      if (err) {
        callback(error);
        reject(error);
      } else {
        resolve(res);
      }
    });
  }
  set(key, str, callback = () => {}) {
    return promise((resolve, reject) => {
      this.redisClient.set(key, str, (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }
  get(key) {
    return promise((resolve, reject) => {
      this.redisClient.set(key, (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }
  init() {
    this.createRedisClient();
    return this;
  }
}


export const Redis = new RedisClass("xxx", "xxx", {});
export const redisClient = Redis.redisClient;

export default RedisClass;
 
