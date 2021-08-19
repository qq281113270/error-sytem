/*
 * @Author: your name
 * @Date: 2021-08-19 11:49:56
 * @LastEditTime: 2021-08-19 14:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/server/app/redis/jsonwebtoken/index.js
 */

import jwa from "jwa";
class Jsonwebtoken {
  static tokensCache = {};
  static sign(payload = {}, signingKey, callback = () => {}) {
    const { exp } = payload;
    delete payload.exp;
    const hmac = jwa("HS512");
    const input =
      typeof payload === "String" ? payload : JSON.stringify(payload); // "super important stuff";
    const secret = `${signingKey}`;
    const token = hmac.sign(input, secret);
    callback(token);
    this.tokensCache[token] = {
      iat: new Date().getTime(), //创建token时间
      exp, //过期时间
      body: {
        ...payload,
      },
      hmac,
    };
    return token;
  }
  static verify(token, signingKey, options, callback = () => {}) {
    try {
      if (typeof options === "Function") {
        callback = options;
        options = {};
      }
      const { updateExp, ignoreExpiration } = options;
      let falg = false;
      if (this.tokensCache[token]) {
        const {
          body: payload,
          hmac,
          iat, //创建token时间
          exp, //过期时间
        } = this.tokensCache[token];
        const secret = `${signingKey}`;
        const input =
          typeof payload === "String" ? payload : JSON.stringify(payload); // "super important stuff";
        let info = {
          iat,
          exp,
          body: {
            ...payload,
          },
        };

        if (!ignoreExpiration && exp) {
          //检验是否过期
          const nowTime = new Date().getTime();
          info = {
            iat,
            exp,
            nowTime,
            body: {
              ...payload,
            },
          };
          //有时间校验的
          if (nowTime > exp) {
            callback(
              {
                message: "token有效期已过",
              },
              info
            );
            return false;
          }
        }
        falg = hmac.verify(input, token, secret);
        falg
          ? callback(null, info)
          : callback(
              {
                message: "token校验失败",
              },
              info
            );
        if (updateExp) {
          this.tokensCache[token].exp = updateExp;
        }
        return falg;
      } else {
        callback(
          {
            message: "无效token",
          },
          {}
        );
        return falg;
      }
    } catch (error) {
      console.error("error=========", error,__filename);
    }
  }
}

export default Jsonwebtoken;
