const fs = require('fs');

fs.readFile('./成绩.txt', 'utf8', (err, data) => {
	if (err) return console.log('读取失败!' + err.message);
    // 加工 正则替换 ?<!不能是正则后面的才能匹配
	const newStr = data.replace(/=/g, ':').replace(/\s/g, '\n');

	fs.writeFile('./files/4.成绩.txt', newStr, (err) => {
		if (err) return console.log('写入失败' + err.message);

		console.log('写入成功');
	});
});
