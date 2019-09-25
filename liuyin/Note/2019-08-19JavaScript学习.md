- ## JavaScript笔记

  - 引入<script src="file.js" type="text/javascript"></script>

  - 声明变量var mood="happy",age="11";弱类型不需要进行类型声明

  - 索引数组（0,1,2,3...)  关联数组

  - 对象

    - var Lennon=Object（）；
    - lennon.name="john";
    - lennon.year=1940;
    - alert("10"+30);输出1030
    - alert(10+30);输出40

  - 条件语句 if

  - ==和===

    	var  a=false;

      	var b="";

      	if(a==b){

      	alert("a equals b");

      	}

    ==输出正确，===输出错误，===全等操作符会执行严格的比较，不仅比较值还比较变量的类型

  - 逻辑比较符 &&  ||  ！

  - 循环语句

    - while(){}
    - do{}while()
    - for( ; ; ){}

  - 声明函数 function a(){}

  - 变量作用域 全局变量和局部变量

  - DOM  D(文档) O(对象) M(模型)

  - 节点

    - 元素节点 <p></p>  <li></li>
    - 文本节点 
    - 属性节点 title等

  - 获取元素

    - document.getElementById();
    
    - document.getElementByTagName("p");
    
    - document.getElementByClassName(shopping,"sale");
    
      第一个表示DOM树中的搜索起点，第二个搜索的类名。
    
    - getAttribute("title")通过元素节点对象调用
    
    - setAttribute（"title"）
    
    - childNode 属性可以用来获取任何一个元素的所有子元素。
    
    - window.onload=function（）{}
    
    - 获取节点的nodeType属性
    
    - firstChild和lastChild
    
      - node.firstChild等价node.childNodes[0]
      - node.lastChild    等价node.childNode[node.childNodes.length-1]
    
    - 平稳退化：确保网页在没有JavaScript的情况下也能正常工作
    
    - 向后兼容
    
    - 代码压缩工具
    
      - Douglas Crockford的JSMin
      - 雅虎的YUI Compressor
      - 谷歌的Closure Compiler
    
    - if(!document.getElementsByTagName)return false;审查是否支持
    
    - ```
      function addLoadEvent(func){
      var oldonload=window.onload;
      if(typeof window.onload!='function'){
      window.onload=func;
      }else{
      window.onload=function(){
      oldonload();
      func();
      }
      }
      }
      添加代码：
      addLoadEvent(firstFunction);
      ```
    
      - 1.把现有的window.onload 事件处理函数的值存入变量oldonload
      - 2.如果这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
      - 3.如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾。