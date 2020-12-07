import { addUser, deleteUser, queryUser } from "../db/user";
import { unsupported, unauthorized } from "../constant";
import { merge } from "../utils";
import { createToken, checkToken, destroyToken, getUserIfo } from "../redis";

class Service {
  static list(page) {
    console.log("page=", page);
    const dataList = {
      list: [
        {
          time: "2019-7-10",
          id: 1,
          title: "this is news 1",
          url: "/news/1",
        },
        {
          time: "2019-8-10",
          id: 2,
          title: "this is news 2",
          url: "/news/2",
        },
      ],
    };

    return dataList.list[page] || {};
  }
  static async add(ctx, next, parameter) {
    const { username: name, phone, password } = parameter;
    /*
     1 查询用户名是否被注册过，
     2 查询手机号码是否被注册过
     3 如果都没有被注册那么就可以注册
    */
    let userInfo = await this.queryUser({
      name,
    });

    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    if (userInfo && userInfo.id) {
      return {
        status: 1,
      };
    }

    userInfo = await this.queryUser({
      phone,
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    if (userInfo && userInfo.id) {
      return {
        status: 2,
      };
    }
    const data = await addUser({
      name,
      phone,
      password,
    });
    if (data) {
      return {
        status: 3,
      };
    }
  }
  static edit() {}
  static async queryUser(...ags) {
    const userData = await queryUser(...ags);
    return userData;
  }

  static async login(ctx, next, parameter = {}) {
    const { username: name, phone, password } = parameter;
    /*
     1 查询用户名是否被注册过，
     2 查询手机号码是否被注册过
     3 如果都没有被注册那么就可以注册
    */
    let userInfo = await this.queryUser({
      name,
    });

    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    if (!userInfo) {
      return {
        status: 1,
      };
    }

    userInfo = await this.queryUser({
      password,
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    if (!userInfo) {
      return {
        status: 2,
      };
    }
    userInfo = await queryUser({
      name,
      password,
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    /*
     创建 createToken  
    */
    const token = await createToken(userInfo);
    delete userInfo.password
    ctx.response.userInfo = userInfo;
    if (userInfo) {
      //登录成功
      return {
        status: 3,
        token,
        userInfo
      };
    }
  }
}

export default Service;
