const promise =(fn)=>{
   
  return new Promise((resolve,reject)=>{
      fn(resolve,reject)
  })

}

export {
    promise 
};
