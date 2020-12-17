const graphqlError = {
  code :400,
  msg :"请求参数有误，graphql语法错误",
}


const unsupported = {
  //对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。
  code :415,
  msg :"服务器已经理解请求，但是拒绝执行它",
}

const unauthorized = {
  // 当前请求需要用户验证. 如果验证不通过则返回401
  code :401,
  msg :"当前请求需要用户验证.",
}

 

export {graphqlError,unsupported ,unauthorized };
