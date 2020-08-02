学习笔记

####收集CSS规则

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

+ ast结构

```js
ast: {
	type: 'stylesheer',
  stylesheet: {
    rules: [ // css规则
      {
        type: 'rule',
        selectors: [], // 选择器（不会拆分复合选择器，如 '#app .content'）
        declarations: [] // 具体规则
        // ...
      }
    ]
  }
}
```



#### 计算CSS

+ 创建元素后立即计算CSS
+ 理论上分析一个元素时，所有CSS规则已经收集完毕
+ 如果遇到写在body中的style标签，需要重新计算CSS



#### 获取父元素序列

+ 在计算CSS的computerCSS函数中，必须知道当前元素的所有父元素才能判断元素和规则是否匹配
+ 从stack中可以获取当前元素所有的父元素
+ 获得和计算父元素匹配的顺序是由内向外的

```JS
function computeCSS(element) {
  var elements = stack.slice().reverse()
}
```



#### 选择器与元素的匹配

+ 选择器也是由内向外
+ 复杂选择器拆成针对单个元素的选择器，循环匹配父元素队列



#### 计算选择器与元素匹配

+ 根据选择器的类型和元素属性，计算是否与当前元素匹配
+ 实际浏览器要处理复合选择器

```js
// 选择器匹配
function selectorMatch(element, selector) {
  if(!selector || !element.attributes) {
    return false
  }

  if(selector.charAt(0) === '#') {
    var attr = element.attributes.filter(attr => attr.name === 'id')[0]
    if (attr && attr.value === selector.replace('#', '')) {
      return true
    }
  } else if (selector.charAt(0) === '.') {
    var attr = element.attributes.filter(attr => attr.name === 'class')[0]
    if (attr && attr.value === selector.replace('.', '')) {
      return true
    }
  } else {
    if (element.tagName === selector) {
      return true
    }
  }

  return false
}
```





#### 生成computed属性

+ 一旦选择器匹配上，则应用到元素上，形成computedStyle



#### specificity计算逻辑

[0,            0,      0,         0]

inline       id     class    tagName

四元组，左边优先级最高，依次下降

eg.

div div #id      [0, 1, 0, 2]

div #my #id   [0, 2, 0, 1]

只要高位能比较出来，就不考虑低位

+ CSS规则根据specificity和后来优先规则覆盖
+ specificity是个四元组，越左边权重越高
+ 一个CSS规则的specificity根据包含的简单选择器相加而成



#### 根据浏览器属性进行排版

预处理，把具体的属性进行抽象



#### 收集元素进行

分行：

+ 根据主轴尺寸，把元素分别进行
+ 若设置了no-wrap，则强行分配进第一行



#### 计算主轴

+ 找出所有flex元素
+ 把主轴方向的剩余尺寸按比例分配给这些元素
+ 如果剩余空间为负数，所有flex元素为0，等比压缩剩余元素



#### 计算交叉轴

+ 根据每一行中最大元素尺寸计算行高
+ 根据行高flex-align和item-align，确定元素具体位置



#### 绘制单个元素

+ 需要依赖图形环境
+ npm包images
+ 绘制在viewport上进行
+ 与绘制相关的属性：background-color、border、background-image等



#### 绘制DOM

+ 递归调用子元素的绘制方法完成DOM树的绘制
+ 忽略不需要绘制的节点
+ 文字绘制需要依赖字体库
+ 实际浏览器还会对一些图层做compositing