//回型
"use strict";
var l = 7;
var f = "#";
var k = "y";
hui(l,f,k);

function hui(l,f,k){
    if(k === "y"){
        for(var i = 1; i <= l; i++){
            if(i === 1 || i === l){
                for(var j = 1; j <=l; j++){
                    process.stdout.write(" " + f);
                }
            }else{
                for(var j = 1; j <=l; j++){
                    if(j === 1 || j === l){
                        process.stdout.write(" " + f);
        
                    }else{
                        if(i >= 3 && i <= (l-2)&& j >= 3 && j<= (l-2)){//内口
                            if(i === (l+1)/2 &&j === (l+1)/2){
                                process.stdout.write("  ");
                            }else if(i >= 4 && i <= (l-3)&& j >= 4 && j<= (l-3)){
                                process.stdout.write("  ");
                            }else{

                                process.stdout.write(" " +f);
                            }
                            
                        }else{
                            process.stdout.write("  ");
                        }
                    }
                }
            }
            console.log();
        }
    
    }else{
        for(var i = 1; i <= l; i++){
            if(i === 1 || i === l){
                for(var j = 1; j <=l; j++){
                    process.stdout.write(" " + f);
                }
            }else{
                for(var j = 1; j <=l; j++){
                    if(j === 1 || j === l){
                        process.stdout.write(" " + f);
        
                    }else{
                        if(i >= 3 && i <= (l-2)&& j >= 3 && j<= (l-2)){//内口
                            if(i === (l+1)/2 &&j === (l+1)/2){
                                process.stdout.write("  ");
                            }else{
                                process.stdout.write(" " + f);
                            }
                        }else{
                            process.stdout.write(" " +f);
                        }
                    }
                }
            }
            console.log();
        }
    
    } 
}
module.exports = {
    hui:hui
};

