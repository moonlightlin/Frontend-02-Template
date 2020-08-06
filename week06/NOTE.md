学习笔记

# CSS总体结构

+ @charset

  ```css
  /* @charset <charset>; */
  @charset "utf-8";
  ```

+ @import

  ```css
  /* @import <url> <media_query_list> */
  @import url("global.css");
  @import url("example.css") screen and (min-width:800px);
  ```

+ rules

  + @media

  + @page  设置页面容器的版式，方向，边空等，控制打印设置选项

    ```css
    /* @page <label> <pseudo-classes>{ sRules } */
    @page {
    	size: A4;
    }
    ```

  + rule

  

## @规则

+ @charset 指定字符编码

+ @import 导入外部样式和目标媒体

+ @media 媒体查询

  媒体类型：

  all - 适用于所有设备

  print - 适用于在打印预览模式下在屏幕上查看的分页材料和文档

  screen - 主要用于屏幕

  speech - 主要用于语音合成器

+ @page 用于在打印文档时修改某些CSS属性

+ @counter-style 自定义counter的样式

  ```css
  /*
  @counter-style <counter-style-name> {
      system: <counter system>
      symbols: <counter symbols>
      additive-symbols: <additive-symbols>
      negative: <negative symbol>
      prefix: <prefix>
      suffix: <suffix>
      range: <range>
      pad: <padding>
      speak-as: <speak-as>
      fallback: <counter-style-name>
  }
  */
  
  @counter-style fixed-alpha {
    system: fixed;
    symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
    suffix: " ";
  }
  
  .items {
     list-style: fixed-alpha;
  }
  ```

+ @keyframes 定义动画关键帧的样式

+ @fontface 定义字体

+ @supports 特性查询，本身就有兼容性问题

  ```css
  @supports (display: grid) {
    div {
      display: grid;
    }
  }
  
  @supports not (display: grid) {
    div {
      float: right;
    }
  }
  ```

+ @namespace 定义使用在CSS样式表中的XML命名空间

  ```css
  @namespace url(http://www.w3.org/1999/xhtml);
  @namespace svg url(http://www.w3.org/2000/svg);
  
  /* 匹配所有的XHTML <a> 元素, 因为 XHTML 是默认无前缀命名空间 */
  a {}
  
  /* 匹配所有的 SVG <a> 元素 */
  svg|a {}
  
  /* 匹配 XHTML 和 SVG <a> 元素 */
  *|a {}
  ```

  

# CSS选择器

+ 简单选择器
  + 通用选择器 *
  + 标签选择器 div svg|a
  + class选择器 .cls 
  + id选择器 \#id
  + 属性选择器 [attr=value]
  + 伪类选择器 :hover
  + 伪元素选择器 ::before

+ 复合选择器
  + 多个简单选择器连在一起写
  + *或者div必须写在最前面，伪类、伪元素必须写在最后面
+ 复杂选择器
  + 子孙选择器：<复合选择器><sp><复合选择器>
  + 子元素选择器：<复合选择器>">"<复合选择器>
  + 匹配选择器：<复合选择器>"~"<复合选择器>
  + 相邻选择器（只会选择第一个相邻的匹配元素）：<复合选择器>"+"<复合选择器>
  + <复合选择器>"||"<复合选择器>



# 伪类选择器

+ 链接/行为

  + :any-link 匹配所有的链接

  + :link 匹配没有访问过的链接  :visited 访问过的

    由于安全性的问题，一旦使用过:link或者:visited，就无法对里面的元素更改文字颜色之外的属性了

  + :hover 鼠标移入

  + :active 激活状态

  + :focus 焦点状态

  + :target 用在a标签的锚点上，选取当前活动的目标元素

    ```html
    <style>
    :target {
      border: 2px solid #D4D4D4;
      background-color: #e5eecc;
    }
    </style>
    
    <!-- 点击链接，:target会突出显示当前活动的html锚 -->
    <p><a href="#news1">跳转至内容 1</a></p>
    <p><a href="#news2">跳转至内容 2</a></p>
    
    <p id="news1"><b>内容 1...</b></p>
    <p id="news2"><b>内容 2...</b></p>
    ```

+ 树结构

  + :empty  选择每个没有任何子级的元素（包括文本节点）

  + :nth-child(n)  匹配属于其父元素的第 N 个子元素，不论元素的类型。

  + :nth-last-child(n)  匹配属于其父元素的第 N 个子元素，不论元素的类型，从最后一个子元素开始计数

  + :first-child  选取属于其父元素的首个子元素的指定选择器

    :last-child  匹配父元素中最后一个子元素

    :only-child   匹配属于父元素中唯一子元素的元素

  :empty  :nth-last-child(n)  :last-child  :only-child 会破坏CSS计算的时机，要慎用

+ 逻辑型

  + :not  匹配非指定元素/选择器的每个元素，只支持写简单选择器的序列
  + :where  :has 目前不可用

# 伪元素选择器

+ ::before
+ ::after

在元素前、元素后添加伪元素，通过content属性添加文本内容。可以理解为通过选择器向页面上添加了一个不存在的元素。



+ ::first-line

  ```
  支持的属性：
  font 属性
  color 属性
  background 属性
  word-spacing
  letter-spacing
  text-decoration
  vertical-align
  text-transform
  line-height
  clear
  ```

+ ::first-letter

  ```
  支持的属性：
  font 属性
  color 属性
  background 属性
  margin 属性
  padding 属性
  border 属性
  text-decoration
  vertical-align (仅当 'float' 为 'none' 时)
  text-transform
  line-height
  float
  clear
  ```

相当于用不存在的元素将一部分文本括了起来，从而可以对它进行一些处理。first-line是针对排版之后的line。



问题：

为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

推测： 将first-letter 、first-line括起来的伪元素是span这样的内联元素（在first-letter中使用margin或者padding，只会影响左右的间距，并没有影响上下间距），而 first-line针对的是排版之后line，也就是第一行显示的文字已经确定了，如果允许设置float、margin、padding之类的属性，就会导致部分文字不再是属于第一行了，需要重新进行排版。

