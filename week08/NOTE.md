学习笔记

#### HTML标签语义

https://www.w3school.com.cn/tags/index.asp

+ header、hgroup

  header放在页面或布局的顶部，一般放置导航或标题

  如果有多个连续的h1~h6，就用hgroup包住

  如果有连续多个标题和其他文章数据，h1-h6标签就用hgroup包住，和其他文章元数据一起放入header标签

+ nav

  页面导航，可以在header或aside中使用

  ```html
  <header>
     <h1>**</h1>
     <nav>
         <li><a href="#">首页</a></li>
         <li><a href="example.html">客户案例</a></li>
         <li><a href="service_one.html">技术服务</a></li>          
         <li><a href="aboutus_one.html">关于我们</a></li>
         <li><a href="connection.html">联系我们</a></li>
     </nav>
  </header>
  ```

+ aside

  所包含的内容不是页面的主要内容，具有独立性，是对页面的补充

  一般用在页面、文章的侧边栏、广告、友情链接等区域

+ footer

  一般放置在页面或者某个区块的底部

+ article

  使用在相对比较独立、完整的内容区块

+ section

  一组或者一节内容，包含的内容是一个明确的主题，通常有标题区域

  

#### 浏览器API

##### DOM API

<img src="/Users/moonlight/Desktop/Moon/Study/05_Web进阶/Frontend-02-Template/week08/images/image-20200819231120705.png" alt="image-20200819231120705" style="zoom:67%;" />

+ 导航类操作

  + 节点导航：parentNode、childNodes、firstChild、lastChild、nextSibling、previousSibling

    代码中产生的空格、tab等也属于节点，所以如果HTML没有进行压缩的话，根据Node进行导航找到的大多是一些空白的文本节点

  + Element导航：parentElement、children、firstElementChild、lastElementChild、nextElementSibling、previousElementSibling

    只查找元素

+ 修改操作：appendChild、insertBefore、removeChild、replaceChild

+ 高级操作

  + compareDocumentPosition：用于比较两个节点的关系
  + contains：检查一个节点是否包含另一个节点
  + isEqualNode：检查两个节点是否完全相同
  + isSameNode：检查两个节点是否是同一个节点（可以用 ===）
  + cloneNode：复制一个节点，如果传入参数true，则会连同子元素做深拷贝

##### 事件API

冒泡与捕获：先捕获（计算事件到底发生在哪个元素上）再冒泡（计算出了点到了哪个元素，层层向外触发，让元素去响应这个事件）

addEventListener不传第3个参数时，默认得到冒泡的事件监听

```js
target.addEventListener(type, listener[, options]); 
target.addEventListener(type, listener[, useCapture]);
```

options包括3个布尔值选项：

+ capture：是否使用事件捕获，默认值为false（即使用事件冒泡）
+ once：是否只调用一次，默认值为false。 如果为true，会在调用后自动销毁listener
+ passive: 如果为true, 意味着listener永远不会调用preventDefault方法，如果又确实调用了的话，浏览器只会console一个warning，而不会真的去执行preventDefault方法。**根据规范，默认值为false. 但是chrome, Firefox等浏览器为了保证滚动时的性能，在document-level nodes(Window, Document, Document.body)上针对touchstart和touchmove事件将passive默认值改为了true**， 保证了在页面滚动时不会因为自定义事件中调用了preventDefault而阻塞页面渲染。

useCapture: 默认值为false（即 使用事件冒泡）



阻止冒泡：e.stopPropagation()

取消默认事件：e.preventDefault()