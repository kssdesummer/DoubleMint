# Bootstrop概述

## HTML 5 文档类型

​	Bootstrap使用html5 元素 和 CSS属性 , 所以要在开头声明Doctype类型

```html
<!DOCTYPE html> 
```

## 移动设备优先

​	为了让Bootstrap开发的网站对移动设备友好,确保适当的回执和触屏缩放,需要在head之中添加 viewport meta 标签

```html
<meta name="viewport" content="width=device-width,intial-scale=1.0">
```

 * width 属性控制设备的宽度,devive-width确保在不同分辨率保持一样的样式

 * intial-scale=1.0确保网页加载时,以1:1的比例显示,没有缩放

    * 在移动设备浏览器上，通过为 **viewport meta** 标签添加 *user-scalable=no* 可以禁用其缩放（zooming）功能。

      通常情况下，*maximum-scale=1.0* 与 user-scalable=no 一起使用。这样禁用缩放功能后，用户只能滚动屏幕，就能让您的网站看上去更像原生应用的感觉。

      注意，这种方式我们并不推荐所有网站使用，还是要看您自己的情况而定！

```html
<meta name="viewport" content="width=device-width, 
                                     initial-scale=1.0, 
                                     maximum-scale=1.0, 
                                     user-scalable=no">
```

## 响应式图像

```html
<img src=".." class="img-responsive" alt="响应式图像">
```

​	给图片标签做一个样式:

```css
.img-responsive {
  display: block;
  height: auto;
  max-width: 100%;
}
```

​	这表明相关的图像呈现为 *block*。当您把元素的 display 属性设置为 block，以块级元素显示。

​	设置 *height:auto*，相关元素的高度取决于浏览器。

​	设置 *max-width* 为 100% 会重写任何通过 width 属性指定的宽度。这让图片对响应式布局的支持更友好。

​	如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。

## 全局显示/排版/链接

### 基本的全局显示

​	使用body{margin:0;}来移除body的边框

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  background-color: #ffffff;
}
```

### 排版和链接样式

​	使用 @font-family-base、 @font-size-base 和 @line-height-base 属性作为排版样式。

​	通过属性 @link-color 设置全局链接的颜色。

```css
a{
            color: #000;
            border: 4px solid #807360;
        }
        a:hover{
            color:red;
            font-size: 24px;
            text-decoration: underline;
            border: 4px solid #807360;
            outline: 4px solid #333;
            outline-offset: 2px;
        }
        a:focus {
            color: #2a6496;
            font-size: 16px;
        }
```

### 避免跨浏览器的不一致

​	Bootstrap 使用 [Normalize](http://necolas.github.io/normalize.css/) 来建立跨浏览器的一致性。

​	Normalize.css 是一个很小的 CSS 文件，在 HTML 元素的默认样式中提供了更好的跨浏览器一致性。

### 容器(Container)

```html
<div class="container">

</div>
```

```css
.container {
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
}
```

## Bootstrap 网格系统

​	网格:用于组织内容,让网站易于浏览,并降低用户端负载

​	网格系统:Bootstrap 包含了一个响应式的、移动设备优先的、不固定的网格系统，可以随着设备或视口大小的增加而适当地扩展到 12 列。它包含了用于简单的布局选项的预定义类，也包含了用于生成更多语义布局的功能强大的混合类。

### 工作原理:

​	网格系统通过一系列包含内容的行和列来创建页面布局:

- 行必须放置在 **.container** class 内，以便获得适当的对齐（alignment）和内边距（padding）。
- 使用行来创建列的水平组。
- 内容应该放置在列内，且唯有列可以是行的直接子元素。
- 预定义的网格类，比如 **.row** 和 **.col-xs-4**，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。
- 列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 **.rows** 上的外边距（margin）取负，表示第一列和最后一列的行偏移。
- 网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 **.col-xs-4**。

### 基本的网格结构

```html
<div class="container">
   <div class="row">
      <div class="col-xs-6 col-sm-3"></div>
      <div class="col-xs-6 col-sm-3"></div>      
   </div>
   <div class="row">...</div>
