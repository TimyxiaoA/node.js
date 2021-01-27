// 引入 express
const express = require('express');

// 创建服务器路由对象
const router = express.Router();

//挂载具体的路由
router.get('/user/list', (req, res) => {
	res.send('Get user list.');
});

router.post('/user/add', (req, res) => {
	res.send('Add new user.');
});

module.exports = router;
