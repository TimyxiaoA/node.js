// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 第一种 /?uname=zs&age=19
app.get('/', (req, res) => {
	res.send(req.query);
	//可得到 /?后面的查询字符串的对象表示结果 { uname:zs;age:19 }
});

//  第二种 /:20
app.get('/:id', (req, res) => {
	res.send(req.params); //可得到 /:后面的 { id : 20 }的对象表示结果
});

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
