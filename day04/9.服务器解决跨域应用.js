const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const obj = {
	name: 'zs',
	age: 18,
	sex: '男'
};
app.get('/user', (req, res) => {
	res.send(obj);
});

app.listen(80, () => console.log('Server running on http://127.0.0.1'));
