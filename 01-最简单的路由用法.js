const express = require('express');
const app = express();

//   挂栽路由
// 不推荐将路由直接挂载到app上
//  因为这样会令路由很长 需要将路由抽离为单独的模块
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.post('/',(req,res)=>{
    res.send('hello request');
})

app.listen(80,()=>{
    console.log('express app running at http://127.0.0.1');
})