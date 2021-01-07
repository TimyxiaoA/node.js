const i5tian = require('./i5tian-tool/index.js');

//格式化时间功能
const dt = i5tian.dateFormat(new Date());
console.log(dt);

const htmlStr = '<h1>这是h1标签<span>123&nbsp;</span></h1>';
const str = i5tian.htmlEscape(htmlStr);
console.log(str);

const str2 = i5tian.htmlUnEscape(str);
console.log(str2);
