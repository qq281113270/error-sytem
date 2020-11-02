import XMLHttpRequest from './XMLHttpRequest';
import baseUrl from './baseUrl';
// 合并成一个对象
// import * as requestApi from './requestApi';
// 改名接口导入
// export { register as Register } from './requestApi';
 

export{
    XMLHttpRequest,
    baseUrl,
    // 改名导出
    // baseUrl as $baseUrl
}

// 整体输出
export * from './requestApi';

 