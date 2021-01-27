// 1.导入 MySQL 模块
const mysql = require('mysql');
// 2.建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
	host: '127.0.0.1', //数据库的IP地址
	user: 'root', // 数据库的登录名
	password: 'root', // 数据库的密码
	database: 'my_db_01' //  数据库的名称
});
// 3.1 select 请求数据
/* const sqlStr = 'select * from users';
db.query(sqlStr, (err, results) => {
	if (err) return console.log(err.message);

	console.log(results);
}); */

//3.2 插入语句
/* const user = { username: 'Tomy', password: '123456' };

const sqlStr1 = 'insert into users (username,password) values(?,?)';
db.query(sqlStr1, [user.username, user.password], (err, results) => {
	if (err) return console.log(err.message);

	if (results.affectedRows === 1) {
		console.log('插入数据成功!');
	}
}); */
// 3.3插入简洁写法
/* const user = { username: 'Tony1', password: '1234567' };

const sqlStr = 'insert into users set ?';

db.query(sqlStr, user, (err, results) => {
	if (err) return console.log(err.message);
	if (results.affectedRows === 1) {
		console.log('插入成功!');
	}
}); */
//3.4 更新简洁语句
const user = { username: 'Tony2', password: '12345678',id:4 }

const sqlStr='update users set ? where id=?'
db.query(sqlStr, [user,user.id], (err, results) => {
	if (err) return console.log(err.message);
	if (results.affectedRows === 1) {
		console.log('更新成功!');
	}
});