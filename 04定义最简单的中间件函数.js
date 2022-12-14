const express  = require('express');
const app = express();


// 定义一个最简单的中间件函数
const mw = function(req,res,next){
    console.log('这是最简单的中间件函数')
    // 把流转关系交给下一个中间件或者路由
    next();
}


// 将mw注册为全局生效的中间件
app.use(mw);

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/user',(req,res)=>{
    res.send('User Page');
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})