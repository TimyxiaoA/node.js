// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

app.use((req, res, next) => {
	const time = Date.now();
	req.info = `请求的时间是${time},请求的方式是${req.method},请求的地址是${req.url}`;
	res.send(`<h1 style="text-align:center;margin-top:100px;">网站正在维护中...</h1>`);
});

app.get('/', (req, res) => {
	res.send('Home page' + req.info);
});

app.get('/user', (req, res) => {
	res.send('User page' + req.info);
});

// 监听端口
app.listen(80, () => console.log('Server running on http://localhost'));
