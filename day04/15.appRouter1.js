const express = require('express');

const router = express.Router();

router.get('/get', (req, res) => {
	const query = req.query;
	res.send({
		status: 0,
		message: 'get 获取成功!',
		data: query
	});
});

router.post('/post', (req, res) => {
	const body = req.body;
	res.send({
		status: 0,
		message: 'post 获取成功!',
		data: body
	});
});

router.delete('/delete', (req, res) => {
	const body = req.body;
	res.send({
		status: 0,
		message: 'delete 获取成功!',
		data: {
			test: 'success'
		}
	});
});
module.exports = router;
