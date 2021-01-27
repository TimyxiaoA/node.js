// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

app.get('/api/jsonp', (req, res) => {
	const fn = req.query.callback;
	const data = JSON.stringify({ name: 'zs', age: 18 });
	res.send(`${fn}(${data})`);
});
const cors = require('cors');
// 引入自定义模块
const router = require('./15.appRouter1');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 挂载模块
app.use('/api', router);

// 监听端口
app.listen(80, () => console.log('Server running on http://127.0.0.1'));
