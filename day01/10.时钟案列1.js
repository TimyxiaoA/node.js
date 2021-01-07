const fs = require('fs');

const path = require('path');
// 定义正则
const regCSS = /<style>([\s\S]*)<\/style>/;
const regJS = /<script>([\s\S]*)<\/script>/;

//读取文件
const source = path.join(__dirname, '/index.html');
fs.readFile(source, 'utf8', (err, dataStr) => {
	if (err) return console.log('读取文件失败' + err.message);

	// 调用方法
	resolveCSS(dataStr);
	resolveJS(dataStr);
	resolveHTML(dataStr);
});

// 封装提取 CSS 函数
function resolveCSS(htmlStr) {
	// 提取数据
	const newCSS = regCSS.exec(htmlStr)[1];
	//写入数据
	const targetCSS = path.join(__dirname, '/clock1/index.css');
	fs.writeFile(targetCSS, newCSS, (err) => {
		if (err) return console.log('写入css失败' + err.message);

		console.log('写入CSS成功!');
	});
}

// 封装提取 JS 函数
function resolveJS(htmlStr) {
	// 提取数据
	const newJS = regJS.exec(htmlStr)[1];
	//写入数据
	const targetJS = path.join(__dirname, '/clock1/index.js');
	fs.writeFile(targetJS, newJS, (err) => {
		if (err) return console.log('写入JS失败' + err.message);

		console.log('写入JS成功!');
	});
}

//封装提取 HTML 函数
function resolveHTML(htmlStr) {
	const newHTML = htmlStr.replace(regCSS, '<link rel="stylesheet" href="./index.css"></link>').replace(regJS, '<script src="./index.js"></script>');
	const targetHTML = path.join(__dirname, '/clock1/index.html');
	fs.writeFile(targetHTML, newHTML, (err) => {
		if (err) return console.log('写入HTML失败' + err.message);

		console.log('写入HTML成功!');
	});
}
