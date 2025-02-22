import request from '../utils/request';
import cloudbase from "@cloudbase/js-sdk";

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

async function index() {
    const app = await cloudbase.init({
    env: "dev-1gpp53ju3ceb46c7"
    });
    const auth = await app.auth();
    async function login(){
    await auth.anonymousAuthProvider().signIn();
    // 匿名登录成功检测登录状态isAnonymous字段为true
    const loginState =  await auth.getLoginState();
    //   console.log(loginState.isAnonymousAuth); // true
    }
    await login();
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
}

index()

// const db = await app.database();
// const collection = await db.collection("User").doc('28ee4e3e604ed4b90aafd6d861995b34').get();
// console.log(collection)
// const res = await db.collection("User").doc('28ee4e3e604ed4b90aafd6d861995b34').update({ 'storeId':123});
// console.log(res)