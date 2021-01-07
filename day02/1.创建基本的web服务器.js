// 1.引入http 模块
const http = require('http');
// 2.创建服务器实例对象
const server = http.createServer();
// 3.监听客户端的请求
server.on('request', (request, response) => {
	const url = request.url;
	const method = request.method;
	const str = `Your request url is ${url},and request method is ${method}`;
	response.end(str); //服务端向客户端响应内容
});
// 4.设置一个端口
server.listen(2000, () => console.log('Sever running on http://127.0.0.1:2000'));
