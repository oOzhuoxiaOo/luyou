const express = require('express');
const router = express.Router();


// 这里挂载对应的路由
router.get('/get',(req,res)=>{
    // 通过req.quert获取客户端请求的字符串，发送到服务器的数据
    const query = req.query;
    // 调用res.send()方法，向客户端响应应处理的结果
    res.send({
        status: 0,//0表示处理成功。1表示数据处理失败
        msg:'GET 请求成功!',//状态得的描述
        data: query //需要响应给客户端的数据
    })
})

// 定义 POST 接口
router.post('/post',(req,res)=>{
    //  通过 req.body 获取请求体中包含 url-encoded 格式的数据
    const body = req.body;
    // 调用res.send()方法，向客户端响应结果
    res.send({
        status:0,
        msg:'POST 请求成功!',
        data:body
    })
})


module.exports = router;