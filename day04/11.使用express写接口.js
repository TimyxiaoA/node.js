// 引入 express
const express = require('express');
// 创建服务器对象
const app = express();
// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
	const fn = req.query.callback;
	const data = JSON.stringify({ name: 'zs', age: 18 });
	res.send(`${fn}(${data})`);
});
const cors = require('cors');

// 引入自定义模块
const router = require('./12.apiRouter');
app.use(cors());
// 使用内置模块解析JSON和urlencoded格式数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 把路由模块,注册到 app 上
app.use('/api', router);

// 监听端口
app.listen(80, () => console.log('Server running on http://127.0.0.1'));
