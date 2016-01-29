// @desc    
// @author  wei.nan
// @date    16/1/27
var express = require('express')
var app = express()
app.get('/', function (req, res, next) {
    promise1()
        .then(function (data1) {
            //throw Error('error');//@1 捕获
            return promise2(data1)
        })
        .then(function (data2) {
            res.send(data2);
        })
        .catch(function (e) {
            res.send(e.message);
        });
});
//promise1
function promise1() {
    return new Promise(function (resole, reject) {
        //throw Error('error'); //@2 捕获
        setTimeout(function () {
            //throw Error('error'); //@3 crash
            resole("Hello"); //@4 返回正确结果
            //reject(Error('error));//@5 返回错误结果
        }, 1)
    })
}
//promise2
function promise2(data1) {
    return new Promise(function (resole, reject) {
        setTimeout(function () {
            resole(data1 + " world");
        }, 1)
    }, 1)
}
app.listen(5000, function () {
    console.log('node listen localhost:5000');
});