import redis from 'redis';
import { merge, promise } from '../utils';
import { REDIS_CONF } from '../config';
class RedisClass {
    constructor(port, url, options = {}) {
        this.port = port;
        this.url = url;
        this.options = options;
    }
    //连接
    createRedisClient() {
        this.redisClient = redis.createClient(
            this.port,
            this.url,
            this.options
        );
    }
    // 连接
    connect(callback = () => {}) {
        return promise((resolve, reject) => {
            this.redisClient.on('connect', () => {
                callback();
                resolve();
            });
        });
    }
    ready(callback = () => {}) {
        return promise((resolve, reject) => {
            this.redisClient.on('ready', (err, res) => {
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
            this.redisClient.on('error', (error) => {
                callback(error);
                reject(error);
            });
        });
    }
    end(callback = () => {}) {
        this.redisClient.on('end', (err, res) => {
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
            this.redisClient.set(key, str, (error, res) => {
                if (error) {
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
            this.redisClient.set(key, (error, res) => {
                if (error) {
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
// host: '127.0.0.1',
// password: '123456',
// port: '6378',

export const Redis = new RedisClass(
    REDIS_CONF.port,
    REDIS_CONF.host,
    REDIS_CONF.options
);

Redis.init();
export const redisClient = Redis.redisClient;
export default RedisClass;
