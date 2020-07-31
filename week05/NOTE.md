学习笔记

### 第一步

+ 遇到style标签则把CSS规则保存起来
+ 调用CSS Parser来分析CSS规则

```js
// 将CSS规则暂存到数组中
let rules = []
function addCSSRules(text) {
  var ast = css.parse(text)
  console.log(JSON.stringify(ast, null, '     '))
  rules.push(...ast.stylesheet.rules)
}
```

+ sat结构