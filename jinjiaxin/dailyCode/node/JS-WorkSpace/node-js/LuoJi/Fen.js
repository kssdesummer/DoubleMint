"use strict";
//分割字符串
var str = "abcdcfg";
var f = "cd"
var x = Array();
var y = 0;
var z = '';


sp(str, f);


function sp( str, f){
    var count1 = 0;
    var count2 = 0;
    
    for(var i in str){
        count2+=1;
    }
    
    for(var s in f){
        count1+=1;
    }
    
    for(var i = 0;i < count2; i++){
        var q ='';
        for(var j = 0; j < count1; j++){
            q += str[i+j]       
        }
        if(q === f){
            x[y] = z;
            y += 1;
            z = '';
            i += count1 - 1;
        }else{
            z += str[i];
        }
        
    }
    x[y] = z;
    console.log(x);
}