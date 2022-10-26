const express = require('express');
const app = express();

// 局部生效中间件
// 不使用app.use()定义的中间件

// 1.定义中间件函数
const mw1  = (req,res,next)=>{
    console.log('调用了局部生效的中间件')
    next();
}

// 🏄‍结果：
// 调用了局部生效的中间件
// hello luyou one
app.get('/',mw1,(req,res)=> {
    console.log('hello luyou one');
    res.send('Hello luyou one');
})
// 🏄‍结果：
// hello luyou one
app.get('/user',(req,res)=> {
    console.log('hello luyou two');
    res.send('Hello luyou two');
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})