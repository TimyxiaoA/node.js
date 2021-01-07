// 1.导入fs模块
const fs = require('fs')

//引用 fs.readFile()方法  此方法是异步的
fs.readFile('./files/1.txt', 'utf8', (err, data) => {
	// 如果有err 则直接返回
	if (err) return console.log('读取失败!', err)

	console.log(data)
})
