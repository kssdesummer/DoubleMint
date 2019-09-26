# HTML

### 标签

### a 链接 : 

​	定义:锚元素,标签定义超链接，用于从一张页面链接到另一张页面。

​	<a>标签最重要的属性是 `href `属性，它指示链接的目标。

​	支持HTML中的全局属性和事件属性

​	使用 `href `属性：`download, hreflang, media, rel, target , type` 属性才可以使用。

- 未被访问的链接带有下划线而且是蓝色的
- 已被访问的链接带有下划线而且是紫色的
- 活动链接带有下划线而且是红色的

提示：被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。

提示：请使用 `CSS` 来设置链接的样式。

<a>标签里能够设置的属性:

| 属性                                                         | 值                                  | 描述                                                 |
| ------------------------------------------------------------ | ----------------------------------- | ---------------------------------------------------- |
| [charset](http://www.w3school.com.cn/tags/att_a_charset.asp) | *char_encoding*                     | HTML5 中不支持。规定被链接文档的字符集。             |
| [hreflang](http://www.w3school.com.cn/tags/att_a_hreflang.asp) | *language_code*                     | 规定被链接文档的语言。                               |
| [coords](http://www.w3school.com.cn/tags/att_a_coords.asp)   | *coordinates*                       | HTML5 中不支持。规定链接的坐标。                     |
| [download](http://www.w3school.com.cn/tags/att_a_download.asp) | *filename*                          | 规定被下载的超链接目标。                             |
| [href](http://www.w3school.com.cn/tags/att_a_href.asp)       | *URL*                               | 规定链接指向的页面的 URL。                           |
| [media](http://www.w3school.com.cn/tags/att_a_media.asp)     | media_query                         | 规定被链接文档是为何种媒介/设备优化的。              |
| [name](http://www.w3school.com.cn/tags/att_a_name.asp)       | *section_name*                      | HTML5 中不支持。规定锚的名称。                       |
| [rel](http://www.w3school.com.cn/tags/att_a_rel.asp)         | *text*                              | 规定当前文档与被链接文档之间的关系。                 |
| [rev](http://www.w3school.com.cn/tags/att_a_rev.asp)         | *text*                              | HTML5 中不支持。规定被链接文档与当前文档之间的关系。 |
| [shape](http://www.w3school.com.cn/tags/att_a_shape.asp)     | default rect circle poly            | HTML5 中不支持。规定链接的形状。                     |
| [target](http://www.w3school.com.cn/tags/att_a_target.asp)   | _blank _parent _self _top framename | 规定在何处打开链接文档。                             |
| [type](http://www.w3school.com.cn/tags/att_a_type.asp)       | *MIME type*                         | 规定被链接文档的的 MIME 类型。                       |

### abbr 缩写元素: 

​	定义:缩写元素,用于展示缩写，并且可以通过可选的 `title` 属性提供完整的描述。

```html
The <abbr title="People's Republic of China">PRC</abbr> was founded in 1949.
```

### acronym 首字母缩写:

​	定义: 标记一个首字母缩写,与title属性结合使用

```html
<acronym title="World Wide Web">WWW</acronym>
```

### address 文档/文章信息:

​	定义:<address> 标签定义文档或文章的作者/拥有者的联系信息。

​	位于 <body> 元素内，则它表示文档联系信息,位于 <article> 元素内，则它表示文章的联系信息。

​	元素中的文本通常呈现为斜体。大多数浏览器会在 address 元素前后添加折行

提示：<address> 标签不应该用于描述通讯地址，除非它是联系信息的一部分。

提示：<address> 元素通常连同其他信息被包含在 <footer> 元素中。

### applet :

 	标签定义嵌入的对象 applet,过时标签,现都是用object。

### caption 表格标题: 

​	定义表格标题,后面必须跟在table之后,标题在表格之上居中对齐

```html
<table border="1">
    <!--    可用align调整对齐方式,但一般都在css设置-->
    <caption align=" ">this is a table</caption>
    <tr>
        <th>Month</th>
        <th>Savings</th>
    </tr>
    <tr>
        <td>January</td>
        <td>$100</td>
    </tr>
</table>
```

### 短元素标签:

| 标签                                                       | 定义                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| [<em>](http://www.w3school.com.cn/tags/tag_em.asp)         | 把文本定义为强调的内容。                                     |
| [<strong>](http://www.w3school.com.cn/tags/tag_strong.asp) | 把文本定义为语气*更强*的强调的内容。                         |
| [<dfn>](http://www.w3school.com.cn/tags/tag_dfn.asp)       | 定义一个定义项目。                                           |
| [<code>](http://www.w3school.com.cn/tags/tag_code.asp)     | 定义计算机代码文本。                                         |
| [<samp>](http://www.w3school.com.cn/tags/tag_samp.asp)     | 定义样本文本。                                               |
| [<kbd>](http://www.w3school.com.cn/tags/tag_kbd.asp)       | 定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。 |
| [<var>](http://www.w3school.com.cn/tags/tag_var.asp)       | 定义变量。您可以将此标签与 <pre> 及 <code> 标签配合使用。    |
| [<cite>](http://www.w3school.com.cn/tags/tag_cite.asp)     | 定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。 |

### datalist 下拉选项:

​	与input结合使用,实现下拉框

```html
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```

### 列表项(dl.dd.dt)

​	结合使用[<dl>](http://www.w3school.com.cn/tags/tag_dl.asp)定义列表[<dt>](http://www.w3school.com.cn/tags/tag_dt.asp)定义列表中的项目和[<dd>](http://www.w3school.com.cn/tags/tag_dd.asp)(描述列表中的项目)

```html
<dl>
   <dt>计算机</dt>
   <dd>用来计算的仪器 ... ...</dd>
   <dt>显示器</dt>
   <dd>以视觉方式显示信息的装置 ... ...</dd>
</dl>
```

### details 详情:

​	点击得到详情,与summary结合使用,summary是总结标签

```html
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>
```

### dialog 对话框 :

​	定义对话框或窗口,双标签

### dir 目录列表:

​	定义一个目录列表,废弃标签

### embed 插入一个区域:

在固定位置插入一个区块,可添加属性设置插入源,以及区块的类型宽高

| 属性                                                         | 值       | 描述                 |
| :----------------------------------------------------------- | :------- | :------------------- |
| [height](http://www.w3school.com.cn/tags/att_embed_height.asp) | *pixels* | 设置嵌入内容的高度。 |
| [src](http://www.w3school.com.cn/tags/att_embed_src.asp)     | *url*    | 嵌入内容的 URL。     |
| [type](http://www.w3school.com.cn/tags/att_embed_type.asp)   | *type*   | 定义嵌入内容的类型。 |
| [width](http://www.w3school.com.cn/tags/att_embed_width.asp) | *pixels* | 设置嵌入内容的宽度。 |

 ### fieldset 表单标题:

fieldset 元素可将表单内的相关元素分组。

<fieldset> 标签将表单内容的一部分打包，生成一组相关表单的字段。

当一组表单元素放到 <fieldset> 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。

<fieldset> 标签没有必需的或唯一的属性。

[ 标签](http://www.w3school.com.cn/tags/tag_legend.asp)为 fieldset 元素定义标题。

```html
<form> 
	<fieldset>
		<legend>健康信息</legend> 
		身高：<input type="text" /><br> 
		体重：<input type="text" /><br> 
	</fieldset>
</form>
```

### figcaption 标题

​	<figcaption> 标签定义 [figure](http://www.w3school.com.cn/tags/tag_figure.asp) 元素的标题（caption）。

​	"figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。

​	<figure>标签规定独立的流内容(图片/照片/代码等)

​	figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。

```html
<figure>
  <figcaption>黄浦江上的的卢浦大桥</figcaption>
  <img src="shanghai_lupu_bridge.jpg" width="350" height="234" />
</figure>
```

### font 字体

<font> 规定文本的字体、字体尺寸、字体颜色

```html
<font size="3" color="red">This is some text!</font>
<font size="2" color="blue">This is some text!</font>
<font face="verdana" color="green">This is some text!</font>
```

| 属性                                                        | 值                               | 描述                                           |
| :---------------------------------------------------------- | :------------------------------- | :--------------------------------------------- |
| [color](http://www.w3school.com.cn/tags/att_font_color.asp) | *rgb(x,x,x)**#xxxxxx**colorname* | 不赞成使用。请使用样式取代它。规定文本的颜色。 |
| [face](http://www.w3school.com.cn/tags/att_font_face.asp)   | *font_family*                    | 不赞成使用。请使用样式取代它。规定文本的字体。 |
| [size](http://www.w3school.com.cn/tags/att_font_size.asp)   | *number*                         | 不赞成使用。请使用样式取代它。规定文本的大小   |

### footer 页脚

<footer> 标签定义文档或节的页脚。

<footer> 元素应当含有其包含元素的信息。

页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。

您可以在一个文档中使用多个 <footer> 元素。

