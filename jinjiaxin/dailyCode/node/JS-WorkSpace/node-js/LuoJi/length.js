"use strict";
//字符串长度
var s = "";
var count = 0;

l(s);

function l(n){
    for(var i in n){
        count++;
    }
    console.log(count);
}
