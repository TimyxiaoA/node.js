const fs = require('fs');
const path = require('path');

// 定义正则
const regCSS = /<style>([\s\S]*)<\/style>/;
const regJS = /<script>([\s\S]*)<\/script>/;

const source = path.join(__dirname, '/index.html');
fs.readFile(source, 'utf8', (err, dataStr) => {
	if (err) return console.log('读取失败' + err.message);

	const targetCSS = path.join(__dirname, '/clock2/index.css');
	const targetJS = path.join(__dirname, '/clock2/index.js');
	const targetHTML = path.join(__dirname, '/clock2/index.html');
	resolveContent(dataStr, regCSS, targetCSS, 'CSS');
	resolveContent(dataStr, regJS, targetJS, 'JS');
	resolveHTML(dataStr, targetHTML);
});
// 提取数据
function resolveContent(htmlStr, reg, target, type) {
	const newStr = reg.exec(htmlStr)[1];
	fs.writeFile(target, newStr, (err) => {
		if (err) return console.log(`写入${type}失败${err.message}`);
		console.log(`写入${type}成功!`);
	});
}
//提取 html 文件
function resolveHTML(htmlStr, target) {
	const newHTML = htmlStr.replace(regCSS, '<link rel="stylesheet" href="./index.css">').replace(regJS, '<script src="./index.js"></script>');
	fs.writeFile(target, newHTML, (err) => {
		if (err) return console.log('写入HTML失败' + err.message);

		console.log('写入HTML成功!');
	});
}
