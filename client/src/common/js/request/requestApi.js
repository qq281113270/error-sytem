import Request from './request';

const register = (data)=>{
    return Request.post('/user/register',data)
}




export {
    register,

}