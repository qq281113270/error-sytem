import { addUser, deleteUser, queryUser } from "../../db/user";
import { unsupported } from "../constant";
import { merge } from "../urils";

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
      return merge(unsupported, {
        msg: "该用户名已经被注册过,请重新输入用户名",
      });
    }

    userInfo = await this.queryUser({
      phone,
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    if (userInfo && userInfo.id) {
      return merge(unsupported, {
        msg: "该手机号码已经被注册过,请重新输入手机号码",
      });
    }
    const data = await addUser({
      name,
      phone,
      password,
    });
    if (data) {
      return {
        code: 200,
        msg: "注册成功",
      };
    }
  }
  static edit() {}
  static async queryUser(...ags) {
    const userData = await queryUser(...ags);
    return userData;
  }

  static async login(ctx, next, parameter = {}) {
    
    return parameter;
  }
}

export default Service;
