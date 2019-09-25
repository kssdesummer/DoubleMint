//菱形
"use strict"
var h = 11;
var f = "@";
var k = "y";
diamond(h,f,k);
function diamond(h,f,k){

    if(k === "y"){
        for(var i = 1; i <= ( h + 1 ) / 2; i++){
            for(var j = 1; j <= (h - i); j++){
                process.stdout.write("##");
            }
            for(var k = 1; k <= (2 * i - 1); k++){
                if(k === 1){
                    process.stdout.write(f);
                }else if(k === (2 * i -1)){
                    process.stdout.write("#" + f);
                }else{
                    process.stdout.write("##");
                }
            }
            console.log();
        
        }
        for(var i = 1; i <= h - (h + 1) / 2; i++){
            for(var n = 1; n <= (h - 2); n++){
                process.stdout.write("#");;

            }
            for(var j = 1; j <= i; j++){
                process.stdout.write("##");
            }
            for(var k = h-2; k > (2*i) - 2; k--){
                if(k === h-2){
                    process.stdout.write("#" + f);
                }else if(k === (2 * i -1)){
                    process.stdout.write("#" + f);
                }else{
                    process.stdout.write("##");
                }
            }
            console.log();
        }
    
    }else{
        for(var i = 1; i <= ( h + 1 ) / 2; i++){
            for(var j = 1; j <= (h - i); j++){
                process.stdout.write("  ");
            }
            for(var k = 1; k <= (2 * i - 1); k++){
                if(k === 1){
                    process.stdout.write(f);
                }else{
                    process.stdout.write(" " + f);
                }
            }
            console.log();
        
        }
        for(var i = 1; i <= h - (h + 1) / 2; i++){
            for(var n = 1; n <= (h - 2); n++){
                process.stdout.write(" ");;

            }
            for(var j = 1; j <= i; j++){
                process.stdout.write("  ");
            }
            for(var k = h-2; k > (2*i) - 2; k--){
                process.stdout.write(" " + f);
            }
            console.log();
        }
    
    }
}
module.exports = {
    diamond:diamond
};


















