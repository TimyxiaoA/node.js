// 引入
const express = require('express');
//创建服务器
const app = express();
//监听事件
app.get('/', (req, res) => {
	res.end('home');
});

app.get('/news', (req, res) => {
	res.end('news');
});
//设置端口
app.listen(4000, () => console.log('server running on http://localhost:4000'));
//TODO:


