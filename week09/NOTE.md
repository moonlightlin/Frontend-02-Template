学习笔记

#### 异步编程

Promise

```js
  function sleep(t) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, t)
    })
  }

  function go() {
    green()
    sleep(10000).then(() => {
      yellow()
      return sleep(2000)
    }).then(() => {
      red()
      return sleep(5000)
    }).then(go)
  }
```



async

```JS
async function go() {
    while(true) {
      green()
      await sleep(10000)
      yellow()
      await sleep(2000)
      red()
      await sleep(5000)
    }
  }
```



#### 寻路算法

寻路问题

![image-20200829230647269](/Users/moonlight/Desktop/Moon/Study/05_Web进阶/Frontend-02-Template/week09/images/image-20200829230647269.png)



启发式搜索

