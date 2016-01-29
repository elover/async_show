// @desc    
// @author  wei.nan
// @date    16/1/27
var express = require('express')
var app = express()
app.get('/', function (req, res, next) {
    async1(function (err, data1) {
        if (err) {
            return res.send(err.message);
        }
        async2(function (err, data2) {
            if (err) {
                return res.send(err.message);
            }
            res.send(data1 + data2);
        });
    });
});
// 异步1
function async1(fn) {
    //throw Error('error') //@1 可捕获的异常
    setTimeout(function () {
        // throw Error('error') //@2 异步中的异常 不能捕获,会直接导致应用crash退出
        fn(null, 'Hello '); //@3 正常
        //fn(Error('error'), 1); //@4 异常
    }, 1)
}
// 异步2
function async2(fn) {
    //throw Error('error') //@5 异步中的异常 不能捕获,会直接导致应用crash退出
    setTimeout(function () {
        fn(null, 'World')
        //fn(Error('error'));
    }, 1)
}
app.listen(4000, function () {
    console.log('node listen localhost:4000');
});