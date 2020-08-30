​    学习笔记

#### BFC (Block Formatting Contexts)

+ Block Container：里面有BFC
  + block
  + inline-block
  + table-cell
  + flex item
  + grid cell
  + table-caption

+ Block-level Box：外面有BFC

+ Block Box：里外都有BFC



BFC的布局规则：

+ 内部的盒会在垂直方向一个个放置
+ 盒子垂直方向的距离由margin决定，同一个BFC的两个相邻盒的上下margin会发生重叠
+ BFC的区域不会与float重叠
+ 计算BFC的高度时，浮动元素也参与计算
+ BFC是页面上一个隔离的独立容器

BFC的触发条件：

+ 根元素
+ float属性不为none
+ position为absolute或fixed
+ display为inline-block、table-cell、table-caption
+ overflow不为visible

#### Flex排版

+ 计算盒进行
+ 计算盒在主轴方向的排布
+ 计算盒在交叉轴方向的排布

分行：

+ 根据主轴尺寸，把元素分进行
+ 若设置了no-wrap，则强行分配进第一行

计算主轴方向

+ 找出所有Flex元素
+ 把主轴方向的剩余尺寸按比例分配给这些元素
+ 若剩余空间 为负数，所有flex元素为0，等比压缩剩余元素

计算交叉轴方向

+ 根据每一行中最大元素尺寸计算行高
+ 根据行高flex-align和item-align，确定元素具体位置