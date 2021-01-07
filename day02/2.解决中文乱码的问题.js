const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	const str = `你请求的地址是${req.url},请求的方式是${req.method}`;
	//此时不能解析中文 且不能解析 HTML标签 解决如下: 设置响应头
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	res.end(`<h2>${str}</h2>`);
});

server.listen(4000, () => console.log('server running on http://127.0.0.1:4000'));
