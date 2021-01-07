const fs = require('fs');
const path = require('path');

// 定义正则 [\s\S]*匹配所有 ()代表分组 "/"需要转译
const regJS = /<script>([\s\S]*)<\/script>/;
const regCSS = /<style>([\s\S]*)<\/style>/;

// 读取文件
const source = path.join(__dirname, '/index.html');
fs.readFile(source, 'utf8', (err, dataStr) => {
	if (err) return console.log('读取文件失败' + err.message);

	resolveCSS(dataStr);

	resolveJS(dataStr);

	resolveHTML(dataStr);
});

// 封装提取css的函数
function resolveCSS(htmlStr) {
	// 提取 CSS
	const newCSS = regCSS.exec(htmlStr)[1]; //代表第一个分组

	// 写入 CSS
	const targetCSS = path.join(__dirname, '/clock/index.css');
	fs.writeFile(targetCSS, newCSS, (err) => {
		if (err) return console.log('写入失败' + err.message);

		console.log('写入CSS成功!');
	});
}

// 封装提取Script js的函数
function resolveJS(htmlStr) {
	// 提取 JS
	const newJS = regJS.exec(htmlStr)[1]; //代表第一个分组

	// 写入 JS
	const targetJS = path.join(__dirname, '/clock/index.js');
	fs.writeFile(targetJS, newJS, (err) => {
		if (err) return console.log('写入失败' + err.message);

		console.log('写入JS成功!');
	});
}

//封装提取 html 的函数
function resolveHTML(htmlStr) {
	const newHTML = htmlStr.replace(regJS, '<script src="./index.js"></script>').replace(regCSS, '<link rel="stylesheet" href="./index.css"></link>');

	const targetHTML = path.join(__dirname, '/clock/index.html');
	fs.writeFile(targetHTML, newHTML, (err) => {
		if (err) return console.log('写入失败' + err.message);

		console.log('写入HTML成功!');
	});
}
