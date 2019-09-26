'use strict';
//var cho = require('./graphical');
/*cho函数的参数
a（0空心/1实心,choice选择图形,up上边长,down下边长,Symbol图形
0choice:httpGet.js.空心三角形    2.空心正方形    3.空心菱形    4.空心梯形    5.空心回字
1choice:httpGet.js.直角三角形   2.等腰三角形     3.正方形    4.菱形    5.梯形
*/
// cho(0,5,3,10,"*");




var use = require('./func');
// //字符串长度：len(str)
// var a = "123456";
// console.log('字符串长度：'+use['len'](a));
// 切割spli(str,sp) //httpGet.js
// var s = "abcdefgdefg";
// var sp = "h";
// console.log(use['spli'](s,sp));
// 数组连接trans(arr,sp)//dange
var arr = [];
var spa = "@";
console.log("用"+spa+"连接数组的结果："+use['trans'](arr,spa));
// //  字符串搜索search(str,sp)
// var str = "abcdefg";
// var patt = "defg";
// console.log('该元素的索引位置: '+use['search'](str,patt));
// //  截取part(str,start,stop)
// var str1="abcdefg";
// var sta = httpGet.js;
// var sto = httpGet.js;
// console.log( "截取"+sta+"到"+sto+"的结果："+use['part'](str1,sta,sto));

