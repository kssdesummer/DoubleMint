# CSS3弹性盒子

## CSS3 弹性盒子(Flex Box)

​	弹性盒子是一种布局模式,当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式,目的是为了提供一种更加有效的方式对一个容器中的子元素进行排列/对齐和分配空白空间

### 弹性盒子内容

​	弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。

​	弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

​	弹性容器内包含了一个或多个弹性子元素。

==**注意**==：弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹	性容器内布局。

​	弹性子元素通常在弹性盒子内==一行==显示。默认情况==每个容器只有一行==。

​	以下元素展示了弹性子元素在一行内显示，从左到右:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
</style>
</head>
<body>
 
<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div> 
</div>
 
</body>
</html>
```

### 弹性盒子常用属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [display](https://www.runoob.com/cssref/pr-class-display.html) | 指定 HTML 元素盒子类型。                                     |
| [flex-direction](https://www.runoob.com/cssref/css3-pr-flex-direction.html) | 指定了弹性容器中子元素的排列方式                             |
| [justify-content](https://www.runoob.com/cssref/css3-pr-justify-content.html) | 设置弹性盒子元素在主轴（横轴）方向上的对齐方式。             |
| [align-items](https://www.runoob.com/cssref/css3-pr-align-items.html) | 设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。             |
| [flex-wrap](https://www.runoob.com/cssref/css3-pr-flex-wrap.html) | 设置弹性盒子的子元素超出父容器时是否换行。                   |
| [align-content](https://www.runoob.com/cssref/css3-pr-align-content.html) | 修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐 |
| [flex-flow](https://www.runoob.com/cssref/css3-pr-flex-flow.html) | flex-direction 和 flex-wrap 的简写                           |
| [order](https://www.runoob.com/cssref/css3-pr-order.html)    | 设置弹性盒子的子元素排列顺序。                               |
| [align-self](https://www.runoob.com/cssref/css3-pr-align-self.html) | 在弹性子元素上使用。覆盖容器的 align-items 属性。            |
| [flex](https://www.runoob.com/cssref/css3-pr-flex.html)      | 设置弹性盒子的子元素如何分配空间。                           |

#### 弹性盒子的浏览器支持

​	-webkit- 和 -moz- 为指定浏览器的前缀

| 属性                                | Chrome             | Edge | Fire Fox        | Safari       | Opera                   |
| :---------------------------------- | ------------------ | ---- | --------------- | ------------ | ----------------------- |
| Basic support (single-line flexbox) | 29.0 21.0 -webkit- | 11.0 | 22.0 18.0 -moz- | 6.1 -webkit- | 12.1 -webkit-           |
| Multi-line flexbox                  | 29.0 21.0 -webkit- | 11.0 | 28.0            | 6.1 -webkit- | 17.0 15.0 -webkit- 12.1 |

#### flex-direction 位置

​	指定弹性子元素在父容器中的位置,横向|反序|纵向|反序,一般用于父级元素

```css
flex-direction:row|roe-reverse|column|column-reverse
```

​	[示例1 : 横向反序](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_direction_row-reverse) 

​	[示例2 : 纵向反序](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_direction_column-reverse) 

#### justify-content 主轴线对齐

​	内容对齐,把弹性项沿着弹性容器的==主轴线==对齐

```css
justify-content:flex-start|flex-end|center|space-between|space-around
```

效果图展示：

![img](https://www.runoob.com/wp-content/uploads/2016/04/2259AD60-BD56-4865-8E35-472CEABF88B2.jpg)

[示例1:flex-end](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_justify_flex-end)

[示例2 : center](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_justify_center)

[示例3 : space-between]()

[示例4 : space-around](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_justify_space-around)

#### align-items 纵轴对齐

​	align-items 设置或检索弹性盒子元素在==侧轴(纵轴)==方向的对齐方式,弹性子元素的宽度会随着条件自适应变化,但是最大值为盒子大小,最小值为子元素中最长单词的长度

```css
align-items:flex-start|flex-end|center|baseline|stretch
```

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的==侧轴起始==边界。

- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的==侧轴结束==边。

- center：弹性盒子元素在该行的侧轴（纵轴）上==居中放置==。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。

- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。

- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

  [示例](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_align_flex-start) 

  [参考文档](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### flex-wrap 换行方式

​	不换行|换行|将溢出的放在第一行

```css
flex-wrap:nowrap|wrap|wrap-reverse
```

#### align-content 行对齐

​	设置弹性子元素==行==的对齐方式

```css
align-content:flex-start|flex-end|center|space-between|space-around|stretch
```

- `stretch` - 默认。各行将会伸展以占用剩余的空间。

- `flex-start` - 各行向弹性盒容器的起始位置堆叠。

- `flex-end` - 各行向弹性盒容器的结束位置堆叠。

- `center` -各行向弹性盒容器的中间位置堆叠。

- `space-between` -各行在弹性盒容器中平均分布。

- `space-around` - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

  [align-content 示例](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_align-content)

### 弹性子元素属性

#### 排序

```css
order:<integer>
```

​	integer : 用整数值定义排列顺序,数值晓得在前面,可以为负值,默认为0

​	[示例:order排序](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_order)

#### 对齐

​	设置"margin"值为"auto"值，自动获取弹性容器中剩余的空间。所以设置垂直方向margin值为"auto"，可以使弹性子元素在弹性容器的两上轴方向都完全居中。

​	弹性子元素上设置 `margin-right: auto;` ,它将剩余的空间放置在元素的右侧：

​	[示例 : margin的使用](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_margin)

#### align-self 垂直对齐

​	`	align-self` 属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch	
```

- auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。

- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。

- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。

- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。

- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

  [align-self 示例](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_align-self)

#### flex 分配空间

```css
flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]
```

- auto: 计算值为 1 1 auto

- initial: 计算值为 0 1 auto

- none：计算值为 0 0 auto

- inherit：从父元素继承

- [ flex-grow ]：定义弹性盒子元素的扩展比率。

- [ flex-shrink ]：定义弹性盒子元素的收缩比率。

- [ flex-basis ]：定义弹性盒子元素的默认基准值。

  [示例](https://www.runoob.com/try/try.php?filename=trycss3_flexbox_flex_number)