</div>
<div class="container">....
```

​	class="col-xs-6" 设置行为6	, 整个行的值12

​	class="col-sm-2"设置列占值2 

### 偏移列

​	class ="col-lg-pull-2" 向左推2

​	class="col-lg-offset-2" 向右拉2

### 列排序

​	class="col-md-4 col-md-push-4"	向右推

​	class="col-md-4 col-md-pull-4"	  向左拉

## Bootstrap 排版

​	.small class 副标题

```html
<h1>This title<small>small</small></h1>
```

​	class="lead" 引导主题副本,设置更大更粗/行高更高的文本

```html
<p class="lead">This is lead</p>
```

### 强调

​	HTML 的默认强调标签 <small>（设置文本为父文本大小的 85%）、<strong>（设置文本为更粗的文本）、<em>（设置文本为斜体）。

Bootstrap 提供了一些用于强调文本的类，如下面实例所示：

```html
<small>本行内容是在标签内</small><br>
<strong>本行内容是在标签内</strong><br>
<em>本行内容是在标签内，并呈现为斜体</em><br>
<p class="text-left">向左对齐文本</p>
<p class="text-center">居中对齐文本</p>
<p class="text-right">向右对齐文本</p>
<p class="text-muted">本行内容是减弱的</p>
<p class="text-primary">本行内容带有一个 primary class</p>
<p class="text-success">本行内容带有一个 success class</p>
<p class="text-info">本行内容带有一个 info class</p>
<p class="text-warning">本行内容带有一个 warning class</p>
<p class="text-danger">本行内容带有一个 danger class</p>
```

### 缩写 abbr

### 引用 Blockquote

### 列表

### 其他排版

| 类                  | 描述                                                         | 实________________  例                                       |
| :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| .lead               | 使段落突出显示                                               | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_lead) |
| .small              | 设定小文本 (设置为父文本的 85% 大小)                         | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_small) |
| .text-left          | 设定文本左对齐                                               | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-left) |
| .text-center        | 设定文本居中对齐                                             | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-left) |
| .text-right         | 设定文本右对齐                                               | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-left) |
| .text-justify       | 设定文本对齐,段落中超出屏幕部分文字自动换行                  | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-left) |
| .text-nowrap        | 段落中超出屏幕部分不换行                                     | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-left) |
| .text-lowercase     | 设定文本小写                                                 | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-lowercase) |
| .text-uppercase     | 设定文本大写                                                 | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-lowercase) |
| .text-capitalize    | 设定单词首字母大写                                           | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_text-lowercase) |
| .initialism         | 显示在 <abbr> 元素中的文本以小号字体展示，且可以将小写字母转换为大写字母 | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_abbr2) |
| .blockquote-reverse | 设定引用右对齐                                               | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_blockquote2) |
| .list-unstyled      | 移除默认的列表样式，列表项中左对齐 ( <ul> 和 <ol> 中)。 这个类仅适用于直接子列表项 (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式) | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_list-unstyled) |
| .list-inline        | 将所有列表项放置同一行                                       | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_list-inline) |
| .dl-horizontal      | 该类设置了浮动和偏移，应用于 <dl> 元素和 <dt> 元素中，具体实现可以查看实例 | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_dl-horizontal) |
| .pre-scrollable     | 使 <pre> 元素可滚动，代码块区域最大高度为340px,一旦超出这个高度,就会在Y轴出现滚动条 | [尝试一下](https://www.runoob.com/try/try2.php?filename=trybs_ref_txt_pre2) |

## 小结

bs 使用行列构建页面 超出最大列宽12会换行 行类可以写多个表示不同分辨率下显示 
调整高度后 可以使用 div.clearfix避免影响下面的行
offset偏移和和列宽之和大于12也会换行, 
push/pull列的微调不受总和12的限制
dl水平短语列表 下的dt dd 默认是换行的, 如果 有class="dl-horizontal" 下dt dd在一行
table tr td 表格 striped 斑马线 hove鼠标焦点 condensed 压缩
表格字数超长默认换行,不换行滑动使用 外部容器+.table-responsive

## 参考网址

​	官网: https://v4.bootcss.com/docs/4.0/getting-started/introduction/

​	w3c: https://www.w3cschool.cn/bootstrap4/bootstrap4-dzh82qgv.html