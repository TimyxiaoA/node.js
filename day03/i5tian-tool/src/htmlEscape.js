// 定义转义 HTML 字符的函数，防止 XSS 攻击，可以把 HTML 中的特殊字符变成实体字符
function htmlEscape(htmlStr) {
	return htmlStr.replace(/<|>|"|&/g, (match) => {
		switch (match) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			case '&':
				return '&amp;';
		}
	});
}

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
	return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
		switch (match) {
			case '&lt;':
				return '<';
			case '&gt;':
				return '>';
			case '&quot;':
				return '"';
			case '&amp;':
				return '&';
		}
	});
}

module.exports = {
	htmlEscape,
	htmlUnEscape
};
