//等腰三角形
"use strict"
var h = 6;
var f = "#";
var k = "n";
trian(h,f,k);

function trian(h,f,k){
    if(k === "y"){
        for(var i = 1; i <= h; i++){
            for(var j = 1; j <= (h - i); j++){
                process.stdout.write("  ");
            }
            for(var k = 1; k <= (2 * i - 1); k++){
                if(k === 1){
                    process.stdout.write(f);
                }else if(k === (2 * i - 1) || i === h){
                    process.stdout.write(" " + f);
                }else{
                    process.stdout.write("  ");
                }
            }
            console.log();
        }
    }else{
        for(var i = 1; i <= h; i++){
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
    }
    
    
}
module.exports = {
    trian:trian
};