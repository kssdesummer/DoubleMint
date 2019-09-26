# `html`标签  
标签|效果
-|-
`<marquee>...</marquee>`|普通卷动
`<marquee behavior=slide>...</marquee>`|滑动
`<marquee behavior=scroll>...</marquee>`|预设卷动
`<marquee behavior=alternate>...</marquee>`|来回卷动
`<marquee direction=down>...</marquee>`|向下卷动
`<marquee direction=up>...</marquee>`|向上卷动
`<marquee direction=right></marquee>`|向右卷动
`<marquee direction=’left’></marquee>`|向左卷动
`<marquee loop=2>...</marquee>`|卷动次数
`<marquee width=180>...</marquee>`|设定宽度
`<marquee height=30>...</marquee>`|设定高度
`<marquee bgcolor=FF0000>...</marquee>`|设定背景颜色
`<marquee scrollamount=30>...</marquee>`|设定滚动速度
`<marquee scrolldelay=300>...</marquee>`|设定卷动时间
`<marquee οnmοuseοver="this.stop()">...</marquee>`|鼠标经过上面时停止滚动
`<marquee οnmοuseοver="this.start()">...</marquee>`|鼠标离开时开始滚动
-|-
`<h1>`...`</h1>`|标题字(最大)
`<h6>`...`</h6>`|标题字(最小)
`<b>`...`</b>`|粗体字
`<strong>`...`</strong>`|粗体字(强调) （同上效果略同）
`<i>`...`</i>`|斜体字
`<em>`...`</em>`|斜体字(强调)
`<dfn>`...`</dfn>`|斜体字(表示定义)
`<u>`...`</u>`|底线
`<ins>`...`</ins>`|底线(表示插入文字)
`<strike>`...`</strike>`|横线
`<s>`...`</s>`|删除线
`<del>`...`</del>`|删除线(表示删除)
`<kbd>`...`</kbd>`|键盘文字
`<tt>`...`</tt>`|打字体
`<xmp>`...`</xmp>`|固定宽度字体(在文件中空白、换行、定位功能有效)
`<plaintext>`...`</plaintext>`|固定宽度字体(不执行标记符号)
`<listing>`...`</listing>`|固定宽度小字体
`<hr size=’9’>`|水平线(设定大小)
`<hr width=’80%’>`|水平线(设定宽度)
`<hr color=’ff0000’>`|水平线(设定颜色)
`<br>`|(换行)
`<nobr>`...`</nobr>`|水域(不换行)
`<p>`...`</p>`|水域(段落)
`<center>`...`</center>`|置中
-|-
`<base href=位址>`|(预设好连结路径)
`<a href=位址>``</a>`|外部连结
`<a href=位址 target=’_blank’>``</a>`|外部连结(另开新视窗)
`<a href=位址 target=’_top’>``</a>`|外部连结(全视窗连结)
`<a href=位址 target=’页框名’>``</a>`|外部连结(在指定页框连结)
-|-
`<img src=图片位址>`|贴图
`<img src=图片位址 width=’180’>`|设定图片宽度
`<img src=图片位址 height=’30’>`|设定图片高度
`<img src=图片位址 alt=’提示文字’>`|设定图片提示文字
`<img src=图片位址’ border=’1’>`|设定图片边框
`<bgsound src=MID音乐档位址>`|背景音乐设定
-|-
`<table aling=left>`...`</table>`|表格位置,置左
`<table aling=center>`...`</table>`|表格位置,置中
`<table background=图片路径>`...`</table>`|背景图片的URL=就是路径网址
`<table border=边框大小>`...`</table>`|设定表格边框大小(使用数字)
`<table bgcolor=颜色码>`...`</table>`|设定表格的背景颜色
`<table borderclor=颜色码>`...`</table>`|设定表格边框的颜色
`<table borderclordark=颜色码>`...`</table>`|设定表格暗边框的颜色
`<table borderclorlight=颜色码>`...`</table>`|设定表格亮边框的颜色
`<table cellpadding=参数>`...`</table>`|指定内容与格线之间的间距(使用数字)
`<table cellspacing=参数>`...`</table>`|指定格线与格线之间的距离(使用数字)
`<table cols=参数>`...`</table>`|指定表格的栏数
`<table frame=参数>`...`</table>`|设定表格外框线的显示方式
`<table width=宽度>`...`</table>`|指定表格的宽度大小(使用数字)
`<table height=高度>`...`</table>`|指定表格的高度大小(使用数字)
`<td colspan=参数>`...`</td>`|指定储存格合并栏的栏数(使用数字)
`<td rowspan=参数>`...`</td>`|指定储存格合并列的列数(使用数字)

分割视窗
标签|效果
-|-
`<frameset cols="20%,\*">`|左右分割,将左边框架分割大小为20%右边框架的大小浏览器会自动调整
`<frameset rows="20%,\*">`|上下分割,将上面框架分割大小为20%下面框架的大小浏览器会自动调整
`<frameset cols="20%,\*">`|分割左右两个框架
`<frameset cols="20%,\*,20%">`|分割左中右三个框架

分割上下两个框架
标签|效果
-|-
`<frameset rows="20%,\*,20%">`|分割上中下三个框架,属性：cols 垂直切割窗口（如左右分割两个窗口）接受整数值，百分数，\*（\*代表占用余下空间）数值的个数代表分成的部分数目，要以逗号分隔。
`frameborder` |设置框架的边框，其值有0不要边框，1要边框。
`border` |设置框架边框厚度
`framespacing` |表示框架与框架间保留空白的距离
`frame` |元素（单标签）
语法格式：
`<frame name="" src="url" scrolling="yes/no" noresize>`
属性：

名称|功能
-|-
`name` |框架名称，指定框架来做连接的目标窗口。
`src` |框架中要显示的网页文当url地址，每个个框架要对应一个html文挡。
`scrolling` |是否显示滚动条，yes/no,auto是自动。
`noresize`| 设置不让使用者改变这个框架的大小，
`noframe`|元素,指定当使用了框架的页面在不支持框架的浏览器中打开时显示的信息,语法格式：  `<noframe>  ......</noframe>`
表单|`<form></form>`,语法格式：`<form action="url" method="get/post"> ...<input type=submit><input type=reset></form>`
`method`|有两种提交方式get,post
`action` |是指明处理该表单的程序位置，这样表单所填的资料才能传给cgi做处里，可设定此参数为action="mailto:lwr8494@163.com" 这样此表单所填的资料将会发送到这个邮箱地址。
`method`| 是指传送信息给cgi等网络程序的方式。可选post方法，get方法，post方法容许传送大量信息。get方法只接受低于1k的信息。申请表单用的是post搜索引擎用的是get

注解
标签|效果
-|-
`<A HREF TARGET>`| 指定超连结的分割视窗
`<A HREF=#锚的名称>` |指定锚名称的超连结
`<A HREF>` |指定超连结
