## 安装

```bash
npm install i5tian-tool
```

## 导入

```js
const i5tian = require('./i5tian-tool');
```

## 格式化时间

```js
const dt = i5tian.dateFormat(new Date());
console.log(dt); // 2021-01-07 14:34:34
```

## 转义 HTML 中的特殊字符

```js
const htmlStr = '<h1>这是h1标签<span>123&nbsp;</span></h1>';
const str = i5tian.htmlEscape(htmlStr);
console.log(str); // &lt;h1&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符

```js
const str2 = i5tian.htmlUnEscape(str);
console.log(str2); // <h1>这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议

ISC
