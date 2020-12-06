import {redisClient} from "./redis";
import JWTR from "jwt-redis";
import webJwt from "jsonwebtoken";
import { merge,promise } from "../utils";


//创建redisClient 客户端
// const redisClient = redis.createClient();

console.log('redisClient=',redisClient)
const jwtr = new JWTR(redisClient);
const { sign, verify, destroy } = jwtr;


var secret = 'secret';
var jti = 'test';
var payload = { jti };

const createToken = async  (id, payload = {}) => {
  // //产生token
  // payload = merge(
  //   {
  //     ctime: Date.now(), //创建时间
  //   },
  //   payload
  // );
  console.log('payload=',payload)
  console.log('id=',id)
  // //可加其他字段
  // const token =  await sign(payload, id + "", { expiresIn: 60 }).then((data)=>{
  //   console.log('data==',data)
  //   return data
  // }); //设置过期时间60s
  // return token;

//  const token =   jwtr.sign({}, 'secret', {expiresIn: 60}) .then((token)=>{
//      console.log('token================',token)
//           // Token verification
//           // return jwtr.verify(token, secret);
//   })

//  console.log('token================',token)

 jwtr
 .sign({}, secret)
 .then(function (token) {
  console.log('token================',token)
 })
 .catch(function (err) {

 })

  // jwtr.sign(payload, secret)
  // .then((token)=>{
  //    console.log('token================',token)
  //         // Token verification
  //         // return jwtr.verify(token, secret);
  // })

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
