// @desc    
// @author  wei.nan
// @date    16/1/28

require('babel/register')({ stage: 0 });  // 依赖babel
var app = require('./app');
app.listen(7000, function () {
    console.log('node listen localhost:7000');
});
