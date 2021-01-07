const fs = require('fs')

fs.writeFile('./files/2.txt', 'OK123', err => {
	if (err) return console.log('写入失败!' + err.message)

	console.log('写入成功!')
})
