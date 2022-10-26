const express  = require('express');
const app = express();





// 将mw注册为全局生效的中间件 简化形式
app.use(function(req,res,next){
    // 把流转关系交给下一个中间件或者路由

    // 获取到请求到达服务器的时间
    const time = Date.now();
    // 为req对象 挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = time;

    next()})

app.get('/',(req,res)=>{
    // const time  = Date.now();
    res.send('Home Page' + req.startTime);
})

app.get('/user',(req,res)=>{
    // const time  = Date.now();
    res.send('User Page');
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})