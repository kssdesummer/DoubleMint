var a;
function hollow(a,c){
    if(c==1){
        var str = "";
    for(var i=0;i<a;i++){
        for(var j=0;j<i;j++){
            if(i>=3 && j>0 && j<i-1&&i!=a-1){
                str += "     ";
            }else{
                str += "*   ";
            }
        }
        str += '\n';
    } console.log("空心三角："+str);
    }else if(c==2){
        var str3 ="";
    for(var i=0;i<a;i++){
        for(var j=0;j<a;j++){
            if(i==0 || i==a-1){
                str3 += "*    ";
            }else if(j==0 || j==a-1){
                str3 += "*    ";
            }else{
                str3 += "      ";
            }      
        }str3 += '\n';
    }
    console.log("空心正方形:\n" + str3);
    }else if(c==3){
        var str2 = "";
        for (var i = 1; i <= a; i++) {
            var spaceNum = a - i; 
            for (var j = 0; j < spaceNum; j++) {
                str2 += "     ";                   
             }                     
            var starNum = 2*i - 1; 
            for (var j = 0; j < starNum; j++) {
                if(j>0&&j<starNum-1&&i>1){
                    str2 += "     ";
                }else{
                    str2 += " *  ";   
                }                   
             } str2 += "\n";                
        }
        for (var i = 1; i < a; i++) {
            var spaceNum = i; 
            for (var j = 0; j < spaceNum; j++) {
                str2 += "     ";                   
             }                     
            var starNum = 2*a - 2*i-1; 
            for (var j = 0; j < starNum; j++) {
                if(j>0&&j<starNum-1&&i<a){
                    str2 += "     ";
                }else{
                    str2 += " *  ";   
                }                       
             } str2 += "\n";                
        }
        console.log("空心菱形：\n"+str2); 
    }else if(c==4){
        var str4 ="";
        for(var i=2;i<a;i++){
            for(var j=0;j<i;j++){
                if(i==3 || i==a-1){
                    str4 += "*    ";
                }else if(j==0 || j==i-1){
                    str4 += "*    ";
                }else{
                    str4 += "      ";
                }      
            }
            str4 += '\n';
        }
        console.log("空心梯形：\n"+str4);  
    }else if(c==5){
        var str5 ="";
        if(c>=6){
            for(var i=0;i<a;i++){
                for(var j=0;j<a;j++){
                    if((i==0 || i==a-1) || (j==0 || j==a-1)){
                        str5 += "*    ";
                    }
                    else if(a-2>j&&j>1&&a-2>i&&i>1){
                        if(j==2||j==a-3||i==2||i==a-3){
                            str5 += "*    ";
                        }else{
                            str5 += "      ";
                        }
                    }else{
                        str5 += "      ";
                    }      
                }str5 += '\n';
            }
            console.log("回字:\n" + str5);
        }else{
            console.log("边长小于5无法打印回字")
        }
    }
}
       

module.exports =hollow;