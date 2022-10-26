const  express = require('express');
const app = express();
// app.use(express.static('./'))

// 1.导入路由模块
const router = require('./03-router');
// 2.注册路由模块
// app.use(router);
// 为添加前缀  http://127.0.0.1/aaa/user/list
app.use('/aaa',router)
// 注意 app.use() 函数的作用 就是来注册全局的中间件

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})