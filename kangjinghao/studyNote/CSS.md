# CSS基础

## CSS概述:

- CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)
- 样式定义*如何显示* HTML 元素
- 样式通常存储在*样式表*中
- 把样式添加到 HTML 4.0 中，是为了*解决内容与表现分离的问题*
- *外部样式表*可以极大提高工作效率
- 外部样式表通常存储在 *CSS 文件*中
- 多个样式定义可*层叠*为一

## CSS基础语法:

​	CSS规则主要由两个部分:

  1. 选择器 : 通常是需要改变样式的HTML元素

  2. 属性 : 需要设置的样式属性,每个属性有一个值,属性和值被冒号分开

     ```css
     body {
       color: #000;
       background: #fff;
       margin: 0;
       padding: 0;
       font-family: Georgia, Palatino, serif;
       }
     ```

## CSS的高级语法

1. 选择器的分组:

   ```css
   h1,h2,h3,h4,h5,h6 {
     color: green;
     }
   ```

2. 继承问题

   ```css
   body  {
        font-family: Verdana, sans-serif;
        }
   <!-- 只写上面的body体,在4.0版本的部分浏览器的列表项无法识别-->
   td, ul, ol, li, dl, dt, dd  {
        font-family: Verdana, sans-serif;
        }
   <!--也可以将某一个标签单独定义样式-->
   p  {
        font-family: Times, "Times New Roman", serif;
        }
   ```

## 派生选择器

​	可以单独设置某些标签的样式属性

```css
li strong {
    font-style: italic;
    font-weight: normal;
  }
<p><strong>不适用派生,只加粗</strong></p>
<ol>
<li>我是斜体字。<strong>这是因为 strong 元素位于 li 元素内。</strong></li>
<li>我是正常的字体。</li>
</ol>
```

## CSS id选择器

​	id选择器可以为标有特定id的Hp {background-color: gray;}p {background-color: gray;}p {background-color: gray;}TML元素制定特定样式,以`#`来定义

```css
#red {color:red;}
#green {color:green;
```

```html
<p id="red">这个段落是红色。</p>
<p id="green">这个段落是绿色。</p>
```

​	也可以使用派生的id选择器,以下两中只在p和h2标签内可以使用

```css
#sidebar p {
	font-style: italic;
	text-align: right;
	margin-top: 0.5em;
	}

h2#sidebar {
	font-size: 1em;
	font-weight: normal;
	font-style: italic;
	margin: 0;
	line-height: 1.5;
	text-align: right;
	}
```

## CSS 类选择器

​	类选择器与id选择器类似,只不过用`.`来定义样式名字,类名第一个字符不能使数字

```css
.center {text-align: center}
```

```html
<h1 class="center">
This heading will be center-aligned
</h1>

<p class="center">
This paragraph will also be center-aligned.
</p>
```

类选择器的派生选择器:在td中生效

```css
td.fancy {
	color: #f60;
	background: #666;
	}
```

```html
<td class="fancy">
```

## CSS属性选择器

​	对带有制定属性的HTML元素设置样式,可以为拥有指定属性的 HTML 元素设置样式，而不仅限于 class 和 id 属性。

​	**注释：**只有在规定了 !DOCTYPE 时，IE7 和 IE8 才支持属性选择器。在 IE6 及更低的版本中，不支持属性选择。

​	对所有的title设置为红色,对title="阿花"的标题设置一个蓝色边框,对包含阿白的设置黄色

```css
[title]{
color:red;
}p {background-color: gray;}
[title=阿花]
{
border:5px solid blue;
}
[title~=阿白]
{
border:5px solid yellow;
}
```

### 设置表单的样式

p {background-color: gray;}	属性选择器为不带有class或id的表单样式时特别有用

```css
input[type="text"]
{
  width:150px;
  display:block;
  margin-bottom:10px;
  background-color:yellow;
  font-family: Verdana, Arial;
}

input[type="button"]
{
  width:120px;
  margin-left:35px;
  display:block;
  font-family: Verdana, Arial;
}
```

## CSS选择器参考手册

| 选择器                                                       | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |

## 创建CSS

### 插入样式表

​	当督导一个样式表时,浏览器会根据它俩格式化HTML文档,插入样式表的三种方法:

 1. 外部样式表

    在html文档的head头里加入:

    ```html
    <head>
    <link rel="stylesheet" type="text/css" href="mystyle.css" />
    </head>
    ```

 2. 内部样式表

    当单个文档需要特殊的样式时，就应该使用内部样式表。你可以在 <style> 标签

    ```html
    <head>
    <style type="text/css">
      hr {color: sienna;}
      p {margin-left: 20px;}
      body {background-image: url("images/back40.gif");}
    </style>
    </head>
    ```

 3. 内联样式

    由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

    要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：

    ```html
    <p style="color: sienna; margin-left: 20px">
    This is a paragraph
    </p>
    ```

# CSS样式

### CSS背景

​	css允许应用纯色作为背景,也允许使用背景图像

