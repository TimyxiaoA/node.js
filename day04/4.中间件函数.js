const express = require('express');
const app = express();

const mw = (req, res, next) => {
	next();
};
//将中间件定义为全局生效 下面的中间件或路由可以使用中间件的方法
app.use(mw);

app.get('/', (req, res) => {
	res.send(req.query);
});

app.listen(80, () => console.log('server running on http://localhost'));
