// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 导入并注册路由模块
app.use(require('./3.router.js'));

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
