// 1.导入各种模块
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
const mime = require('mime');

server.on('request', (req, res) => {
	// 2.获取用户输入的url
	const url = req.url;
	// 3.拼接url地址并读取文件
	let source = '';
	if (url === '/') {
		source = path.join(__dirname, '/clock/index.html');
	} else {
		source = path.join(__dirname, 'clock', url);
	}

	fs.readFile(source, 'utf8', (err, dataStr) => {
		if (err) return res.end('404 Not found.');
		res.setHeader('Content-Type', `${mime.getType(source)};charset=utf8`);

		res.end(dataStr);
	});
});

// 4.响应内容并启动服务器
server.listen(4000, () => console.log('server running on http://127.0.0.1:4000'));
