const express = require('express');

const router = express.Router();

router.get('/get', (req, res) => {
	const query = req.query;

	res.send({
		status: 0,
		message: 'GET 请求获取成功!',
		data: query
	});
});

router.post('/post', (req, res) => {
	const body = req.body;

	res.send({
		status: 0,
		message: 'POST 请求成功!',
		data: body
	});
});

router.delete('/delete', (req, res) => {
	res.send({
		status: 0,
		message: 'DELETE 请求成功!',
		data: {
			test: 'success'
		}
	});
});
module.exports = router;
