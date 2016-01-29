var koa = require("koa");
var app = koa();
// 错误捕获
app.use(function *(next) {
    var getPromise = yield promise();
    var getThunks = yield thunks();
    this.body = getPromise + getThunks;
});
// promise 推荐
function promise() {
    return new Promise(function (resolve, reject) {
        //throw Error('error') // 可捕获的异常
        setTimeout(function () {
            //throw Error('error') // 异步中的异常,不可捕获的异常
            resolve("Hello");
        }, 1);
    })
}
// thunks function 不推荐
function thunks() {
    return function (fn) {
        //throw Error('error') // 可捕获的异常
        setTimeout(function () {
            fn(null, " world");// 正常
            //fn(Error('error'), 1); // 异常
        })
    }
}
app.listen(3000, function () {
    console.log('node listen localhost:3000');
});