import { connection, exec } from './mysql';
// 添加用户
const addUser = async ({
    name,
    phone,
    password,
})=>{
   const sql=`insert into user(name,phone,password) values(${name},'${phone}',md5(${password}));`
   return  await exec(sql)
}

//查询用户
const queryUser=async(andConditionData={},orConditionData={},sql)=>{
    if(sql){
        return  await exec(sql)
    }
    sql=`select * from user where `
    const andKeys = Object.keys(andConditionData);
    andKeys.forEach(key=>{
        sql+=key=='password'?` ${key}=md5(${andConditionData[key]}) and`:  ` ${key}=${andConditionData[key]} and`
    })
    sql=sql.substring(0,sql.length-3);

    const orKeys = Object.keys(orConditionData);
    orKeys.forEach(key=>{
        sql+=key=='password'?` ${key}=md5(${data[key]}) or`:  ` ${key}=${data[key]} or`
    })
    sql=sql.substring(0,sql.length-2);

    return  await exec(sql);
}


//删除用户
const deleteUser=async(id)=>{
    const sql=`DELETE  FROM user  WHERE id=${id};`  
    return  await exec(sql)
}


 

// 导出
export {
    addUser,
    deleteUser,
    queryUser
}