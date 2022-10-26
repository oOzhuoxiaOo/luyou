const express  = require('express');

const app = express();


app.get('/',(req,res)=>{
    throw new Error('服务器内发生错误');
    res.send('Hello Page');
})

// 发生错误中间件 
// 📕注意 错误中间件必须在路由之后(和其他中间件不同 其他是在路由之前由next迭代)
// return 发生了错误:服务器内发生错误
// 防止发生错误 服务器崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误:' + err.message);
    res.send(err.message);
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
