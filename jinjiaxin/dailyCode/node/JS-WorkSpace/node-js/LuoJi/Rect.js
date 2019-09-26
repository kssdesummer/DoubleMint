//正方形
"use strict"
var l =15;
var f = "%";
var k = "y";
rect(l,f,k);

function rect(l,f,k){
    if(k === "y"){
        for(var i = 0; i < l; i++){
            for(var j = 0; j < l; j++){
                if(i != 0 && i != (l-1) && j != 0 && j != (l-1)){
                    process.stdout.write("  ");
                }else{
                    process.stdout.write(" " + f);
                } 
            }
            console.log();
        }
    }else{
        for(var i = 0; i < l; i++){
            for(var j = 0; j < l; j++){
                
                process.stdout.write("  " + f);
                
            }
            console.log();
        }
    }         
}
module.exports = {
    rect:rect
};
