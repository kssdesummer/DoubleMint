"use strict";

var a =["ab"];
var b = "-";

he(a,b);

function he(a,b){
    var count = 0;
    var c = "";
    
    for(var i in a){
        count++;
    }
    for(var i = 0; i < count; i++){
        if(i != count - 1){
            c += a[i] + b;
        }else if(i === (count-1)){
            c += a[i];
        }
       
    
        
    }
    console.log(c);
}
