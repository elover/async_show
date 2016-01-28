// @desc    
// @author  wei.nan
// @date    16/1/28

var express = require('express');
var app = express();

app.get('/', async function (req, res, next) {
    try{
        var getAsync1 = await async1();
        var getAsync2 = await async2();
        res.send(getAsync1 + getAsync2);
    }catch (e){
        console.log(e);
        res.send(e.message);
    }
});

async function async1() {
    return new Promise(function (resolve, reject) {
        //throw Error('error1');
        setTimeout(function () {
            //throw Error('error1');
            resolve("Hello");
        }, 1);
    });
}

// 异步1
async function async2() {
    return new Promise(function (resolve, reject) {
        //throw Error('error1');
        setTimeout(function () {
            resolve(" World");
        }, 1);
    });
}

module.exports = app;