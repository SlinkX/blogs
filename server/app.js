// 安装模块
// multer   sqliste3  uuid 

const express = require('express')
const multer = require('multer')
const app = express()
const  port  = 8080

// 开放跨域请求
app.use(function(req,res,next) {
  // 设置允许跨跨域的域名  * 代表允许任意的夸名跨域
  res.header("Access-Control-Allow--Origin","*");
  // 允许跨域的header类型
  res.header("Access-Control-Allow-Headers","*");
  // 跨域请求的方式
  res.header("access-Control-Allow-Methods"," DELETE,PUT,POST,OPTIONS");
  if(req.method == "OPYIONS") res.sendStatus(200);//让options请求快速结束
  else next();
})


app.use(express())
const update = multer({
  dest:"./public/upload/temp"
})
app.use(update.any())

app.use("/test",require("./routers/TestRouter"))


app.get('/',(req,res) => {
  res.send("hello world")
})

app.listen(port,()=>{
  console.log(`启动成功：http:localhost:${port}/`)
})