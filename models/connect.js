// 引入mongoose第三方模块
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(function () {
        console.log('Database connection succeeded')
    }).catch(function (e) {
        console.log(e)
        console.log('Database connection failed')
    })