#### 背景色

​	可以使用background-color 属性设置任意合法的背景色

​	这条规则把元素的背景设置为灰色：

```css
p {background-color: gray;}
```

​	如果您希望背景色从元素中的文本向外少有延伸，只需增加一些内边距：

```css
p {background-color: gray; padding: 20px;}
```

​	background-color 不能继承，其默认值是 transparent。transparent 有“透明”之意。也就是说，如果一个元素没有指定背景色，那么背景就是透明的，这样其祖先元素的背景才能可见。

 #### 背景图像

要把图像放入背景，需要使用 [background-image 属性](https://www.w3school.com.cn/cssref/pr_background-image.asp)。background-image 属性的默认值是 none，表示背景上没有放置任何图像。

如果需要设置一个背景图像，必须为这个属性设置一个 URL 值：

```css
body {background-image: url(/i/eg_bg_04.gif);}
```

大多数背景都应用到 body 元素，不过并不仅限于此。

下面例子为一个段落应用了一个背景，而不会对文档的其他部分应用背景：

```css
p.flower {background-image: url(/i/eg_bg_03.gif);}
```

您甚至可以为行内元素设置背景图像，下面的例子为一个链接设置了背景图像：

```css
a.radio {background-image: url(/i/eg_bg_07.gif);}
```

##### 设置圆角

​	[border-radius](https://jingyan.baidu.com/article/1876c852549b2a890b1376bf.html) :将hi设置为200px直径的圆

```css
h1{
background: url("z.jpg");
width: 200px;
height: 200px;
border-radius:200px;
}
```



#### 背景重复

​	如果需要在页面上对背景图像进行平铺，可以使用 [background-repeat 属性](https://www.w3school.com.cn/cssref/pr_background-repeat.asp)。

​	属性值 repeat 导致图像在水平垂直方向上都平铺，就像以往背景图像的通常做法一样.repeat-x 和 repeat-y 分别导致图像只在水平或垂直方向上重复，no-repeat 则不允许图像在任何方向上平铺。

​	默认地，背景图像将从一个元素的左上角开始。请看下面的例子：

```css
body
  { 
  background-image: url(/i/eg_bg_03.gif);
  background-repeat: repeat-y;
  }
```

#### 关键字

​	图像放置关键字最容易理解，其作用如其名称所表明的。例如，top right 使图像放置在元素内边距区的右上角。

​	根据规范，位置关键字可以按任何顺序出现，只要保证不超过两个关键字 - 一个对应水平方向，另一个对应垂直方向。

​	如果只出现一个关键字，则认为另一个关键字是 center。

​	所以，如果希望每个段落的中部上方出现一个图像，只需声明如下：

```css
p
  { 
    background-image:url('bgimg.gif');
    background-repeat:no-repeat;
    background-position:top;
  }
```

​	下面是等价的位置关键字：

| 单一关键字 | 等价的关键字                   |
| :--------- | :----------------------------- |
| center     | center center                  |
| top        | top center 或 center top       |
| bottom     | bottom center 或 center bottom |
| right      | right center 或 center right   |
| left       | left center 或 center left     |

#### 百分数值

​	百分数值的表现方式更为复杂。假设你希望用百分数值将图像在其元素中居中，这很容易：

```css
body
  { 
    background-image:url('/i/eg_bg_03.gif');
    background-repeat:no-repeat;
    background-position:50% 50%;
  }
```

​	这会导致图像适当放置，其中心与其元素的中心对齐。**换句话说，百分数值同时应用于元素和图像。**也就是说，图像中描述为 50% 50% 的点（中心点）与元素中描述为 50% 50% 的点（中心点）对齐。

​	如果图像位于 0% 0%，其左上角将放在元素内边距区的左上角。如果图像位置是 100% 100%，会使图像的右下角放在右边距的右下角。

​	因此，如果你想把一个图像放在水平方向 2/3、垂直方向 1/3 处，可以这样声明：

```css
body
  { 
    background-image:url('/i/eg_bg_03.gif');
    background-repeat:no-repeat;
    background-position:66% 33%;
  }
```

​	如果只提供一个百分数值，所提供的这个值将用作水平值，垂直值将假设为 50%。这一点与关键字类似。

​	background-position 的默认值是 0% 0%，在功能上相当于 top left。这就解释了背景图像为什么总是从元素内边距区的左上角开始平铺，除非您设置了不同的位置值。

#### 长度值

​	长度值解释的是元素内边距区左上角的偏移。偏移点是图像的左上角。

​	比如，如果设置值为 50px 100px，图像的左上角将在元素内边距区左上角向右 50 像素、向下 100 像素的位置上：

```css
body
  { 
    background-image:url('/i/eg_bg_03.gif');
    background-repeat:no-repeat;
    background-position:50px 100px;
  }
```

注意，这一点与百分数值不同，因为偏移只是从一个左上角到另一个左上角。也就是说，图像的左上角与 background-position 声明中的指定的点对齐。

#### 背景关联

​	如果文档比较长，那么当文档向下滚动时，背景图像也会随之滚动。当文档滚动到超过图像的位置时，图像就会消失。

您可以通过 [background-attachment 属性](https://www.w3school.com.cn/cssref/pr_background-attachment.asp)防止这种滚动。通过这个属性，可以声明图像相对于可视区是固定的（fixed），因此不会受到滚动的影响：

```css
body 
  {
  background-image:url(/i/eg_bg_02.gif);
  background-repeat:no-repeat;
  background-attachment:fixed
  }
```

​	background-attachment 属性的默认值是 scroll，也就是说，在默认的情况下，背景会随文档滚动。

### CSS背景属性

| 属性                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [background](https://www.w3school.com.cn/cssref/pr_background.asp) | 简写属性，作用是将背景属性设置在一个声明中。 |
| [background-attachment](https://www.w3school.com.cn/cssref/pr_background-attachment.asp) | 背景图像是否固定或者随着页面的其余部分滚动。 |
| [background-color](https://www.w3school.com.cn/cssref/pr_background-color.asp) | 设置元素的背景颜色。                         |
| [background-image](https://www.w3school.com.cn/cssref/pr_background-image.asp) | 把图像设置为背景。                           |
| [background-position](https://www.w3school.com.cn/cssref/pr_background-position.asp) | 设置背景图像的起始位置。                     |
| [background-repeat](https://www.w3school.com.cn/cssref/pr_background-repeat.asp) | 设置背景图像是否及如何重复。                 |

## CSS文本

​	定义文本的外观,颜色,间距,对齐,装饰,缩进等等

### 缩进文本

​	把web页面上的第一行进行缩进,用[text-indent 属性](https://www.w3school.com.cn/cssref/pr_text_text-indent.asp)给第一行缩进一个给定的长度

​	首行缩进5em:

```css
p {text-indent: 5em;}
```

### 水平对齐

​	text-align是一个基本属性:b4.jpeg

​		值 left、right 和 center 会导致元素中的文本分别左对齐、右对齐和居中。

​		`<CENTER>`元素,不仅对文本居中,还会把整个元素居中	

​		justify: 两端对齐,左右两边放到父元素的边界

### 字间隔

​	word-spacing属性,改变字(单词)间的间隔,以空格为分界符

### 字母间隔

​	letter-spacing属性,改变字母间的间距

### 字符转换

​	text-transform属性: 处理文本的大小写

​		none,uppercase,lowercase,capital

### 文本装饰

​	text-decoration属性:

| none | underline | overline | line-through | blink |
| ---- | --------- | -------- | ------------ | ----- |
| 无   | 下划线    | 顶端线   | 贯穿线       | 闪烁  |

### 处理空白符

​	white-space属性:

| 值       | 空白符 | 换行符 | 自动换行 |
| :------- | :----- | :----- | :------- |
| pre-line | 合并   | 保留   | 允许     |
| normal   | 合并   | 忽略   | 允许     |
| nowrap   | 合并   | 忽略   | 不允许   |
| pre      | 保留   | 保留   | 不允许   |
| pre-wrap | 保留   | 保留   | 允许     |

### 文本方向

​	dirction属性:

| 值      | 描述                                      |
| :------ | :---------------------------------------- |
| ltr     | 默认。文本方向从左到右。                  |
| rtl     | 文本方向从右到左。                        |
| inherit | 规定应该从父元素继承 direction 属性的值。 |

## CSS 字体

### CSS字体系列

1. 通用字体:

   Serif 字体
   Sans-serif 字体
   Monospace 字体
   Cursive 字体
   Fantasy 字体

2. 特定字体: Times或Courier

### 指定字体

​	font-family:字体

### 字体风格

​	font-style 属性:

​		normal 正常

​		italic	斜体

​		oblique	倾斜幅度要大一些

### 字体变形

​	font-variant属性可以设定小型大写字母。

​		small-caps :　小型大写字母不是一般的大写字母，也不是小写字母，这种字母采用不同大小的大写字母。

### 字体加粗

​	[font-weight 属性](https://www.w3school.com.cn/cssref/pr_font_weight.asp)设置文本的粗细。100-900表示粗细.

​	使用 bold 关键字可以将文本设置为粗体。

### 字体大小

​	font-size

## CSS 链接

### 根据链接状态设置样式

​	链接的四种状态：

- a:link - 普通的、未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方
- a:active - 链接被点击的时刻

	## CSS 列表

​	css列表允许设置/改变列表标志,或者将图像作为列表项标志

### 列表类型

​	list-style-type属性,默认是圆点

​		none:清空样式

​		square:方块

### 列表图像

​	list-style-image :url()

### 列表的标志位置

​	list-style-position属性:

| 值      | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| inside  | 列表项目标记放置在文本以内，且环绕文本根据标记对齐。         |
| outside | 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。 |
| inherit | 规定应该从父元素继承 list-style-position 属性的值。          |

## CSS 表格

​	改善表格的外观

### 表格边框

​	border

​	border-collapse:设置单线条边框

### 表格文本对齐

​	text-align 水平对齐

​	vertical-align 垂直对齐

### CSS Table 属性

| 属性                                                         | 描述                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [border-collapse](https://www.w3school.com.cn/cssref/pr_tab_border-collapse.asp) | 设置是否把表格边框合并为单一的边框。 |
| [border-spacing](https://www.w3school.com.cn/cssref/pr_tab_border-spacing.asp) | 设置分隔单元格边框的距离。           |
| [caption-side](https://www.w3school.com.cn/cssref/pr_tab_caption-side.asp) | 设置表格标题的位置。                 |
| [empty-cells](https://www.w3school.com.cn/cssref/pr_tab_empty-cells.asp) | 设置是否显示表格中的空单元格。       |
| [table-layout](https://www.w3school.com.cn/cssref/pr_tab_table-layout.asp) | 设置显示单元、行和列的算法。         |

### CSS 轮廓

​	轮廓是绘制于元素周围的一条线,位于边框边缘的外围,突出元素的作用

| 属性                                                         | 描述                             |
| :----------------------------------------------------------- | :------------------------------- |
| [outline](https://www.w3school.com.cn/cssref/pr_outline.asp) | 在一个声明中设置所有的轮廓属性。 |
| [outline-color](https://www.w3school.com.cn/cssref/pr_outline-color.asp) | 设置轮廓的颜色。                 |
| [outline-style](https://www.w3school.com.cn/cssref/pr_outline-style.asp) | 设置轮廓的样式。                 |
| [outline-width](https://www.w3school.com.cn/cssref/pr_outline-width.asp) | 设置轮廓的宽度。                 |

## CSS框模型

​	CSS框模型规定了元素框处理元素内容 ,内边距 , 边框 和外边框的方式

​	可以使用display属性改变生成的框的类型:none不显示,block可以将行内元素项块级元素一样

​	元素框的最内部分是实际的内容，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的，因此不会遮挡其后的任何元素。

​	提示: 背景应用于由内容和内边距、边框组成的区域。

​	内边距、边框和外边距都是可选的，默认值是零。但是，许多元素将由用户代理样式表设置外边距和内边距。可以通过将元素的 margin 和 padding 设置为零来覆盖这些浏览器样式。这可以分别进行，也可以使用通用选择器对所有元素进行设置：

```css
* {
  margin: 0;
  padding: 0;
}
```

​	在 CSS 中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

```css
#box {
  width: 70px;
  margin: 10px;
  padding: 5px;
}
```

**提示：**内边距、边框和外边距可以应用于一个元素的所有边，也可以应用于单独的边。

**提示：**外边距可以是负值，而且在很多情况下都要使用负值的外边距。

### CSS 内边距

​	元素的内边距在边框和内容区之间称为内边距

​	padding 属性定义元素边框与元素内容之间的空白区域

| 属性                                                         | 描述                                                 |
| :----------------------------------------------------------- | :--------------------------------------------------- |
| [padding](https://www.w3school.com.cn/cssref/pr_padding.asp) | 简写属性。作用是在一个声明中设置元素的所内边距属性。 |
| [padding-bottom](https://www.w3school.com.cn/cssref/pr_padding-bottom.asp) | 设置元素的下内边距。                                 |
| [padding-left](https://www.w3school.com.cn/cssref/pr_padding-left.asp) | 设置元素的左内边距。                                 |
| [padding-right](https://www.w3school.com.cn/cssref/pr_padding-right.asp) | 设置元素的右内边距。                                 |
| [padding-top](https://www.w3school.com.cn/cssref/pr_padding-top.asp) | 设置元素的上内边距。                                 |

### CSS边框

​	元素的边框是喂养元素内容和内边距的一条或多条线,边框出现在背景图之上

#### CSS 边框的样式

​	border-style属性

| 属性                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [border](https://www.w3school.com.cn/cssref/pr_border.asp)   | 简写属性，用于把针对四个边的属性设置在一个声明。             |
| [border-style](https://www.w3school.com.cn/cssref/pr_border-style.asp) | 用于设置元素所有边框的样式，或者单独地为各边设置边框样式。   |
| [ border-width](https://www.w3school.com.cn/cssref/pr_border-width.asp) | 简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。 |
| [ border-color](https://www.w3school.com.cn/cssref/pr_border-color.asp) | 简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色 |
| [ border-bottom](https://www.w3school.com.cn/cssref/pr_border-bottom.asp) | 简写属性，用于把下边框的所有属性设置到一个声明中。           |
| [ border-bottom-color](https://www.w3school.com.cn/cssref/pr_border-bottom_color.asp) | 设置元素的下边框的颜色。                                     |
| [ border-bottom-style](https://www.w3school.com.cn/cssref/pr_border-bottom_style.asp) | 设置元素的下边框的样式。                                     |
| [ border-bottom-width](https://www.w3school.com.cn/cssref/pr_border-bottom_width.asp) | 设置元素的下边框的宽度。                                     |
| [ border-left](https://www.w3school.com.cn/cssref/pr_border-left.asp) | 简写属性，用于把左边框的所有属性设置到一个声明中。           |
| [ border-right](https://www.w3school.com.cn/cssref/pr_border-right.asp) | 简写属性，用于把右边框的所有属性设置到一个声明中。           |
| [ border-top](https://www.w3school.com.cn/cssref/pr_border-top.asp) | 简写属性，用于把上边框的所有属性设置到一个声明中。           |

### CSS 外边框

​	围绕在元素边框的空白区是外边距,设置外边据会在元素外创建额外的空白

​	margin 属性,可以设置为auto,自动填充

| 属性                                                         | 描述                                       |
| :----------------------------------------------------------- | :----------------------------------------- |
| [margin](https://www.w3school.com.cn/cssref/pr_margin.asp)   | 简写属性。在一个声明中设置所有外边距属性。 |
| [margin-bottom](https://www.w3school.com.cn/cssref/pr_margin-bottom.asp) | 设置元素的下外边距。                       |
| [margin-left](https://www.w3school.com.cn/cssref/pr_margin-left.asp) | 设置元素的左外边距。                       |
| [margin-right](https://www.w3school.com.cn/cssref/pr_margin-right.asp) | 设置元素的右外边距。                       |
| [margin-top](https://www.w3school.com.cn/cssref/pr_margin-top.asp) | 设置元素的上外边距。                       |



### 外边距合并

​	当两个垂直外边距相遇时,他们将形成一个外边距,合并后的外边距是二者之中较大的

​	**注释：**只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

## CSS 定位和浮动

​	CSS 为定位和浮动提供了一些属性，利用这些属性，可以建立列式布局，将布局的一部分与另一部分重叠，还可以完成很多通常需要使用多个表格才能完成的任务。	

​	定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置

#### CSS定位机制

​	CSS有三种基本的定位机制: 普通流/浮动/绝对定位

​	默认的都是普通流

​	由position属性控制	

- static

  元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。

- relative

  元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。

- absolute

  元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。

- fixed

  元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。

**提示：**相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置。

#### CSS 定位属性

​	CSS 定位属性允许你对元素进行定位

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [position](https://www.w3school.com.cn/cssref/pr_class_position.asp) | 把元素放置到一个静态的、相对的、绝对的、或固定的位置中。     |
| [top](https://www.w3school.com.cn/cssref/pr_pos_top.asp)     | 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。 |
| [right](https://www.w3school.com.cn/cssref/pr_pos_right.asp) | 定义了定位元素右外边距边界与其包含块右边界之间的偏移。       |
| [bottom](https://www.w3school.com.cn/cssref/pr_pos_bottom.asp) | 定义了定位元素下外边距边界与其包含块下边界之间的偏移。       |
| [left](https://www.w3school.com.cn/cssref/pr_pos_left.asp)   | 定义了定位元素左外边距边界与其包含块左边界之间的偏移。       |
| [overflow](https://www.w3school.com.cn/cssref/pr_pos_overflow.asp) | 设置当元素的内容溢出其区域时发生的事情。                     |
| [clip](https://www.w3school.com.cn/cssref/pr_pos_clip.asp)   | 设置元素的形状。元素被剪入这个形状之中，然后显示出来。       |
| [vertical-align](https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp) | 设置元素的垂直对齐方式。                                     |
| [z-index](https://www.w3school.com.cn/cssref/pr_pos_z-index.asp) | 设置元素的堆叠顺序。                                         |

## CSS 相对定位

​	设置为相对定位的元素框会便宜某个距离,元素仍然保持其未定位前的形状,它原本所占的空间仍被保留

### CSS 相对定位

​	如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。

​	如果将 top 设置为 20px，那么框将在原位置顶部下面 20 像素的地方。如果 left 设置为 30 像素，那么会在元素左边创建 30 像素的空间，也就是将元素向右移动。

```css
#box_relative {
  position: relative;
  left: 30px;
  top: 20px;
}
```

​	注意，在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。

## 绝对定位

​	设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。

### CSS 绝对定位

​	绝对定位使元素的位置与文档流无关，因此不占据空间。这一点与相对定位不同，相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置。

普通流中其它元素的布局就像绝对定位的元素不存在一样：

```css
#box_relative {
  position: absolute;
  left: 30px;
  top: 20px;
}
```

### CSS 浮动

​	浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

​	由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。

​	float属性:

| 值      | 描述                                                 |
| :------ | :--------------------------------------------------- |
| left    | 元素向左浮动。                                       |
| right   | 元素向右浮动。                                       |
| none    | 默认值。元素不浮动，并会显示在其在文本中出现的位置。 |
| inherit | 规定应该从父元素继承 float 属性的值。                |

## CSS 选择器

| 选择器               | 例子                  | 例子描述                                               |
| -------------------- | --------------------- | ------------------------------------------------------ |
| .class               | .intro                | 选择 class="intro" 的所有元素。1                       |
| #id                  | #firstname            | 选择 id="firstname" 的所有元素。1                      |
| *                    | *                     | 选择所有元素。2                                        |
| element              | p                     | 选择所有 `<p>` 元素。1                                 |
| element,element      | div,p                 | 选择所有 `<div>` 元素和所有 `<p>` 元素。1              |
| element element      | div p                 | 选择 `<div>` 元素内部的所有 `<p>` 元素。1              |
| element>element      | div>p                 | 选择父元素为 `<div>` 元素的所有 `<p>` 元素。2          |
| element+element      | div+p                 | 选择紧接在 `<div>` 元素之后的所有 `<p>` 元素。2        |
| [attribute]          | [target]              | 选择带有 target 属性所有元素。2                        |
| [attribute=value]    | [target=_blank]       | 选择 target="_blank" 的所有元素。2                     |
| [attribute~=value]   | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。2         |
| [attribute           | =value]               | [lang                                                  |
| :link                | a:link                | 选择所有未被访问的链接。1                              |
| :visited             | a:visited             | 选择所有已被访问的链接。1                              |
| :active              | a:active              | 选择活动链接。1                                        |
| :hover               | a:hover               | 选择鼠标指针位于其上的链接。1                          |
| :focus               | input:focus           | 选择获得焦点的 input 元素。2                           |
| :first-letter        | p:first-letter        | 选择每个 `<p>` 元素的首字母。1                         |
| :first-line          | p:first-line          | 选择每个 `<p>` 元素的首行。1                           |
| :first-child         | p:first-child         | 选择属于父元素的第一个子元素的每个 `<p>` 元素。2       |
| :before              | p:before              | 在每个 `<p>` 元素的内容之前插入内容。2                 |
| :after               | p:after               | 在每个 `<p>` 元素的内容之后插入内容。2                 |
| :lang(language)      | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 `<p>` 元素。2 |
| element1~element2    | p~ul                  | 选择前面有 `<p>` 元素的每个 `<ul>` 元素。3             |
| [attribute^=value]   | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 `<a>` 元素。3   |
| [attribute$=value]   | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 `<a>` 元素。3      |
| [attribute*=value]   | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 `<a>` 元素。3   |
| :first-of-type       | p:first-of-type       | 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素。3  |
| :last-of-type        | p:last-of-type        | 选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素。3  |
| :only-of-type        | p:only-of-type        | 选择属于其父元素唯一的 `<p>` 元素的每个 `<p>` 元素。3  |
| :only-child          | p:only-child          | 选择属于其父元素的唯一子元素的每个 `<p>` 元素。3       |
| :nth-child(n)        | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 `<p>` 元素。3     |
| :nth-last-child(n)   | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。3                      |
| :nth-of-type(n)      | p:nth-of-type(2)      | 选择属于其父元素第二个 `<p>` 元素的每个 `<p>` 元素。3  |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。3                  |
| :last-child          | p:last-child          | 选择属于其父元素最后一个子元素每个 `<p>` 元素。3       |
| :root                | :root                 | 选择文档的根元素。3                                    |
| :empty               | p:empty               | 选择没有子元素的每个 `<p>` 元素（包括文本节点）。3     |
| :target              | #news:target          | 选择当前活动的 #news 元素。3                           |
| :enabled             | input:enabled         | 选择每个启用的 `<input>` 元素。3                       |
| :disabled            | input:disabled        | 选择每个禁用的 `<input>` 元素3                         |
| :checked             | input:checked         | 选择每个被选中的 `<input>` 元素。3                     |
| :not(selector)       | :not(p)               | 选择非 `<p>` 元素的每个元素。3                         |
| ::selection          | ::selection           | 选择被用户选取的元素部分。3                            |

## 伪类和伪元素

### 伪类

| 伪类         | 作用                           |                                             |
| ------------ | ------------------------------ | ------------------------------------------- |
| :hover       | 将样式添加到鼠标悬浮的元素     | color,font-size,font-family,text-decoration |
| :active      | 将样式添加到被激活的元素       |                                             |
| :focus       | 将样式添加到获得焦点的元素     |                                             |
| :link        | 将样式添加到未被访问过的链接   |                                             |
| :visited     | 将样式添加到被访问过的链接     |                                             |
| :first-child | 将样式添加到元素的第一个子元素 |                                             |
| :lang        | 定义制定的元素中使用的语言     |                                             |

### 伪元素

| 伪元素         | 作用                     |
| -------------- | ------------------------ |
| ::first-letter | 将样式添加到文本的首字母 |
| ::first-line   | 将样式添加到文本的首行   |
| ::before       | 在某元素之前插入某些内容 |
| ::after        | 在某元素之后插入某些内容 |

### 新增伪类

| 新增伪类              | 作用                                                |
| --------------------- | --------------------------------------------------- |
| p:first-of-type       | 选择属于其父元素的首个`<P>`元素的每个`<P>`元素      |
| p:last-of-type        | 选择属于其父元素的最后`<P>`元素的每个`<P>`元素      |
| p:only-of-type        | 选择属于其父元素唯一的`<P>`元素的每个`<P>`元素      |
| p:only-child          | 选择属于其父元素唯一的子元素的每个`<P>`元素         |
| p:nth-child(n)        | 选择属于其父元素的第n个子元素的每个`<P>`元素        |
| p:nth-last-child(n)   | 选择属于其父元素的倒数第n个子元素的每个`<P>`元素    |
| p:nth-of-type(n)      | 选择属于其父元素的第n个`<P>`元素的每个`<P>`元素     |
| p:nth-last-of-type(n) | 选择属于其父元素的倒数第n个`<P>`元素的每个`<P>`元素 |
| p:last-child          | 选择属于其父元素最后一个子元素的每个`<P>`元素       |
| p:empty               | 选择没有子元素的每个`<P>`元素                       |
| p:target              | 选择当前活动的每个`<P>`元素                         |
| p:not(p)              | 选择非`<P>`元素的每个元素                           |
| p:enabled             | 控制表单控件的可用状态                              |
| p:disabled            | 控制表单控件的可用状态                              |
| p:checked             | 单选框或复选框被选中                                |

## CSS尺寸

​	控制元素的高度和宽度,允许增加行间距

| 属性                                                         | 描述                 |
| :----------------------------------------------------------- | :------------------- |
| [height](https://www.w3school.com.cn/cssref/pr_dim_height.asp) | 设置元素的高度。     |
| [line-height](https://www.w3school.com.cn/cssref/pr_dim_line-height.asp) | 设置行高。           |
| [max-height](https://www.w3school.com.cn/cssref/pr_dim_max-height.asp) | 设置元素的最大高度。 |
| [max-width](https://www.w3school.com.cn/cssref/pr_dim_max-width.asp) | 设置元素的最大宽度。 |
| [min-height](https://www.w3school.com.cn/cssref/pr_dim_min-height.asp) | 设置元素的最小高度。 |
| [min-width](https://www.w3school.com.cn/cssref/pr_dim_min-width.asp) | 设置元素的最小宽度。 |
| [width](https://www.w3school.com.cn/cssref/pr_dim_width.asp) | 设置元素的宽度。     |

## CSS 分类

​	规定如何以及在何处显示元素，设置图像显示于另一元素中的何处，相对于其正常位置来定位元素，使用绝对值来定位元素，以及元素的可见度。

| 属性                                                         | 描述                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------- |
| [clear](https://www.w3school.com.cn/cssref/pr_class_clear.asp) | 设置一个元素的侧面是否允许其他的浮动元素。               |
| [cursor](https://www.w3school.com.cn/cssref/pr_class_cursor.asp) | 规定当指向某元素之上时显示的指针类型。                   |
| [display](https://www.w3school.com.cn/cssref/pr_class_display.asp) | 设置是否及如何显示元素。                                 |
| [float](https://www.w3school.com.cn/cssref/pr_class_float.asp) | 定义元素在哪个方向浮动。                                 |
| [position](https://www.w3school.com.cn/cssref/pr_class_position.asp) | 把元素放置到一个静态的、相对的、绝对的、或固定的位置中。 |
| [visibility](https://www.w3school.com.cn/cssref/pr_class_visibility.asp) | 设置元素是否可见或不可见。                               |

## CSS 导航栏

​	导航栏基本上是一个链接列表，因此使用 <ul> 和 <li> 元素是非常合适的：

```html
<ul>
<li><a href="default.asp">Home</a></li>
<li><a href="news.asp">News</a></li>
<li><a href="contact.asp">Contact</a></li>
<li><a href="about.asp">About</a></li>
</ul>
```

​	现在，让我们从列表中去掉圆点和外边距：

```css
ul
{
list-style-type:none;
margin:0;
padding:0;
}
```

#### 垂直导航栏

​	我们只需要定义 <a> 元素的样式，除了上面的代码之外：

```css
a
{
display:block;
width:60px;
}
```

​	例子解释：

- display:block - 把链接显示为块元素可使整个链接区域可点击（不仅仅是文本），同时也允许我们规定宽度。
- width:60px - 块元素默认占用全部可用宽度。我们需要规定 60 像素的宽度。

#### 水平导航栏:

​	有两种创建水平导航栏的方法。使用行内或浮动列表项。

​	两种方法都不错，但是如果您希望链接拥有相同的尺寸，就必须使用浮动方法。

#### 行内列表项

​	除了上面的“标准”代码，构建水平导航栏的方法之一是将 <li> 元素规定为行内元素：

```css
li
{
display:inline;
}
```

​	display:inline; - 默认地，<li> 元素是块元素。在这里，我们去除了每个列表项前后的换行，以便让它们在一行中显示。

**提示：**请看一下我们[完整样式的水平导航栏实例](https://www.w3school.com.cn/tiy/t.asp?f=css_navbar_horizontal_advanced)。

#### 对列表项进行浮动

​	在上面的例子中，链接的宽度是不同的。

​	为了让所有链接拥有相等的宽度，浮动 <li> 元素并规定 <a> 元素的宽度：

```css
li
{
float:left;
}
a
{
display:block;
width:60px;
}
```

- float:left - 使用 float 来把块元素滑向彼此。
- display:block - 把链接显示为块元素可使整个链接区域可点击（不仅仅是文本），同时也允许我们规定宽度。
- width:60px - 由于块元素默认占用全部可用宽度，链接无法滑动至彼此相邻。我们需要规定 60 像素的宽度。

**提示：**请看一下我们[完整样式的水平导航栏实例](https://www.w3school.com.cn/tiy/t.asp?f=css_navbar_horizontal_float_advanced)。

## CSS 图像透明度

​	css创建透明图像,opacity属性

#### 创建透明图像

```css
img
{
opacity:0.4;
filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
}
```

​	IE9, Firefox, Chrome, Opera 和 Safari 使用属性 *opacity* 来设定透明度。opacity 属性能够设置的值从 0.0 到 1.0。值越小，越透明。

​	IE8 以及更早的版本使用滤镜 *filter:alpha(opacity=x)*。x 能够取的值从 0 到 100。值越小，越透明。

#### 图像透明度-Hover效果

```css
img
{
opacity:0.4;
filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
}
img:hover
{
opacity:1.0;
filter:alpha(opacity=100); /* 针对 IE8 以及更早的版本 */
}
```

​	第一个 CSS 代码块类似实例 1 中的代码。此外，我们已经设置了当鼠标指针位于图像上时的样式。在这个例子中，当指针移动到图像上时，我们希望图像是不透明的。

​	对应的 CSS 是：*opacity=1*。

​	IE8 以及更早的浏览器：*filter:alpha(opacity=100)*。

​	当鼠标指针移出图像后，图像会再次透明。

#### 透明框中的文本

```html
<!DOCTYPE html>
<html>
<head>
<style>
div.background
{
  width: 400px;
  height: 266px;
  background: url('/i/tulip_peach_blossom_w.jpg') no-repeat;
  border: 1px solid black;
}

div.transbox
{
  width: 338px;
  height: 204px;
  margin:30px;
  background-color: #ffffff;
  border: 1px solid black;
  /* for IE */
  filter:alpha(opacity=60);
  /* CSS3 standard */
  opacity:0.6;
}

div.transbox p
{
  margin: 30px 40px;
}
</style>
</head>

<body>

<div class="background">
<div class="transbox">
<p>
This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.
This is some text that is placed in the transparent box.
</p>
</div>
</div>

</body>
</html>
```

​	首先，我们创建一个 div 元素 (class="background")，它有固定的高度和宽度、背景图像，以及边框。然后我们在第一个 div 内创建稍小的 div (class="transbox")。"transbox" div 有固定的宽度、背景色和边框 - 并且它是透明的。在透明 div 内部，我们在 p 元素中加入了一些文本。

### 媒介类型

​	定义以何种媒介来提交文档,文档可以被显示在显示器/纸媒介或者听觉浏览器

#### 媒介类型

​	某些 CSS 属性仅仅被设计为针对某些媒介。

​	比方说 "voice-family" 属性被设计为针对听觉用户终端。其他的属性可被用于不同的媒介。

​	例如，"font-size" 属性可被用于显示器以及印刷媒介，但是也许会带有不同的值。显示器上面的显示的文档通常会需要比纸媒介文档更大的字号，

​	同时，在显示器上，sans-serif 字体更易阅读，而在纸媒介上，serif 字体更易阅读。

#### @media规则

​	在同样的样式表中,使用不同的样式规则针对不同的媒介

​	下面这个例子中的样式告知浏览器在显示器上显示 14 像素的 Verdana 字体。但是假如页面需要被打印，将使用 10 个像素的 Times 字体。注意：font-weight 被设置为粗体，不论显示器还是纸媒介：

````html
<html>
<head>

<style>
@media screen
{
p.test {font-family:verdana,sans-serif; font-size:14px}
}

@media print
{
p.test {font-family:times,serif; font-size:10px}
}

@media screen,print
{
p.test {font-weight:bold}
}
</style>

</head>

<body>....</body>

</html>
````

| 媒介类型   | 描述                                                   |
| :--------- | :----------------------------------------------------- |
| all        | 用于所有的媒介设备。                                   |
| aural      | 用于语音和音频合成器。                                 |
| braille    | 用于盲人用点字法触觉回馈设备。                         |
| embossed   | 用于分页的盲人用点字法打印机。                         |
| handheld   | 用于小的手持的设备。                                   |
| print      | 用于打印机。                                           |
| projection | 用于方案展示，比如幻灯片。                             |
| screen     | 用于电脑显示器。                                       |
| tty        | 用于使用固定密度字母栅格的媒介，比如电传打字机和终端。 |
| tv         | 用于电视机类型的设备。                                 |