"use strict";
//字符串搜索
var str = "abcdefg";
var f = "acdcbc";
var x = new Array();
var y = 0;
var h = 0;

fen(str,f)


function fen(str,f){
    var count1 = 0;
    var count2 = 0;
    
    for(var i in str){
        count1++;
    }
    for(var s in f){
        count2++;
    }
    
    
    
    for(var i = 0; i<count1; i++){
        var a = "";
        for(var j = 0; j < count2; j++){
            a += str[i+j];  
            if(a === f){
                console.log(i);
                return;
                
            }else if(i === count1 - 1 && a!=f){
                console.log(-1);
                return;
            }
        }
      
    }

}
