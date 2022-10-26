// 引入express 模块
const express = require('express');
// 创建服务器server
const app = express();


// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))
const cors = require('cors');
app.use(cors());

// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题


// 导入路由模块
const router = require('./13-apiRouter');

// 把路由模块注册到app上
app.use('/api',router);

// 开启服务器
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
