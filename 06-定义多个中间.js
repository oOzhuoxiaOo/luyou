const express = require('express');
const app = express();

// 第一个全局中间件
app.use((req,res,next)=>{
    console.log('第一个全局中间件');
    next();
})
// 第二个全局中间件
app.use((req,res,next)=>{
    console.log('第二个全局中间件');
    next();
})

app.get('/',(req,res)=> {
    console.log('hello luyou one');
    res.send('Hello luyou one');
})

app.get('/user',(req,res)=> {
    console.log('hello luyou two');
    res.send('Hello luyou two');
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})