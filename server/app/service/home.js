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
}

export default Service;