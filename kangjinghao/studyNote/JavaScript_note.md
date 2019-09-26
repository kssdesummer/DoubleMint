# JavaScript部分

## 变量的作用域

* 全局变量

  在函数外部声明，或者声明使不用var声明，若已有相关变量则覆盖

* 局部变量

  在函数内声明，用var声明

* 部分函数
  1. `typeof` 打印类型
  
  2. `alert` 设置弹窗
  
  3. `window.onload = 函数名;`	//在网页加载完调用函数
  
  4. `window.open(url,name,features)` ：创建新窗口，features是窗口属性,使用伪协议
  
     ```javascript
     js:
     function popUp(winurl){
     	window.open(winURL,"popUp","width=320,height=480")
     } //定义一个打开320*480的新窗口popUp'
     html:
     <a herf="www.baidu.com" onclick="popUp(this.href);return false;">baidu</a>
     ```
  
     



## DOM(文档对象模型)

​	通过HTML DOM，JavaScript能访问和改变`html`文档的所有内容

​	当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）

​	HTML DOM:时关于如何获取、更改、添加、删除HTML元素的标准

### D(Document)文档：

​	创建一个网页加载到web浏览器时，DOM把编写的网页文档转为一个文档对象

### O(Object)对象：

- 定义：对象是自包含的数据集合，对象是由一些属性和方法组合在一起的数据实体

  - 属性：属于对象的变量
  - 方法：对象才能调用的函数

- 用户定义对象：创建一个实例化对象的关键字是 ：`new`

