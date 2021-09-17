import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};


import cloudbase from "@cloudbase/js-sdk";
console.log(cloudbase)
const app =  cloudbase.init({
  env: "dev-1gpp53ju3ceb46c7"
});


const auth = app.auth();
async function login(){
  auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState =  auth.getLoginState();
//   console.log(loginState.isAnonymousAuth); // true
}
 login();

// const db = await app.database();
// const collection = await db.collection("User").doc('28ee4e3e604ed4b90aafd6d861995b34').get();
// console.log(collection)
// const res = await db.collection("User").doc('28ee4e3e604ed4b90aafd6d861995b34').update({ 'storeId':123});
// console.log(res)

app
    .callFunction({
      name: 'core',
      data: {
        apiName: 'user',
        funcName: 'getByUnionId',
        param: 'o-RM65odAK6kuYOhcNiag3hyD23Q'
      }
    })
  .then((res) => {
    console.log(res);
  });