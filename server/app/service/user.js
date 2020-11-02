import { addUser, deleteUser, queryUser} from '../../db/user';
class Service {
  static list(page){
    console.log('page=',page)
    const dataList = {
      list: [
        {
          time:'2019-7-10',
          id: 1, title: 'this is news 1', url: '/news/1' },
        {
            
          time:'2019-8-10', id: 2, title: 'this is news 2', url: '/news/2'
      }
      ]
    };

    return  dataList.list[page]||{};
  }
  static async add(parameter,ctx,next){
    const {
      username:name,
       phone,
       password, 
    }=parameter
   this.queryUser({
     id:1,
     password:1
   })
   const data = await  addUser({
      name,phone,password
    })

   console.log('data===',data)

  }
  static  edit(){

  }
  static  async queryUser(id){
    const userData = await queryUser(id)
    console.log('userData=',userData)
  }

  static  async login(parameter,ctx,next){
    console.log('parameter=',parameter)
     return parameter
  }
 

}

export default Service;