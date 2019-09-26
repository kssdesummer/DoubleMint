## 选择器

### 基本

- [#id](http://jquery.cuishifeng.cn/id.html)

  id 选择器 , 用#识别	$("div")

- [element](http://jquery.cuishifeng.cn/element.html)

  标签属性	$("div,span,p.jing")

- [.class](http://jquery.cuishifeng.cn/class.html)

  类选择器 用`.`识别	$(".c")

- [*](http://jquery.cuishifeng.cn/all.html)

  识别所有的标签	$("*")

- [selector1,selector2,selectorN](http://jquery.cuishifeng.cn/multiple.html) 

  ```jQuery
  $("div,span,p.jing")
  ```

  选择这几个标签下的所有

### 层级

  //空格匹配所有子元素   > 所有子元素     + 紧接着的第一个子元素     ～ 匹配同级别的所有

- [ancestor descendant](http://jquery.cuishifeng.cn/descendant.html)

- [parent > child](http://jquery.cuishifeng.cn/child.html)
- [prev + next](http://jquery.cuishifeng.cn/next_1.html)
- [prev ~ siblings](http://jquery.cuishifeng.cn/siblings_1.html)

### 基本筛选器

- [:first](http://jquery.cuishifeng.cn/first_1.html)	第一个

- [:not(selector)](http://jquery.cuishifeng.cn/not_1.html) 未被选择的

- [:even](http://jquery.cuishifeng.cn/even.html) 偶数索引

- [:odd](http://jquery.cuishifeng.cn/odd.html) 奇数索引

- [:eq(index)](http://jquery.cuishifeng.cn/eq_1.html) 索引值为某数的

- [:gt(index)](http://jquery.cuishifeng.cn/gt.html) 大于给定索引的

- [:lang](http://jquery.cuishifeng.cn/lang.html)1.9+    选择指定语言的所有元素,例如选择器$("div:lang(en)")将匹配<div lang="en"> and <div lang="en-us">（和他们的后代<div>），但不包括<div lang="fr">

- [:last](http://jquery.cuishifeng.cn/last_1.html) 最后一个

- [:lt(index)](http://jquery.cuishifeng.cn/lt.html) 小于给定索引值

- [:header](http://jquery.cuishifeng.cn/header.html) 匹配标题

- [:animated](http://jquery.cuishifeng.cn/animated.html) 匹配所有正在执行动画效果的元素

- [:focus](http://jquery.cuishifeng.cn/focus_1.html) 

  匹配当前获取焦点的元素

  如同其他伪类选择器（那些以":"开始），建议:focus前面用标记名称或其他选择;否则，通用选择("**")是不言而喻的。换句话说，$(':focus')等同为$('*:focus')。如果你正在寻找当前的焦点元素，$( document.activeElement )将检索，而不必搜索整个DOM树。

- [:root](http://jquery.cuishifeng.cn/root.html)1.9+

  选择该文档的根元素。

  在HTML中，文档的根元素，和$(":root")选择的元素一样， 永远是<html>元素。

- [:target](http://jquery.cuishifeng.cn/target.html)1.9+

  选择由文档URI的格式化识别码表示的目标元素。不常用

  如果文档的URI包含一个格式化的标识符，或hash（哈希）， 然后:target选择器将匹配ID和标识符相匹配的元素。  例如，给定的URI http://example.com/#foo， $( "p:target" )，将选择<p id="foo">元素。

### 内容

- [:contains(text)](http://jquery.cuishifeng.cn/contains.html)

  匹配包含给定文本的元素,参数text是用以查找的字符串

- [:empty](http://jquery.cuishifeng.cn/empty_1.html)

  匹配所有不包含子元素或者文本的空元素

- [:has(selector)](http://jquery.cuishifeng.cn/has_1.html)

  匹配含有选择器所匹配的元素的元素

- [:parent](http://jquery.cuishifeng.cn/parent_1.html)

  匹配含有子元素或者文本的元素

### 可见性

- [:hidden](http://jquery.cuishifeng.cn/hidden_1.html)

  匹配所有不可见元素,或者type为hidden的元素,display:none

- [:visible](http://jquery.cuishifeng.cn/visible.html)

  匹配所有可见的元素

### 属性

- [[attribute\]](http://jquery.cuishifeng.cn/attributeHas.html)

  匹配包含给定属性的元素。注意，在jQuery 1.3中，前导的@符号已经被废除！如果想要兼容最新版本，只需要简单去掉@符号即可。

- [[attribute=value\]](http://jquery.cuishifeng.cn/attributeEquals.html)

  匹配给定的属性是某个特定值的元素

- [[attribute!=value\]](http://jquery.cuishifeng.cn/attributeNotEqual.html)

  匹配给定的属性不是某个特定值的元素,等价与not([attr=value])

- [[attribute^=value\]](http://jquery.cuishifeng.cn/attributeStartsWith.html)

  开头

- [[attribute$=value\]](http://jquery.cuishifeng.cn/attributeEndsWith.html)

  结尾

- [[attribute*=value\]](http://jquery.cuishifeng.cn/attributeContains.html)

  包含某些值

- [[attrSel1\][attrSel2][attrSelN]](http://jquery.cuishifeng.cn/attributeMultiple.html)

  同时满足多个条件时同时使用

### 子元素

- [:first-child](http://jquery.cuishifeng.cn/firstChild.html)

  第一个子元素,即若父元素相同则是多个父元素下的第一个子元素,等同于nth-chile(1)

- [:first-of-type](http://jquery.cuishifeng.cn/firstOfType.html)1.9+

  ```
  $("span:first-of-type");
  ```

  即匹配到每一个部分的第一个出现的span

- [:last-child](http://jquery.cuishifeng.cn/lastChild.html)

  最后一个子元素,可多个

- [:last-of-type](http://jquery.cuishifeng.cn/lastOfType.html)1.9+

  即匹配到每一个部分的最后一个

- [:nth-child](http://jquery.cuishifeng.cn/nthChild.html)

  $("ul li:nth-child(3)")匹配从1开始的其父元素下的第三个元素

- [:nth-last-child()](http://jquery.cuishifeng.cn/nthLastChild.html)1.9+

  倒着数

- [:nth-last-of-type()](http://jquery.cuishifeng.cn/nthLastOfType.html)1.9+

  每个部分的倒着数,从1开始

- [:nth-of-type()](http://jquery.cuishifeng.cn/nthOfType.html)1.9+

  同意父元素下的,标签名相同的子元素中的第n个

- [:only-child](http://jquery.cuishifeng.cn/onlyChild.html)

  匹配父元素中唯一的子元素

- [:only-of-type](http://jquery.cuishifeng.cn/onlyOfType.html)1.9+

  同一父元素下的唯一子元素

### 表单

- [:input](http://jquery.cuishifeng.cn/input.html)

  匹配所有 input, textarea, select 和 button 元素

- [:text](http://jquery.cuishifeng.cn/text_1.html)

  单行文本框

- [:password](http://jquery.cuishifeng.cn/password.html)

  类型是type="password"	密码框

- [:radio](http://jquery.cuishifeng.cn/radio.html)

  类型是type="radio"	单选框

- [:checkbox](http://jquery.cuishifeng.cn/checkbox.html)

  类型是type="checkbox"	复选框

- [:submit](http://jquery.cuishifeng.cn/submit_1.html)

  类型是type="submit"	提交按钮

- [:image](http://jquery.cuishifeng.cn/image.html)

  类型是type="image"	图像域

- [:reset](http://jquery.cuishifeng.cn/reset.html)

  类型是type="reset"	重置按钮

- [:button](http://jquery.cuishifeng.cn/button.html)

  类型是type="button"	按钮

- [:file](http://jquery.cuishifeng.cn/file_1.html)

  类型是type="file"	文件域

### 表单对象属性

- [:enabled](http://jquery.cuishifeng.cn/enabled_1.html)

  $("input:enabled")	匹配所有可用元素

- [:disabled](http://jquery.cuishifeng.cn/disabled_1.html)

- [:checked](http://jquery.cuishifeng.cn/checked_1.html)

  匹配所有选中的被选中元素(复选框、单选框等，select中的option)，对于select元素来说，获取选中推荐使用 [:selected](http://jquery.cuishifeng.cn/selected_1.html)

- [:selected](http://jquery.cuishifeng.cn/selected_1.html)

  $("select option:selected") 匹配所有选中的option元素

## AJAX

### 实现ajax部分页面刷新请求:

1. 用HTML和CSS实现页面
2. XMLhttpRequest对象: 运用XMLHttpRequest和web服务器进行数据的异步交换
3. JavaScript操作DOM,实现动态局部刷新

#### XMLHttpRequest对象:

​	声明: var request=new XMLHttpRequest();

在IE5,IE6不支持,想要声明则需要写一个判断:

```javascript
var request;
if(window.XMLHttpRequest){
	request = new XMLHttpRequest(); //IE7+,chrome
}else{
	request = new ActiveXObject("Microsoft.XMLHTTP"); // IE6  IE5
}
```

#### XMLHttpRequest发送请求

​	发送方法:将请求发送到服务器

1. request.open(method,url,async)

   方法,地址,同步/异步,ture默认异步ajax

   request.setRequestHeader("Content-type","类型");

2. request.send(string)

   get请求可以不填参数

   post请求一定要填参数

 例如:

​	request.open("POST",'create.php',ture);

​	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");

​	resquest.send("name=阿花&sex=女");

#### XMLHttpRequest取得响应

获取响应值方法:

- responseText: 获得字符串形式的相应数据
- responseXML: 获得XML形式的相应数据
- status和statusText: 以数字和文本形式返回HTTP状态码
- getAllResponseHeader(): 获取响应报头
- getResponseHeader(): 查询响应中的某个字段的值

得到响应成功时返回的通知:

​	readyState属性

```
	* 0 : 请求未初始化 , open还没调用
	* 1 : 服务器链接已建立,已经调用
	* 2 : 请求已接受 , 接收到头信息
	* 3 : 请求处理中 , 接收响应主题
	* 4 : 请求已完成 , 且响应已就绪 , 响应完成
```

监听事件:

```javascript
xmlhttp.onreadystatechange=function() 
  { 
  if (xmlhttp.readyState==4 && xmlhttp.status==200) 
    { 
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText; 
    } 
  }
```

### JSON

​	JavaScript对象表示法

​	JSON是存储和交换文本信息的语法,类似XML.它采用键值对的方式来组织,易与人们阅读和编写,同事也抑郁机器解析和生成

​	JSON是独立于语言的,什么语言都可以解析json,按照json的规则就可以

JSON和XML的比较:

1. json的长度比xml小
2. json读写速度快
3. json可以使用JavaScript内建的方法直接解析,转换为JavaScript对象,非常方便

JSON语法规则:

1. 格式"名称":"键值

JSOＮ解析方式:jsondata='{"name":"ahua","sex":"nv"}'

1. eval('('+jsondata+')') ; //不仅解析字符串,而且执行json字符串里面的方法

2. JSON.parse(jsondata); //会检测字符串是否合法

   json的校验工具: jsonlint.com



### ajax 请求

- [$.ajax(url,[settings])](http://jquery.cuishifeng.cn/jQuery.Ajax.html)

  - 通过 HTTP 请求加载远程数据。

  - **url**:一个用来包含发送请求的URL字符串。

    **settings**:AJAX 请求设置。所有选项都是可选的。

    ​	* 

- [$.get(url,[data\],[fn],[type])](http://jquery.cuishifeng.cn/jQuery.get.html)

  - 通过远程 HTTP GET 请求载入信息。

  - **url**:待载入页面的URL地址

    **data**:待发送 Key/value 参数。

    **callback**:载入成功时回调函数。

    **type**:返回内容格式，xml, html, script, json, text, _default。

- [$.getJSON(url,[data\],[fn])](http://jquery.cuishifeng.cn/jQuery.getJSON.html)

  - 通过 HTTP GET 请求载入 JSON 数据。

  - **url**:发送请求地址。

    **data**:待发送 Key/value 参数。

    **callback**:载入成功时回调函数。

- [$.getScript(url,[callback])](http://jquery.cuishifeng.cn/jQuery.getScript.html)

  - 通过 HTTP GET 请求载入并执行一个 JavaScript 文件。

  - **url**:待载入 JS 文件地址。

    **callback**:成功载入后回调函数。

- [$.post(url,[data\],[fn],[type])](http://jquery.cuishifeng.cn/jQuery.post.html)

  - 通过远程 HTTP POST 请求载入信息。

    - **url**:发送请求地址。

      **data**:待发送 Key/value 参数。

      **callback**:发送成功时回调函数。

      **type**:返回内容格式，xml, html, script, json, text, _default。

### ajax 事件

- [ajaxComplete(callback)](http://jquery.cuishifeng.cn/ajaxComplete.html)

  - AJAX 请求完成时执行函数。Ajax 事件。

    XMLHttpRequest 对象和设置作为参数传递给回调函数。

    callback 待执行函数

- [ajaxError(callback)](http://jquery.cuishifeng.cn/ajaxError.html)

  - AJAX 请求发生错误时执行函数。Ajax 事件。

    XMLHttpRequest 对象和设置作为参数传递给回调函数。捕捉到的错误可作为最后一个参数传递。

- [ajaxSend(callback)](http://jquery.cuishifeng.cn/ajaxSend.html)

  - AJAX 请求发送前执行函数。Ajax 事件。

    XMLHttpRequest 对象和设置作为参数传递给回调函数。

- [ajaxStart(callback)](http://jquery.cuishifeng.cn/ajaxStart.html)

  - AJAX 请求开始时执行函数。Ajax 事件。

- [ajaxStop(callback)](http://jquery.cuishifeng.cn/ajaxStop.html)

  - AJAX 请求结束时执行函数。Ajax 事件。

- [ajaxSuccess(callback)](http://jquery.cuishifeng.cn/ajaxSuccess.html)

  - AJAX 请求成功时执行函数。Ajax 事件。

    XMLHttpRequest 对象和设置作为参数传递给回调函数。	

### 其它

- [load(url,[data\],[callback])](http://jquery.cuishifeng.cn/load.html)

  - 载入远程 HTML 文件代码并插入至 DOM 中

  - **url**:待装入 HTML 网页网址。

    **data**:发送至服务器的 key/value 数据。在jQuery 1.3中也可以接受一个字符串了。

    **callback**:载入成功时回调函数。

- [$.ajaxPrefilter([type],fn)](http://jquery.cuishifeng.cn/jQuery.ajaxPrefilter.html)

  - 在发送每个请求之前以及$ .ajax（）处理它们之前，处理自定义Ajax选项或修改现有选项。

- [$.ajaxSetup([options])](http://jquery.cuishifeng.cn/jQuery.ajaxSetup.html)

  - 设置全局 AJAX 默认选项。

- [serialize()](http://jquery.cuishifeng.cn/serialize.html)

  - 序列表表格内容为字符串。

- [serializeArray()](http://jquery.cuishifeng.cn/serializeArray.html)

  - 序列化表格元素 (类似 '.serialize()' 方法) 返回 JSON 数据结构数据。

    注意:此方法返回的是JSON对象而非JSON字符串。需要使用插件或者第三方库进行字符串化操作。

    返回的JSON对象是由一个对象数组组成的，其中每个对象包含一个或两个名值对——name参数和value参数（如果value不为空的话）。

## 属性

### 基本属性

- [attr(name|pro|key,val|fn)](http://jquery.cuishifeng.cn/attr.html)

  - 设置或返回被选元素的属性值。

  - ```javascript
    $("img").attr("src"); 	//返回文档中所有图像的src属性值。
    $("img").attr({ src: "test.jpg", alt: "Test Image" }); // 为所有图像设置src和alt属性
    ```

- [removeAttr(name)](http://jquery.cuishifeng.cn/removeAttr.html)

  - 从每一个匹配的元素中删除一个属性
  - name 要删除的属性名

- [prop(n|p|k,v|f)](http://jquery.cuishifeng.cn/prop.html)

  - 获取在匹配的元素集中的第一个元素的属性值。

  - name    属性名称

    properties	作为属性的“名/值对”对象

    key,value	属性名称，属性值

    key,function(index, attr)
    	1:属性名称。

    ​	2:返回属性值的函数,第一个参数为当前元素的索引值，第二个参数为原先的属性值

- [removeProp(name)](http://jquery.cuishifeng.cn/removeProp.html)

  - 用来删除由.prop()方法设置的属性集

### CSS 类

- [addClass(class|fn)](http://jquery.cuishifeng.cn/addClass.html)
  - 为每个匹配的元素添加指定的类名。
  - class 一个或多个要添加到元素中的CSS类名，请用空格分开
  - function(index, class) 此函数必须返回一个或多个空格分隔的class名。接受两个参数，index参数为对象在这个集合中的索引值，class参数为这个对象原先的class属性值
- [removeClass([class|fn])](http://jquery.cuishifeng.cn/removeClass.html)
  - 从所有匹配的元素中删除全部或者指定的类。
- [toggleClass(class|fn[,sw])](http://jquery.cuishifeng.cn/toggleClass.html)
  - 如果存在（不存在）就删除（添加）一个类。

### HTML代码/文本/值

- [html([val|fn])](http://jquery.cuishifeng.cn/html.html)

  - 取得第一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档。

    在一个 HTML 文档中, 我们可以使用 .html() 方法来获取任意一个元素的内容。 如果选择器匹配多于一个的元素，那么只有第一个匹配元素的 HTML 内容会被获取。

- [text([val|fn])](http://jquery.cuishifeng.cn/text.html)

  - 取得所有匹配元素的内容。

    结果是由所有匹配元素包含的文本内容组合起来的文本。这个方法对HTML和XML文档都有效。

- [val([val|fn|arr])](http://jquery.cuishifeng.cn/val.html)

  - 获得匹配元素的当前值。

    在 jQuery 1.2 中,可以返回任意元素的值了。包括select。如果多选，将返回一个数组，其包含所选的值。

## CSS

### CSS

- [css(name|pro|[,val|fn])](http://jquery.cuishifeng.cn/css.html)1.9*
  - 访问匹配元素的样式属性。
- [jQuery.cssHooks](http://jquery.cuishifeng.cn/jQuery.cssHooks.html)
  - 直接向 jQuery 中添加钩子，用于覆盖设置或获取特定 CSS 属性时的方法，目的是为了标准化 CSS 属性名或创建自定义属性。

### 位置

- [offset([coordinates])](http://jquery.cuishifeng.cn/offset.html)

  - 获取匹配元素在当前视口的相对偏移。

    返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。

- [position()](http://jquery.cuishifeng.cn/position.html)

  - 获取匹配元素相对父元素的偏移。

- [scrollTop([val])](http://jquery.cuishifeng.cn/scrollTop.html)

  - 获取匹配元素相对滚动条顶部的偏移。

- [scrollLeft([val])](http://jquery.cuishifeng.cn/scrollLeft.html)

- 获取匹配元素相对滚动条左侧的偏移。

### 尺寸

- [height([val|fn])](http://jquery.cuishifeng.cn/height.html)
  - 取得匹配元素当前计算的高度值（px）。
- [width([val|fn])](http://jquery.cuishifeng.cn/width.html)
  - 取得匹配元素当前计算的宽度值（px）。
- [innerHeight()](http://jquery.cuishifeng.cn/innerHeight.html)
  - 获取第一个匹配元素内部区域高度（包括补白、不包括边框）。
- [innerWidth()](http://jquery.cuishifeng.cn/innerWidth.html)
  - 获取第一个匹配元素内部区域宽度（包括补白、不包括边框）。
- [outerHeight([options])](http://jquery.cuishifeng.cn/outerHeight.html)
  - 获取第一个匹配元素外部高度（默认包括补白和边框）。
- [outerWidth([options])](http://jquery.cuishifeng.cn/outerWidth.html)
  - 获取第一个匹配元素外部宽度（默认包括补白和边框）。

## 文档处理

### 内部插入

- [append(content|fn)](http://jquery.cuishifeng.cn/append.html)
  - 向每个匹配的元素内部最后追加内容。
- [appendTo(content)](http://jquery.cuishifeng.cn/appendTo.html)
  - 把所有匹配的元素追加到另一个指定的元素元素集合中。
- [prepend(content|fn)](http://jquery.cuishifeng.cn/prepend.html)
  - 向每个匹配的元素内部前置内容。
- [prependTo(content)](http://jquery.cuishifeng.cn/prependTo.html)
  - 把所有匹配的元素前置到另一个、指定的元素元素集合中。

### 外部插入

- [after(content|fn)](http://jquery.cuishifeng.cn/after.html)
  - 在每个匹配的元素之后插入内容。
- [before(content|fn)](http://jquery.cuishifeng.cn/before.html)
  - 在每个匹配的元素之前插入内容。
- [insertAfter(content)](http://jquery.cuishifeng.cn/insertAfter.html)
  - 把所有匹配的元素插入到另一个、指定的元素元素集合的后面。
- [insertBefore(content)](http://jquery.cuishifeng.cn/insertBefore.html)
  - 把所有匹配的元素插入到另一个、指定的元素元素集合的前面。

### 包裹

- [wrap(html|ele|fn)](http://jquery.cuishifeng.cn/wrap.html)

  - 把所有匹配的元素用其他元素的结构化标记包裹起来

  - ```
    $("p").wrap("<div class='wrap'></div>");
    // 用div 包裹所有的p
    ```

- [unwrap()](http://jquery.cuishifeng.cn/unwrap.html)

  - 这个方法将移出元素的父元素。这能快速取消 .wrap()方法的效果。匹配的元素（以及他们的同辈元素）会在DOM结构上替换他们的父元素。

- [wrapAll(html|ele)](http://jquery.cuishifeng.cn/wrapAll.html)

  - 将所有匹配的元素用单个元素包裹起来

- [wrapInner(html|ele|fn)](http://jquery.cuishifeng.cn/wrapInner.html)

  - 将每一个匹配的元素的子内容(包括文本节点)用一个HTML结构包裹起来

### 替换

- [replaceWith(content|fn)](http://jquery.cuishifeng.cn/replaceWith.html)
  - 将所有匹配的元素替换成指定的HTML或DOM元素。
- [replaceAll(selector)](http://jquery.cuishifeng.cn/replaceAll.html)
  - 用匹配的元素替换掉所有 selector匹配到的元素。

### 删除

- [empty()](http://jquery.cuishifeng.cn/empty.html)
  - 删除匹配的元素集合中所有的子节点。清空内容和标签
- [remove([expr])](http://jquery.cuishifeng.cn/remove.html)
  - 从DOM中删除所有匹配的元素。 把标签删除
- [detach([expr])](http://jquery.cuishifeng.cn/detach.html)
  - 从DOM中删除所有匹配的元素。

### 复制

- [clone([Even[,deepEven\]])](http://jquery.cuishifeng.cn/clone.html)
  - 克隆匹配的DOM元素并且选中这些克隆的副本。

## 筛选

### 过滤

- [eq(index|-index)](http://jquery.cuishifeng.cn/eq.html)

  - 获取当前链式操作中第N个jQuery对象，返回jQuery对象，当参数大于等于0时为正向选取，比如0代表第一个，1代表第二个。当参数为负数时为反向选取，比如-1为倒数第一个

    类似的有[get(index)](http://jquery.cuishifeng.cn/get.html),不过[get(index)](http://jquery.cuishifeng.cn/get.html)返回的是DOM对象。

- [first()](http://jquery.cuishifeng.cn/first.html)

- [last()](http://jquery.cuishifeng.cn/last.html)

- [hasClass(class)](http://jquery.cuishifeng.cn/hasClass.html)

  - 检查当前的元素是否含有某个特定的类，如果有，则返回true。

- [filter(expr|obj|ele|fn)](http://jquery.cuishifeng.cn/filter.html)

  - 筛选出与指定表达式匹配的元素集合。

- [is(expr|obj|ele|fn)](http://jquery.cuishifeng.cn/is.html)

  - 根据选择器、DOM元素或 jQuery 对象来检测匹配元素集合，如果其中至少有一个元素符合这个给定的表达式就返回true。如果没有元素符合，或者表达式无效，都返回'false'。

- [map(callback)](http://jquery.cuishifeng.cn/map.html)

  - 将一组元素转换成其他数组（不论是否是元素数组）

- [has(expr|ele)](http://jquery.cuishifeng.cn/has.html)

  - 保留包含特定后代的元素，去掉那些不含有指定后代的元素。

- [not(expr|ele|fn)](http://jquery.cuishifeng.cn/not.html)

  - 从匹配元素的集合中删除与指定表达式匹配的元素

- [slice(start,[end])](http://jquery.cuishifeng.cn/slice.html)

  - 选取一个匹配的子集

### 查找

- [children([expr])](http://jquery.cuishifeng.cn/children.html)

  - 取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合。

- [closest(e|o|e)](http://jquery.cuishifeng.cn/closest.html)1.7*

  - 从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素。。

- [find(e|o|e)](http://jquery.cuishifeng.cn/find.html)

  - 搜索所有与指定表达式匹配的元素。这个函数是找出正在处理的元素的后代元素的好方法。

- [next([expr])](http://jquery.cuishifeng.cn/next.html)

  - 取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。

    这个函数只返回后面那个紧邻的同辈元素，而不是后面所有的同辈元素（可以使用nextAll）。可以用一个可选的表达式进行筛选。

- [nextAll([expr])](http://jquery.cuishifeng.cn/nextAll.html)

  - 查找当前元素之后所有的同辈元素。

    可以用表达式过滤

- [nextUntil([e|e\][,f])](http://jquery.cuishifeng.cn/nextUntil.html)

  - 查找当前元素之后所有的同辈元素，直到遇到匹配的那个元素为止。

    如果提供的jQuery代表了一组DOM元素，.nextUntil()方法也能让我们找遍所有元素所在的DOM树，直到遇到了一个跟提供的参数匹配的元素的时候才会停下来。这个新jQuery对象里包含了下面所有找到的同辈元素，但不包括那个选择器匹配到的元素。

    如果没有选择器匹配到，或者没有提供参数，那么跟在后面的所有同辈元素都会被选中。这就跟用没有提供参数的 [.nextAll()](http://jquery.cuishifeng.cn/nextAll.html)效果一样。

- [offsetParent()](http://jquery.cuishifeng.cn/offsetParent.html)

  - 返回第一个匹配元素用于定位的父节点。

    这返回父元素中第一个其position设为relative或者absolute的元素。此方法仅对可见元素有效。

- [parent([expr])](http://jquery.cuishifeng.cn/parent.html)

  - 取得一个包含着所有匹配元素的唯一父元素的元素集合。

- [parents([expr])](http://jquery.cuishifeng.cn/parents.html)

  - 取得一个包含着所有匹配元素的祖先元素的元素集合（不包含根元素）。可以通过一个可选的表达式进行筛选

- [parentsUntil([e|e\][,f])](http://jquery.cuishifeng.cn/parentsUntil.html)

  - 查找当前元素的所有的父辈元素，直到遇到匹配的那个元素为止。

- [prev([expr])](http://jquery.cuishifeng.cn/prev.html)

  - 取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。

    可以用一个可选的表达式进行筛选。只有紧邻的同辈元素会被匹配到，而不是前面所有的同辈元素。

- [prevAll([expr])](http://jquery.cuishifeng.cn/prevAll.html)

  - 查找当前元素之前所有的同辈元素

- [prevUntil([e|e\][,f])](http://jquery.cuishifeng.cn/prevUntil.html)

  - 查找当前元素之前所有的同辈元素，直到遇到匹配的那个元素为止。

- [siblings([expr])](http://jquery.cuishifeng.cn/siblings.html)

  - 取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合。可以用可选的表达式进行筛选。

### 串联

- [add(e|e|h|o[,c])](http://jquery.cuishifeng.cn/add.html)1.9*
  - 把与表达式匹配的元素添加到jQuery对象中。这个函数可以用于连接分别与两个表达式匹配的元素结果集。
- [addBack()](http://jquery.cuishifeng.cn/addBack.html)1.9+
  - 添加堆栈中元素集合到当前集合，一个选择性的过滤选择器。
- [contents()](http://jquery.cuishifeng.cn/contents.html)
  - 查找匹配元素内部所有的子节点（包括文本节点）。如果元素是一个iframe，则查找文档内容
- [end()](http://jquery.cuishifeng.cn/end.html)
  - 回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。

## 事件

### 页面载入

- [ready(fn)](http://jquery.cuishifeng.cn/ready.html)
  - 当DOM载入就绪可以查询及操纵时绑定一个要执行的函数。window.load事件注册事件的替代方法。通过使用这个方法，可以在DOM载入就绪能够读取并操纵时立即调用你所绑定的函数，而99.99%的JavaScript函数都需要在那一刻执行。

### 事件处理

- [on(eve,[sel\],[data],fn)](http://jquery.cuishifeng.cn/on.html)1.7+

  - 在选择元素上绑定一个或多个事件的事件处理函数。on()方法绑定事件处理程序到当前选定的jQuery对象中的元素。

- [off(eve,[sel\],[fn])](http://jquery.cuishifeng.cn/off.html)1.7+

  - 在选择元素上移除一个或多个事件的事件处理函数。off() 方法移除用[.on()](http://api.jquery.com/on)绑定的事件处理程序。

- [one(type,[data],fn)](http://jquery.cuishifeng.cn/one.html)

  - 为每一个匹配元素的特定事件（像click）绑定一个一次性的事件处理函数。

    在每个对象上，这个事件处理函数只会被执行一次。其他规则与bind()函数相同。这个事件处理函数会接收到一个事件对象，可以通过它来阻止（浏览器）默认的行为。如果既想取消默认的行为，又想阻止事件起泡，这个事件处理函数必须返回false。

- [trigger(type,[data])](http://jquery.cuishifeng.cn/trigger.html)

  - 在每一个匹配的元素上触发某类事件。这个函数也会导致浏览器同名的默认行为的执行。比如，如果用trigger()触发一个'submit'，则同样会导致浏览器提交表单。如果要阻止这种默认行为，应返回false。

- [triggerHandler(type, [data])](http://jquery.cuishifeng.cn/triggerHandler.html)

  - 这个特别的方法将会触发指定的事件类型上所有绑定的处理函数。但不会执行浏览器默认动作，也不会产生事件冒泡。

    这个方法的行为表现与trigger类似，但有以下三个主要区别：

    \* 第一，他不会触发浏览器默认事件。

    \* 第二，只触发jQuery对象集合中第一个元素的事件处理函数。

    \* 第三，这个方法的返回的是事件处理函数的返回值，而不是据有可链性的jQuery对象。此外，如果最开始的jQuery对象集合为空，则这个方法返回 undefined 。

### 事件切换

- [hover([over,]out)](http://jquery.cuishifeng.cn/hover.html)

  - 当鼠标移动到一个匹配的元素上面时，会触发指定的第一个函数。当鼠标移出这个元素时，会触发指定的第二个函数。而且，会伴随着对鼠标是否仍然处在特定元素中的检测（例如，处在div中的图像），如果是，则会继续保持“悬停”状态，而不触发移出事件（修正了使用mouseout事件的一个常见错误）

- [toggle([spe\],[eas],[fn])](http://jquery.cuishifeng.cn/toggle.html)1.9*

  - 用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 click 事件。

  - 参数: speed 速度0毫秒,一般有slow,normal,fast

    easing 指定切换效果,默认是"swing",可用参数"linear"

### 事件

- [blur([[data\],fn])](http://jquery.cuishifeng.cn/blur.html)

  - 当元素失去焦点时触发blur事件

- [change([[data\],fn])](http://jquery.cuishifeng.cn/change.html)

  - 当元素值发生改变时

- [click([[data\],fn])](http://jquery.cuishifeng.cn/click.html)

  - 点击

- [dblclick([[data\],fn])](http://jquery.cuishifeng.cn/dblclick_1.html)

  - 双击

- [focus([[data\],fn])](http://jquery.cuishifeng.cn/focus.html)

  - 获得焦点时

- [focusin([data],fn)](http://jquery.cuishifeng.cn/focusin.html)

  - 当元素获得焦点时，触发 focusin 事件。focusin事件跟focus事件区别在于，他可以在父元素上检测子元素获取焦点的情况。

- [focusout([data],fn)](http://jquery.cuishifeng.cn/focusout.html)

  - 当元素失去焦点时触发 focusout 事件。

    focusout事件跟blur事件区别在于，他可以在父元素上检测子元素失去焦点的情况。

- [keydown([[data\],fn])](http://jquery.cuishifeng.cn/keydown.html)

  - 当键盘或按钮被按下时，发生 keydown 事件。

    注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。

- [keypress([[data\],fn])](http://jquery.cuishifeng.cn/keypress.html)

  - 当键盘或按钮被按下时，发生 keypress 事件。

    keypress 事件与 keydown 事件类似。当按钮被按下时，会发生该事件。它发生在当前获得焦点的元素上。 不过，与 keydown 事件不同，每插入一个字符，就会发生 keypress 事件。注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。

- [keyup([[data\],fn])](http://jquery.cuishifeng.cn/keyup.html)

  - 当按钮被松开时，发生 keyup 事件。它发生在当前获得焦点的元素上。

    注释：如果在文档元素上进行设置，则无论元素是否获得焦点，该事件都会发生。

- [mousedown([[data\],fn])](http://jquery.cuishifeng.cn/mousedown.html)

  - 当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。

    mousedown 与 click 事件不同，mousedown 事件仅需要按键被按下，而不需要松开即可发生。

- [mouseenter([[data\],fn])](http://jquery.cuishifeng.cn/mouseenter.html)

  - 当鼠标指针穿过元素时，会发生 mouseenter 事件。该事件大多数时候会与mouseleave 事件一起使用。

    与 mouseover 事件不同，只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。如果鼠标指针穿过任何子元素，同样会触发 mouseover 事件。

- [mouseleave([[data\],fn])](http://jquery.cuishifeng.cn/mouseleave.html)

  - 当鼠标指针离开元素时，会发生 mouseleave 事件。该事件大多数时候会与mouseenter 事件一起使用。

    与 mouseout 事件不同，只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。如果鼠标指针离开任何子元素，同样会触发 mouseout 事件。

- [mousemove([[data\],fn])](http://jquery.cuishifeng.cn/mousemove.html)

  - 当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。

    mousemove事件处理函数会被传递一个变量——事件对象，其.clientX 和 .clientY 属性代表鼠标的坐标

- [mouseout([[data\],fn])](http://jquery.cuishifeng.cn/mouseout.html)

  - 当鼠标指针从元素上移开时，发生 mouseout 事件。该事件大多数时候会与 [mouseover](http://jquery.cuishifeng.cn/mouseover.html) 事件一起使用。

    注释：与 mouseleave 事件不同，不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。请看下面例子的演示。

- [mouseover([[data\],fn])](http://jquery.cuishifeng.cn/mouseover.html)

  - 当鼠标指针位于元素上方时，会发生 mouseover 事件。该事件大多数时候会与 [mouseout](http://jquery.cuishifeng.cn/mouseout.html) 事件一起使用。

    注释：与 mouseenter 事件不同，不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。请看下面例子的演示。

- [mouseup([[data\],fn])](http://jquery.cuishifeng.cn/mouseup.html)

  - 当在元素上放松鼠标按钮时，会发生 mouseup 事件。

    与 click 事件不同，mouseup 事件仅需要放松按钮。当鼠标指针位于元素上方时，放松鼠标按钮就会触发该事件。

- [resize([[data\],fn])](http://jquery.cuishifeng.cn/resize.html)

  - 当调整浏览器窗口的大小时，发生 resize 事件。

- [scroll([[data\],fn])](http://jquery.cuishifeng.cn/scroll.html)

  - 当用户滚动指定的元素时，会发生 scroll 事件。

    scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

- [select([[data\],fn])](http://jquery.cuishifeng.cn/select.html)

  - 当 textarea 或文本类型的 input 元素中的文本被选择时，会发生 select 事件。

    这个函数会调用执行绑定到select事件的所有函数，包括浏览器的默认行为。可以通过在某个绑定的函数中返回false来防止触发浏览器的默认行为。

- [submit([[data\],fn])](http://jquery.cuishifeng.cn/submit.html)

  - 当提交表单时，会发生 submit 事件。该事件只适用于表单元素。

## 效果

### 基本效果

- [show([s,[e\],[fn\]])](http://jquery.cuishifeng.cn/show.html)
  - 显示隐藏的匹配元素
- [hide([s,[e\],[fn\]])](http://jquery.cuishifeng.cn/hide.html)
  - 隐藏显示的元素
- [toggle([s\],[e],[fn])](http://jquery.cuishifeng.cn/toggle.html)
  - 用于绑定两个或多个事件处理器函数,影响被选元素的轮流的click点击事件

### 滑动

- [slideDown([s\],[e],[fn])](http://jquery.cuishifeng.cn/slideDown.html)

  - 通过高度变化(向下增大)来动态的显示所有匹配的元素,在显示完成后可选的触发一个回调函数

- [slideUp([s,[e\],[fn\]])](http://jquery.cuishifeng.cn/slideUp.html)

  - 通过高度变化（向上减小）来动态地隐藏所有匹配的元素，在隐藏完成后可选地触发一个回调函数。

    这个动画效果只调整元素的高度，可以使匹配的元素以“滑动”的方式隐藏起来。在jQuery 1.3中，上下的padding和margin也会有动画，效果更流畅。

- [slideToggle([s\],[e],[fn])](http://jquery.cuishifeng.cn/slideToggle.html)

  - 通过高度变化来切换所有匹配元素的可见性，并在切换完成后可选地触发一个回调函数。

    这个动画效果只调整元素的高度，可以使匹配的元素以“滑动”的方式隐藏或显示。在jQuery 1.3中，上下的padding和margin也会有动画，效果更流畅。

### 淡入淡出

- [fadeIn([s\],[e],[fn])](http://jquery.cuishifeng.cn/fadeIn.html)

  - 通过不透明度的变化来实现所有匹配元素的淡入效果，并在动画完成后可选地触发一个回调函数。

    这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。	

- [fadeOut([s\],[e],[fn])](http://jquery.cuishifeng.cn/fadeOut.html)

- [fadeTo([[s\],o,[e],[fn\]])](http://jquery.cuishifeng.cn/fadeTo.html)

  - 把所有匹配元素的不透明度以渐进方式调整到指定的不透明度，并在动画完成后可选地触发一个回调函数。

    这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

- [fadeToggle([s,[e\],[fn\]])](http://jquery.cuishifeng.cn/fadeToggle.html)

  - 通过不透明度的变化来开关所有匹配元素的淡入和淡出效果，并在动画完成后可选地触发一个回调函数。

    这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

### 自定义动画

- [animate(p,[s\],[e],[fn])](http://jquery.cuishifeng.cn/animate.html)1.8*

  - 创建自定义动画
  - 参数
    - params:一组包含作为动画属性和终止的样式属性以及其值的集合
    - speed:速度,slow/fast/normal,或者毫秒数
    - easing:默认jQuery提供的"swing"和"linear"
    - fn:在动画完成时执行的函数,每个元素执行一次
    - options:动画的额外选项,
      - step- 规定动画每一步完成之后执行的函数
      - queue-布尔值,是否在效果列队放置动画,false为立刻开始

- [stop([c\],[j])](http://jquery.cuishifeng.cn/stop.html)1.7*

  - 停止所有在指定元素上正在运行的动画

- [delay(d,[q])](http://jquery.cuishifeng.cn/delay.html)

  - 设置一个延时来推迟执行队列中之后的项目。

- [finish([queue])](http://jquery.cuishifeng.cn/finish.html)1.9+

  - 停止当前正在运行的动画，删除所有排队的动画，并完成匹配元素所有的动画。

    当.finish()在一个元素上被调用，立即停止当前正在运行的动画和所有排队的动画（如果有的话），并且他们的CSS属性设置为它们的目标值（所有动画的目标值）。所有排队的动画将被删除。

### 设置

- [jQuery.fx.off](http://jquery.cuishifeng.cn/jQuery.fx.off.html)

  - 关闭页面上所有的动画。

    把这个属性设置为true可以立即关闭所有动画(所有效果会立即执行完毕)。有些情况下可能需要这样，比如：

    \* 你在配置比较低的电脑上使用jQuery。

    \* 你的一些用户由于动画效果而遇到了 [可访问性问题](http://www.jdeegan.phlegethon.org/turn_off_animation.html)

    当把这个属性设成false之后，可以重新开启所有动画

## 工具

### 浏览器及特性检测

- [$.browser.version](http://jquery.cuishifeng.cn/jQuery.browser.version.html)
  - 浏览器渲染引擎版本号。

### 数组和对象操作

- [$.each(object,[callback])](http://jquery.cuishifeng.cn/jQuery.each.html)

  - 通用遍历方法，可用于遍历对象和数组。

    不同于遍历 jQuery 对象的 $().each() 方法，此方法可用于遍历任何对象。回调函数拥有两个参数：第一个为对象的成员或数组的索引，第二个为对应变量或内容。如果需要退出 each 循环可使回调函数返回 false，其它返回值将被忽略。

- [$.extend([d\],tgt,obj1,[objN])](http://jquery.cuishifeng.cn/jQuery.extend.html)

  - 用一个或多个其他对象来扩展一个对象，返回被扩展的对象。

    如果不指定target，则给jQuery命名空间本身进行扩展。这有助于插件作者为jQuery增加新方法。 如果第一个参数设置为true，则jQuery返回一个深层次的副本，递归地复制找到的任何对象。否则的话，副本会与原对象共享结构。 未定义的属性将不会被复制，然而从对象的原型继承的属性将会被复制。

- [$.grep(array,fn,[invert])](http://jquery.cuishifeng.cn/jQuery.grep.html)

  - 使用过滤函数过滤数组元素。

    此函数至少传递两个参数：待过滤数组和过滤函数。过滤函数必须返回 true 以保留元素或 false 以删除元素。

- [$.when(deferreds)](http://jquery.cuishifeng.cn/jQuery.when.html)

  - 提供一种方法来执行一个或多个对象的回调函数，延迟对象通常表示异步事件。

    如果单一延迟传递给jQuery.when ，它是通过这个方法和延迟对象附加的其他方法可访问绑定的回调函数返回的，如[defered.then](http://api.jquery.com/deferred.then/) 。当延迟得到解决或者拒绝，通常的代码创建了原来的延迟，适当的回调将被调用。

- [$.makeArray(obj)](http://jquery.cuishifeng.cn/jQuery.makeArray.html)

  - 将类数组对象转换为数组对象。

    类数组对象有 length 属性，其成员索引为 0 至 length - 1。实际中此函数在 jQuery 中将自动使用而无需特意转换。

- [$.map(arr|obj,callback)](http://jquery.cuishifeng.cn/jQuery.map.html)

  - 将一个数组中的元素转换到另一个数组中。

    作为参数的转换函数会为每个数组元素调用，而且会给这个转换函数传递一个表示被转换的元素作为参数。转换函数可以返回转换后的值、null（删除数组中的项目）或一个包含值的数组，并扩展至原始数组中。

- [$.inArray(val,arr,[from])](http://jquery.cuishifeng.cn/jQuery.inArray.html)

  - 确定第一个参数在数组中的位置，从0开始计数(如果没有找到则返回 -1 )。

- [$.toArray()](http://jquery.cuishifeng.cn/jQuery.toArray.html)

  - 把jQuery集合中所有DOM元素恢复成一个数组。

- [$.merge(first,second)](http://jquery.cuishifeng.cn/jQuery.merge.html)

  - 合并两个数组

    返回的结果会修改第一个数组的内容——第一个数组的元素后面跟着第二个数组的元素。要去除重复项，请使用$.unique()

- [$.uniqueSort(array)](http://jquery.cuishifeng.cn/jQuery.uniqueSort.html)3.0+

  - $.uniqueSort()函数通过搜索的数组对象，排序数组，并移除任何重复的节点。 如果一个节点和已经在数组中的节点完全相同，那么它被认为是重复的; 两个不同的节点具有相同的属性是被认为不重复的。 此功能只适用于普通的JavaScript DOM元素的数组，主要是jQuery内部使用。你可能永远都不需要使用它。

- [$.parseXML(data)](http://jquery.cuishifeng.cn/jQuery.parseXML.html)

  - 解析一个字符串到一个XML文件。

    jQuery.parseXML使用原生解析函数浏览器创建一个有效的XML文档。这文档可以被传递给jQuery创建一个典型的jQuery对象，可以查询及操作。

### 函数操作

- [$.noop](http://jquery.cuishifeng.cn/jQuery.noop.html)

  - 一个空函数

    当你仅仅想要传递一个空函数的时候，就用他吧。这对一些插件作者很有用，当插件提供了一个可选的回调函数接口，那么如果调用的时候没有传递这个回调函数，就用jQuery.noop来代替执行。

- [$.proxy(function,context)](http://jquery.cuishifeng.cn/jQuery.proxy.html)

  - 返回一个新函数，并且这个函数始终保持了特定的作用域。

    当有事件处理函数要附加到元素上，但他们的作用域实际是指向另一个对象时，这个方法最有用了。此外，最妙的是，jQuery能够确保即便你绑定的函数是经过jQuery.proxy()处理过的函数，你依然可以传递原先的函数来准确无误地取消绑定。

  - 这个函数还有另一种用法，jQuery.proxy( scope, name )。第一个参数是要设定的作用域对象。第二个参数是将要设置作用域的函数名（必须是第一个作用域对象的一个属性）。

### 测试操作

- [$.contains(c,c)](http://jquery.cuishifeng.cn/jQuery.contains.html)

  - 一个DOM节点是否包含另一个DOM节点。
  - container , contained

- [$.type(obj)](http://jquery.cuishifeng.cn/jQuery.type.html)

  - 检测obj的数据类型。

- [$.isEmptyObject(obj)](http://jquery.cuishifeng.cn/jQuery.isEmptyObject.html)

  - 测试对象是否是空对象（不包含任何属性）。

- [$.isPlainObject(obj)](http://jquery.cuishifeng.cn/jQuery.isPlainObject.html)

  - 测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）。

- [$.isNumeric(value)](http://jquery.cuishifeng.cn/jQuery.isNumeric.html)1.7+

  - 确定它的参数是否是一个数字。

    $.isNumeric() 方法检查它的参数是否代表一个数值。如果是这样，它返回 true。否则，它返回false。该参数可以是任何类型的

### 字符串操作

- [$.trim(str)](http://jquery.cuishifeng.cn/jQuery.trim.html)
  - 去掉字符串起始和结尾的空格。

### URL

- [$.param(obj,[traditional])](http://jquery.cuishifeng.cn/jQuery.param.html)
  - 将表单元素数组或者对象序列化。是.serialize()的核心方法。

### 插件编写

- [$.error(message)](http://jquery.cuishifeng.cn/jQuery.error.html)

  - 接受一个字符串，并且直接抛出一个包含这个字符串的异常。

    这个方法的主要目的是提供给插件开发人员，让他们可以重载这个方法，并以更好的方式显示错误，或者提供更多信息。

- [$.fn.jquery](http://jquery.cuishifeng.cn/jquery.html)

  - 代表 jQuery 版本号的字符串。

    .jquery 属性是通过 jQuery 原型赋值的，通过使用它的别名 $.fn 进行引用。它是一个含有 jQuery 版本号的字符串，例如 "1.5.0" 或 "1.4.4".

## 事件对象

- [eve.currentTarget](http://jquery.cuishifeng.cn/event.currentTarget.html)

  - 在事件冒泡阶段中的当前DOM元素

- [eve.data](http://jquery.cuishifeng.cn/event.data.html)

  - 当前执行的处理器被绑定的时候，包含可选的数据传递给jQuery.fn.bind。

- [eve.delegateTarget](http://jquery.cuishifeng.cn/event.delegateTarget.html)1.7+

  - 当currently-called的jQuery事件处理程序附加元素。

    此属性是最经常有用是通过过[.delegate()](http://jquery.cuishifeng.cn/delegate.html) 或[.on()](http://jquery.cuishifeng.cn/on.html)附加委派的事件，事件处理程序附加在正在处理的元素的祖先上。

- [eve.isDefaultPrevented()](http://jquery.cuishifeng.cn/event.isDefaultPrevented.html)

  - 根据事件对象中是否调用过 event.preventDefault() 方法来返回一个布尔值。

- [eve.isImmediatePropagationStopped()](http://jquery.cuishifeng.cn/event.isImmediatePropagationStopped.html)

  - 根据事件对象中是否调用过 event.stopImmediatePropagation() 方法来返回一个布尔值。

- [eve.isPropagationStopped()](http://jquery.cuishifeng.cn/event.isPropagationStopped.html)

  - 根据事件对象中是否调用过 event.stopPropagation() 方法来返回一个布尔值。

- [eve.namespace](http://jquery.cuishifeng.cn/event.namespace.html)

  - 当事件被触发时此属性包含指定的命名空间。

- [eve.pageX](http://jquery.cuishifeng.cn/event.pageX.html)

  - 鼠标相对于文档的左边缘的位置。

- [eve.pageY](http://jquery.cuishifeng.cn/event.pageY.html)

  - 鼠标相对于文档的顶部边缘的位置。

- [eve.preventDefault()](http://jquery.cuishifeng.cn/event.preventDefault.html)

  - 阻止默认事件行为的触发。

    例如，在执行这个方法后，如果点击一个锚点，就不会让浏览器跳转到新的 URL 去了。我们可以用 event.isDefaultPrevented() 来确定这个方法是否(在那个事件对象上)调用过了。

- [eve.relatedTarget](http://jquery.cuishifeng.cn/event.relatedTarget.html)

  - 在事件中涉及的其它任何DOM元素。

    对于 mouseout 事件，它指向被进入的元素；对于 mousein 事件，它指向被离开的元素。

- [eve.result](http://jquery.cuishifeng.cn/event.result.html)

  - 这个属性包含了当前事件事件最后触发的那个处理函数的返回值，除非值是 undefined 。

- [eve.stopImmediatePropagation()](http://jquery.cuishifeng.cn/event.stopImmediatePropagation.html)

  - 阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上。

    除了阻止元素上其它的事件处理函数的执行，这个方法还会通过在内部调用 event.stopPropagation() 来停止事件冒泡。如果仅仅想要停止事件冒泡到前辈元素上，而让这个元素上的其它事件处理函数继续执行，我们可以使用[event.stopPropagation()](http://jquery.cuishifeng.cn/event.stopPropagation.html) 来代替。

    使用 [event.isImmediatePropagationStopped()](http://jquery.cuishifeng.cn/event.stopPropagation.html) 来确定这个方法是否(在那个事件对象上)调用过了。

    注意:自从[.live()](http://api.jquery.com/live)方法处理事件一旦传播到文档的顶部，live事件是不可能停止传播的。同样地，[.delegate()](http://api.jquery.com/delegate) 事件将始终传播给其中包含的被委托元素；元素上的事件将在被委托事件被调用的时候执行。

- [eve.stopPropagation()](http://jquery.cuishifeng.cn/event.stopPropagation.html)

  - 防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数。

    我们可以用 [event.isPropagationStopped()](http://jquery.cuishifeng.cn/event.isPropagationStopped.html) 来确定这个方法是否(在那个事件对象上)调用过了。

    这个方法对 [trigger()](http://jquery.cuishifeng.cn/trigger.html) 来自定义的事件同样有效。

    注意，这不会阻止*同一个元素上*的其它事件处理函数的运行。

    额外说明：

    自从[.live()](http://jquery.cuishifeng.cn/live.html)方法处理事件一旦传播到文档的顶部，live事件是不可能停止传播的。同样地，[.delegate()](http://jquery.cuishifeng.cn/delegate.html) 事件将始终传播给其中包含的被委托元素；元素上的事件将在被委托事件被调用的时候执行。

- [eve.target](http://jquery.cuishifeng.cn/event.target.html)

  - 最初触发事件的DOM元素。

    这是注册事件时的对象，或者它的子元素。通常用于比较 event.target 和 this 来确定事件是不是由于冒泡而触发的。经常用于事件冒泡时处理事件委托。

- [eve.timeStamp](http://jquery.cuishifeng.cn/event.timeStamp.html)

  - 这个属性返回事件触发时距离1970年1月1日的毫秒数。

    这可以很方便的检测某个jQuery函数的性能。

- [eve.type](http://jquery.cuishifeng.cn/event.type.html)

  - 点击所有锚点后弹出事件类型。

- [eve.which](http://jquery.cuishifeng.cn/event.which.html)

  - 针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键或按钮。

    event.which 将 event.keyCode 和 event.charCode 标准化了。推荐用 event.which 来监视键盘输入。更多细节请参阅： [event.charCode on the MDC](https://developer.mozilla.org/en/DOM/event.charCode#Notes).

## 延迟对象

- [def.done(d,[d])](http://jquery.cuishifeng.cn/deferred.done.html)

  - 当延迟成功时调用一个函数或者数组函数.

    该参数可以是一个函数或一个函数的数组。当延迟成功时，doneCallbacks被调用。回调执行是依照他们添加的顺序。一旦deferred.done()返回延迟对象，延迟对象的其它方法也可以链接到了这里，包括增加.done()方法。当延迟解决，doneCallbacks执行使用参数提供给[resolve](http://jquery.cuishifeng.cn/deferred.reject.html)或[resolveWith](http://jquery.cuishifeng.cn/deferred.rejectWith.html)方法依照添加的顺序调用。

- [def.fail(failCallbacks)](http://jquery.cuishifeng.cn/deferred.fail.html)

  - 当延迟失败时调用一个函数或者数组函数.。

- [def.reject(args)](http://jquery.cuishifeng.cn/deferred.reject.html)

  - 拒绝延迟对象，并根据给定的参数调用任何失败的回调函数。
  - 当延迟被拒绝，任何failCallbacks添加的[deferred.then](http://jquery.cuishifeng.cn/deferred.then.html)或[deferred.fail](http://jquery.cuishifeng.cn/deferred.fail.html)被调用。回调按他们添加的顺序执行。每个回调传递的args在deferred.reject()中调用。之后添加任何failCallbacks递延被拒绝进入状态时，立即执行添加，使用的参数被传递给.reject()调用。有关详细信息，请参阅文件[Deferred object](http://api.jquery.com/category/deferred-object/) 。

- [def.rejectWith(c,[a])](http://jquery.cuishifeng.cn/deferred.rejectWith.html)

  - 拒绝延迟的对象，并根据给定的上下文和参数调用任何失败的回调函数。
  - 当延迟被拒绝，任何doneCallbacks添加的[deferred.then](http://jquery.cuishifeng.cn/deferred.then.html)或[deferred.fail](http://jquery.cuishifeng.cn/deferred.fail.html)被调用。回调按他们添加的顺序执行。每个回调传递的args在deferred.reject()中调用。之后添加任何failCallbacks递延被拒绝进入状态时，立即执行添加，使用的参数被传递给.reject()调用。有关详细信息，请参阅文件[Deferred object](http://api.jquery.com/category/deferred-object/) 。

- [def.resolve(args)](http://jquery.cuishifeng.cn/deferred.resolve.html)

  - 解决递延对象，并根据给定的参数调用任何完成的回调函数。

- [def.resolveWith(c,[a])](http://jquery.cuishifeng.cn/deferred.resolveWith.html)

  - 解决递延对象，并根据给定的上下文和参数调用任何完成的回调函数。

- [def.promise([ty\],[ta])](http://jquery.cuishifeng.cn/deferred.promise.html)

  - 返回一个 Promise 对象用来观察当某种类型的所有行动绑定到集合，排队与否还是已经完成。

    .promise()方法返回一个动态生成的Promise对象用来观察当某种类型的所有行动绑定到集合，排队与否还是已经完成。

    默认情况下， type是"fx" ，这意味着当选定的元素已完成所有动画是返回的Promise是解决的。

    解决上下文和唯一的参数是哪个集合到.promise()被调用。

    如果target是提供，.promise()将附加到它的方法，然后返回这个对象，而不是创建一个新的。这对在已经存在的对象上附加Promise的行为非常有用。

- [def.always(al,[al])](http://jquery.cuishifeng.cn/deferred.always.html)

  - 筛选器和/或链Deferreds的实用程序方法。

    deferred.pipe()方法返回一个新的promise，该过滤器通过一个函数有关的递延状态和价值。该doneFilter和failFilter原递延过滤功能的解决/拒绝的状态和价值。这些过滤器函数可以返回一个新的值被传递给管道承诺的done()或fail()的回调，或者他们可以返回另一个观察对象（推迟，承诺等），将通过它的解决/拒绝状态和价值，以保证管道的回调。如果使用的是过滤功能null ，或不指定，则管道的承诺将得到解决或原驳回值具有相同。

    注意：从 jQuery 1.8 开始，deferred.pipe() 方法过时. 应该使用deferred.then() 代替它。

- [def.notify(args)](http://jquery.cuishifeng.cn/deferred.notify.html)1.7+

  - 当递延对象是解决或拒绝时被调用添加处理程序。
  - 参数:
    - alwaysCallbacks:一个函数，或者函数数组，当递延对象是解决或拒绝时被调用。
    - alwaysCallbacks:附加可选的一个函数，或者函数数组，当递延对象是解决或拒绝时被调用。

- [def.notifyWith(c,[a])](http://jquery.cuishifeng.cn/deferred.notifyWith.html)1.7+

  - 去掉字符串起始和结尾的空格。

    当deferred.notifyWith，任何doneCallbacks 添加的progressCallbacks，[deferred.then](http://jquery.cuishifeng.cn/deferred.then.html)或[deferred.fail](http://jquery.cuishifeng.cn/deferred.fail.html)被调用。回调按他们添加的顺序执行。每个回调传递的args在deferred.reject()中调用。notifyWith()延迟后解决或拒绝(或添加任何progressCallbacks后）被忽略。

- [def.progress(proCal)](http://jquery.cuishifeng.cn/deferred.progress.html)1.7+

  - 当Deferred对象时生成进度通知时添加被访问处理程序。

    这个参数可以是一个单一的功能或功能的阵列。当递延通过调用生成的进度通知notify或notifyWith，progressCallbacks 被访问。后来deferred.progress()返回Deferred对象。Deferred对象有方法可以链接到这一个。当递延解决或拒绝，进展回调将不再被调用。

- [def.state()](http://jquery.cuishifeng.cn/deferred.state.html)1.7+

  - 确定一个Deferred对象的当前状态。

    deferred.state（）方法返回一个字符串，代表Deferred对象的当前状态。 Deferred对象可以在三种状态之一：

    - **pending**: Deferred对象是尚未完成状态 (不是 "rejected" 或 "resolved").
    - **resolved**:  Deferred对象是在解决状态，这意味着，[deferred.resolve()](http://api.jquery.com/deferred.resolve/) 或者 [deferred.resolveWith()](http://api.jquery.com/deferred.resolveWith/)被对象访问和doneCallbacks被访问（或在被调用的过程中） 。
    - **rejected**: Deferred对象是在被拒绝的状态，这意味着，[deferred.reject()](http://api.jquery.com/deferred.reject/) 或者 [deferred.rejectWith()](http://api.jquery.com/deferred.rejectWith/) 被对象访问和failCallbacks被访问（或在被调用的过程中） 。

    这种方法主要是有用的调试，以确定的，例如，递延是否已经得到解决，即使你打算拒绝它的内部代码。

## 回调函数

- [cal.add(callbacks)](http://jquery.cuishifeng.cn/callbacks.add.html)1.7+

  - 回调列表中添加一个回调或回调的集合。

- [cal.disable()](http://jquery.cuishifeng.cn/callbacks.disable.html)1.7+

  - 禁用回调列表中的回调

- [cal.empty()](http://jquery.cuishifeng.cn/callbacks.empty.html)1.7+

  - 从列表中删除所有的回调.

- [cal.fire(arguments)](http://jquery.cuishifeng.cn/callbacks.fire.html)1.7+

  - 禁用回调列表中的回调

- [cal.fired()](http://jquery.cuishifeng.cn/callbacks.fired.html)1.7+

  - 用给定的参数调用所有的回调。

- [cal.fireWith([c\] [,a])](http://jquery.cuishifeng.cn/callbacks.fireWith.html)1.7+

  - 访问给定的上下文和参数列表中的所有回调

- [cal.has(callback)](http://jquery.cuishifeng.cn/callbacks.has.html)1.7+

  - 确定是否提供的回调列表

- [cal.lock()](http://jquery.cuishifeng.cn/callbacks.lock.html)1.7+

  - 锁定在其当前状态的回调列表。

- [cal.locked()](http://jquery.cuishifeng.cn/callbacks.locked.html)1.7+

  - 确定是否已被锁定的回调列表。

- [cal.remove(callbacks)](http://jquery.cuishifeng.cn/callbacks.remove.html)1.7+

  - 删除回调或回调回调列表的集合。

- [$.callbacks(flags)](http://jquery.cuishifeng.cn/jQuery.callbacks.html)1.7+

  - 一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。

    $.Callbacks()的内部提供了jQuery的$.ajax() 和 $.Deferred() 基本功能组件。它可以用来作为类似基础定义的新组件的功能。

    $.Callbacks() 支持的方法，包括 [callbacks.add()](http://www.css88.com/callbacks.add/),[callbacks.remove()](http://www.css88.com/callbacks.remove/), [callbacks.fire()](http://www.css88.com/callbacks.fire/) and [callbacks.disable()](http://www.css88.com/callbacks.disable/).

    

## 其他

### 正则

[正则表](http://jquery.cuishifeng.cn/regexp.html)

### HTML5速查表

[速查表](http://jquery.cuishifeng.cn/html5.html)

