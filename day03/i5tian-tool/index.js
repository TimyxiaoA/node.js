const dateFormat = require('./src/dateFormat');

const escape = require('./src/htmlEscape');

module.exports = {
	...dateFormat,
	...escape
};
