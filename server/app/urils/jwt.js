import  jwt from 'jsonwebtoken';
const screat = 'frdyhdrustgsdt';

const createToken = (payload) => {
    //产生token
    payload.ctime = Date.now(); //创建时间
    //可加其他字段
    return jwt.sign(payload, screat, { expiresIn: 60 }); //设置过期时间60s
};

//验证token
const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, screat, (err, data) => {
            if (err) {
                reject('token 验证失败');
            } else {
                resolve(data);
            }
        });
    });
};

export {
    createToken,
    checkToken,
};

 