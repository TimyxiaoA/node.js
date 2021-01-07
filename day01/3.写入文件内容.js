const fs = require('fs')

fs.writeFile('./files/3.txt', 'OK123', err => {
	if (err) return console.log('写入失败' + err.message)
	console.log('写入文件成功!')
})
