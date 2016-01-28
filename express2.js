// @desc    
// @author  wei.nan
// @date    16/1/27
var express = require('express')
var app = express()

app.get('/', function (req, res, next) {
    promise1()
        .then(function (data) {
            //throw Error('error');
            return promise2(data)
        })
        .then(function (data) {
            res.send('ok');
        })
        .catch(function (e) {
            res.send(e.message);
        });
});

//promise1
function promise1() {
    return new Promise(function (resole, reject) {
        setTimeout(function () {
            resole(1);
        }, 1)
    })
}

//promise2
function promise2(data) {
    return new Promise(function (resole, reject) {
        setTimeout(function () {
            reject(Error('error' + data));
        }, 1)
    }, 1)
}


app.listen(5000, function () {
    console.log('node listen localhost:5000');
});