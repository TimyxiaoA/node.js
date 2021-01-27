const express = require('express');

const app = express();
//静态资源访问
app.use(express.static('./clock'));
//处理前端传递的 application/json 这种格式的,后续路由才有 req.body 属性
app.use(express.json());
//处理前端传递的 application/x-www-form-urlencoded 这种格式的,后续路由才有 req.body 属性
app.use(express.urlencoded({ encoded: false }));
