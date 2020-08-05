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

  

