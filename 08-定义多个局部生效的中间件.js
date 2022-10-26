const express = require('express');
const app = express();

const mw1  = (req,res,next)=>{
    console.log('调用了局部生效的中间件   1')
    next();
}
const mw2  = (req,res,next)=>{
    console.log('调用了局部生效的中间件   2')
    next();
}

// 也可以用数组形式添加
// [mw1,mw2] 也可直接添加 mw1,mw2
// 🏄‍结果：
// 调用了局部生效的中间件   1
// 调用了局部生效的中间件   2
// hello luyou one
app.get('/',[mw1,mw2],(req,res)=> {
    console.log('hello luyou one');
    res.send('Hello luyou one');
})
// 🏄‍结果：
// hello luyou two
app.get('/user',(req,res)=> {
    console.log('hello luyou two');
    res.send('Hello luyou two');
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})