"use strict";
//截取字符串
var str = "abcdcfg";
var begin =-4;
var l =44;

sp(str, begin, l);

function sp( str, b, l){
    var count2 = 0;
   
    
    for(var i in str){
        count2+=1;
    }
    
  
    
    var q ='';
    for(var i = b;i < b+l; i++){
        q += str[i];   
      if(b < 0 || b > count2){
            console.log("起始位置不合理！！");
            return;
      }else if((b + l) >count2){

        console.log("超出字符串长度，无法截取！");
        return;
      }  
    }
    console.log(q);
  
}