//梯形
var s = 3;
var h = 5;
var f = "$";
var k = "y";
ti(s,h,f,k);

function ti(s,h,f,k){
    if(k === "y"){

        for(var i = 1; i <= h;i++){
            for(var j = 1 ; j<= s; j++){
                if(i===1||i===h){
                    process.stdout.write(" " + f);
                }else if(j === 1|| j === s){
                    process.stdout.write(" " + f);
                }else{
                    process.stdout.write("  ");
                }
            }
            s++;
            console.log();
        }
        
    } else{   
        for(var i = 1; i <= h;i++){
            for(var j = 1 ; j<= s; j++){
                process.stdout.write(" " + f);
            }
            s++;
            console.log();
        }
    }    
}
module.exports={
    ti:ti
};