- 内建对象：系统环境自带的对象能直接使用，例如：

  - Math:数学公式,`Math.round` 四舍五入
  - Array：数组，`[].length` 数组长度;[].map(function(item)){return item+10} 将元素计算；[].filter(function(item)){if(item%2==1){return true;}筛选;
  - `Date` ：日期，用`getDate()/getMonth()/getFullYear()`... 取值
  - `Object.keys()` 键的列表；`Object..values()` 值的列表

- 宿主对象：除了环境自带的对象之外预先定义好的其他对象，这些对象由它运行环境提供

  宿主对象包括：Form表单、Image图像和Element表单元素，document可以用来获取网页上的任何一个元素的信息等。

  

### M(model)模型：

​	HTML DOM 模型被结构化为对象树(节点树)：

![](/home/k/图片/对象的HTML DOM树 .png)

### 节点：

​	节点表示网络中的一个连接点，一个网络就是有一些节点构成的集合。

​	元素节点->文本节点->属性节点

​	CSS(层叠样式表)：与JavaScript的声明方式很类似

​	

## 获取元素

1. `getElementById(id)` :参数是id选择器的名字

   ​	返回值是一个对象，对应文档里的一个特定的元素节点

2. `getElementsByTagName("li")` :参数是标签名

   ​	返回值是一个数组，对应文档里的一组特定的元素节点

3. `getElementsByClassName("")` :参数是class属性类名

   ​	返回值是一个数组，对应文档里的一组特定的元素节点

4. 一次性选择所有,遍历 in 拿到下标,of拿到值

   `document.querySelectAll`

   `document.querySelect`

## 获取和设置属性

1. `object.getAttribute()` ：参数是查询的属性名，用来获取属性下的内容，常与`getElementsByTagName` 合用，例如获取每行的title的内容：

   ```javascript
   var paras = document.getElementsByTagName("li");	//获取元素li的数组
   for (var i = 0; i < paras.length; i++) {
   	var content = paras[i].getAttribute("title");	//获取li的title属性
   	var u = i+1
   	if (content){
   		alert("第"+u+"行："+content);	//打印title的内容
   	}
   }
   ```

   打印出每个`li`标签里面的`title`的内容

2. `object.setAttribute`:参数是属性名，用来修改属性内容的，例如将`ul`的title设置为`unorder list`:

   ```javascript
   var ulcon = document.getElementById("unorder");		//获取id 属性为unorder的标签
   ulcon.setAttribute("title","unorder list");		//修改该标签的title的属性值
   var content = ulcon.getAttribute("title");		//查看title里的内容是否被更改
   alert(content);
   ```

## 事件处理函数

1. `onmouseover`鼠标悬停在某个元素时触发动作

2. `onmouseout`鼠标离开时触发

3. `onclick`鼠标点击时触发

   例如：点击事件，调用函数，默认设置为链接无效，各个部分以分号隔开

   ​	```onclick="showPic(this);return false;"```

## 属性函数扩展

1. `childNodes` 属性

   可以用来获取任何一个元素的所有子元素，得到全部子元素的数组

   ```javascript
   // 获取body的数组，有一个取出来，然后用childNodes取body的子元素
   function count_son(){
   	var body_element = document.getElementsByTagName("body")[0];
   	var num = body_element.childNodes.length
   	alert("网页共有子元素："+num)
   }
   window.onload = count_son;	//在网页加载完调用函数
   ```

2. `nodeType` 属性：获取当前的元素节点数

3. `nodeValue`属性：文本节点的值

4. `firstChild和lastChild`属性：第一个和最后一个子元素

## 定时器

1. 执行一次(延时定时器)

```javascript
var t1 = window.setTimeout(function() {
console.log('1秒钟之后执行了')
},1000)
window.clearTimeout(t1)  // 去除定时器
```

2. 重复执行(间歇定时器)

```javascript
var t2 = window.setInterval(function() {
console.log('每隔1秒钟执行一次')
},1000)
window.clearInterval(t2)  // 去除定时器
```







































### 内建对象的详细介绍：

```javascript
js的内建对象
    (1) Number对象
        创建方式：
            var myNum = new Number(value);  // 传入参数，强转成数字类型的数据
            var myNum = Number(value);  // 简写方式
                布尔类型转数字类型     true转成1    false转成0
                字符串类型转数字类型   不能强转
        属性和方法：
            toString() 把数字转成字符串
            valueOf() 返回一个 Number 对象的基本数字值
        示例：
            var num = new Number(5); // 装箱
            alert(typeof num); // object 
            alert(typeof num.toString()); // string 
            alert(typeof num.valueOf());  // number 拆箱
--------------------------------------
    (2) Boolean对象
        创建方式：
            var bool = new Boolean(value); // 传入参数，强转成布尔类型的数据     
            var bool = Boolean(value); // 简写方式
                数字类型强转成布尔类型时　　　　　非零就是true            零就是false
                字符串类型强转成布尔类型时　　　　非空字符串就是true       空字符串("")就是false
        属性和方法：
            toString() 把布尔转成字符串(即把逻辑值转换为字符串，并返回结果)
            valueOf() 返回一个 Boolean 对象的基本值(是boolean类型的)
        示例：
            var bool = new Boolean(5); // 装箱
            alert(typeof bool); // object 
            alert(typeof bool.toString()); // string 
            alert(typeof bool.valueOf());  // boolean 拆箱
--------------------------------------            
    (3) String对象
        创建方式：
            var str = new String(s);
            var str = String(s);
                注意：var str = "helllo"; 
                // 在js中此时的str不是对象，是一个伪对象，可以理解为包装类对象，也可以调用方法，但是在js中其本质不是对象哦！
                // 而在java中，此时的str是一个对象。
        属性和方法：
            length 字符串的长度属性
            
            charAt() 返回索引的字符
            charCodeAt() 返回索引字符的unicode
            indexOf() 返回字符的索引
            lastIndexOf() 逆向返回字符的索引
            split() 将字符串按照特殊字符切割成数组
            substr() 从起始索引号提取字符串中指定数目的字符(注意：第二个s不是大写，不是驼峰式的写法哦)
            substring() 提取字符串中两个指定的索引号之间的字符(包头不包尾)
            toUpperCase() 转大写
        示例：
            // var str = new String("a-b-cdc-FG");
            var str = "a-b-cdc-FG"; // 伪对象
            alert(str.length); // 10
            alert(str.charAt(4)); // c
            alert(str.charCodeAt(4)); // 99
            alert(str.indexOf("c")); // 4
            alert(str.lastIndexOf("c")); // 6
            var arr = str.split("-");
            for (var i = 0; i < arr.length; i++) {
                alert(arr[i]);
            }
            alert(str.substr(2, 3)); // b-c
            alert(str.substring(2, 3)); // b (包头不包尾)
            alert(str.toUpperCase()); // A-B-CDC-FG
            
            
            
            W3School离线手册(2014.3.24)
--------------------------------------
    (4) Array对象
        创建方式：
            var arr = new Array(); // 创建一个空数组
            var arr = new Array(size); // 创建一个指定长度的数据(超出长度还能加元素)
            var arr = new Array(element0, element1, ..., elementn); // 创建数组并直接实例化元素
            var arr = []; // 创建一个空数组
            var arr = [1, 2, 5, "java"]; // 创建数组并直接实例化元素
        属性和方法：
            length 数组的长度属性
            
            join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔
            pop() 删除并返回数组的最后一个元素
            push() 向数组的末尾添加一个或更多元素，并返回新的长度
            reverse() 反转数组
            sort() 对数组的元素进行排序(按照字符串字典顺序进行排序)
　　　　 示例：
            var arr = [ 3, 7, 1, "java", 'js', true, 4 ];
            alert(arr.length); // 7
            alert(arr.join("-")); // 3-7-1-java-js-true-4
            alert(arr.pop()); // 4
            alert(arr); // 3,7,1,"java",'js',true
            alert(arr.push("R")); // 8
            alert(arr); // 3,7,1,"java",'js',true,R
            alert(arr.reverse()); // 4,true,js,java,1,7,3    数组反转
            alert(arr.sort()); // 1,3,4,7,java,js,true    按照字符串字典顺序进行排序
--------------------------------------
    (5) Date对象
        创建方式：    
            var myDate = new Date();
            var myDate = new Date(毫秒值); // 代表从1970-1-1到现在的一个毫秒值
        属性和方法：
            getFullYear() 年
            getMonth() 月 0-11
            getDate() 日 1-31
            getDay() 星期 0-6（星期日是0）
            getTime() 返回1970年1月1日午夜到指定日期（字符串）的毫秒数
            toLocalString() 根据本地时间格式，把 Date 对象转换为字符串
        示例：
            var date = new Date();
            alert(date.toString()); // Mon Apr 23 2018 09:38:13 GMT+0800 (中国标准时间)
            alert(date.toLocaleString()); // 2018/4/23 上午9:38:13
            alert("year:" + date.getFullYear()); // 2018
            alert("month:" + date.getMonth()); // 3
            alert("date:" + date.getDate()); // 23
            alert("day:" + date.getDay()); // 1
            var time1 = date.getTime();
            var time2 = 3 * 24 * 60 * 60 * 1000;
            alert(new Date(time1 + time2).toLocaleString()); // 2018/4/26 上午9:38:13
--------------------------------------
    (6) Math对象
        创建方式：    
            Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。
            您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。(相当于java中的静态成员变量和静态成员方法)
        属性和方法：
            PI 圆周率
            
            abs() 绝对值
            ceil() 对数进行向上舍入
            floor() 对数进行向下舍入
            pow(x, y) 返回 x 的 y 次幂
            random() 0-1之间的随机数[0.1)
            round() 四舍五入
        示例：
            var x = "-897";
            alert(Math.abs(x)); // 897
            var x = 12.34;
            var y = 2;
            var z = 4;
            alert(Math.ceil(x)); // 13
            alert(Math.floor(x)); // 12
            alert(Math.round(x)); // 12
            alert(Math.pow(y, z)); // 16
            alert(Math.random()); // 0-1之间的随机数[0.1)        
--------------------------------------
    (7 )RegExp对象
        创建方式：    
            var reg = new RegExp(pattern);
            var reg = /^正则规则$/;
        规则的写法：
            方括号用于查找某个范围内的字符：
                [0-9]    查找任何从 0 至 9 的数字 
                [A-Z]    查找任何从大写 A 到大写 Z 的字符
                [a-z]    查找任何从小写 a 到小写 z 的字符
                [A-z]    查找任何从大写 A 到小写 z 的字符
                [abc]    查找方括号之间的任何字符
                [^abc]   查找任何不在方括号之间的字符
            
            元字符（Metacharacter）是拥有特殊含义的字符：
                .        查找单个字符，除了换行和行结束符
                \d       查找数字
                \D       查找非数字字符
                \w       查找单词字符
                \W       查找非单词字符
                \s       查找空白字符
                \S       查找非空白字符
                b\       匹配单词边界
                B\       匹配非单词边界
            
            量词：
                n+       出现至少一次
                n*       出现0次或多次
                n?       出现0次或1次
                {5}      出现5次
                {2,8}    出现2到8次
        方法：    
            test(str) 检索字符串中指定的值。返回 true 或 false
        示例：
            校验邮箱：
                var reg = /^[A-z]+[A-z0-9_-]*\@[A-z0-9]+\.[A-z]+$/;
                var email = "haohao_827@163.com";
                alert(reg.test(email));
```

### 宿主对象的详细介绍：

```Navigator对象： 
Forms对象： 
	是一个数组，包含了文档中所有的表单（）。要引用单个表单，可以用 document.forms[x]，但是一般来说，人们都会这样做：在标记中加上“name=”…“”属性，那么直接用“document.<表单名>”就可以引用了。 
Images对象： 
	图片对象 document.images[] 是一个数组，包含了文档中所 有的图片（）。
Document对象： 
	文档对象是JavaScript 中window 和frames对象的一个属性,是显示于窗口或框架内的一个文档。描述当前窗口或指定窗口对象的文档。它包含了文档从到的内容。 
浏览器对象:
	包含了正在使用的 Navigator 的版本信息。反映了当前使用的浏览器的资料。JavaScript 客户端运行时刻引擎自动创建 navigator 对象。 
Window对象： 
	表示的是浏览器窗口，最顶层的对象, window的属性对应于整个窗口 。 
Frame 对象： 
	是 window 对象。用最容易理解的话说，每一个HTML 文件占用一个 window 对象， 包括定义框架的网页 （“框架网页”） 
Location对象： 
	地址对象 它描述的是某一个窗口对象所打开的地址。 
	window.location = “链接地址”; 
History对象： 
	历史对象包含了用户已浏览的 URL 的信息，是指历史对象指浏览器的浏览历史。 
	*back() 后退，跟按下“后退”键是等效的。 
	*forward() 前进，跟按下“前进”键是等效的。 
Links对象： 
	是一个数组， 包含了文档中所有连接标记 （包含 href 属性的a标记和map标记段里的area标记），按照在文档中的次序，从 0 开始给每个连接标记定义了一个下标。 
Archors对象： 
	是一个数组，包含了文档中所有锚标记（包含 name 属 性的a标记）， 按照在文档中的次序， 从 0 开始给每个锚标记定义了一个下标。 


```

