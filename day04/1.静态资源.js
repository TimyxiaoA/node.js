// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 对外开放静态资源访问
app.use(express.static('clock'));

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
