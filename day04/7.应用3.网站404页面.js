// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

app.get('/', (req, res) => {
	res.send('Home page' + req.info);
});

app.get('/user', (req, res) => {
	res.send('User page' + req.info);
});

app.use((req, res) => {
	res.send(`<h1 style="text-align:center;margin-top:100px;">404 找不到页面...</h1>`);
});

// 监听端口
app.listen(80, () => console.log('Server running on http://localhost'));
