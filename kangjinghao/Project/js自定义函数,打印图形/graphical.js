'use strict';
// choice,up,down,Symbol

function graphical(c,b,a,s){
    if (c == 1) {
        var str = "";
        for (var i = 0; i <= a; i++) {
            for (var j = 0; j <= i; j++) {
                str += s;
            }
            str += '\n';
        }
        console.log("直角三角：\n" + str);
    }else if(c==2) {
        var str1 = "";
        for (var i = 1; i <= a; i++) {
            var spaceNum = a - i;
            for (var j = 0; j < spaceNum; j++) {
                str1 += " ";
            }
            var starNum = 2 * i - 1;
            for (var j = 0; j < starNum; j++) {
                str1 += s;
            }
            str1 += "\n";
        }
        console.log("等腰三角形：\n" + str1);
    }else if(c==3) {
        var str3 = "";
        for (var i = 0; i < a*a; i++) {
            if (i % a == 0) {
                str3 += '\n';
            }
            str3 += (s+" ");
        }
        console.log("正方形:" + str3);
    }else if(c==4){
        var str2 = "";
        for (var i = 1; i <= a; i++) {
            var spaceNum = a - i; 
            for (var j = 0; j < spaceNum; j++) {
                str2 += " ";                   
             }                     
            var starNum = 2*i - 1; 
            for (var j = 0; j < starNum; j++) {
                str2 += s;                      
             } str2 += "\n";                
        }
        for (var i = 1; i < a; i++) {
            var spaceNum = i; 
            for (var j = 0; j < spaceNum; j++) {
                str2 += " ";                   
             }                     
            var starNum = 2*a - 2*i-1; 
            for (var j = 0; j < starNum; j++) {
                str2 += s;                      
             } str2 += "\n";                
        }
        console.log("菱形：\n"+str2); 
    }else if(c==5){
        var str4 ="";
        if(b>1){
            for(var i=b;i<=a;i++){
                for(var j=0;j<i;j++){
                    str4 += s;
                }
                str4 += '\n';
            }
            console.log("梯形：\n"+str4);
        }else{
            console.log("梯形的上边要大于1");
        }

    }
}


function hollow(c,b,a,s){
    if(c==1){
        var str = "";
        for(var i=0;i<=a;i++){
            for(var j=0;j<i;j++){
                if(i>=2 && j>0 && j<i-1&&i!=a){
                    str += " ";
                }else{
                    str += s;
                }
            }
            str += '\n';
        } console.log("空心三角："+str);
    }else if(c==2){
        var str3 ="";
        for(var i=0;i<a;i++){
            for(var j=0;j<a;j++){
                if(i==0 || i==a-1){
                    str3 += (s+" ");
                }else if(j==0 || j==a-1){
                    str3 += (s+" ");
                }else{
                    str3 += "  ";
                }
            }str3 += '\n';
        }
        console.log("空心正方形:\n" + str3);
    }else if(c==3){
        var str2 = "";
        for (var i = 1; i <= a; i++) {
            var spaceNum = a - i;
            for (var j = 0; j < spaceNum; j++) {
                str2 += " ";
            }
            var starNum = 2*i - 1;
            for (var j = 0; j < starNum; j++) {
                if(j>0&&j<starNum-1&&i>1){
                    str2 += " ";
                }else{
                    str2 += s;
                }
            } str2 += "\n";
        }
        for (var i = 1; i < a; i++) {
            var spaceNum = i;
            for (var j = 0; j < spaceNum; j++) {
                str2 += " ";
            }
            var starNum = 2*a - 2*i-1;
            for (var j = 0; j < starNum; j++) {
                if(j>0&&j<starNum-1&&i<a){
                    str2 += " ";
                }else{
                    str2 += s;
                }
            } str2 += "\n";
        }
        console.log("空心菱形：\n"+str2);
    }else if(c==4){
        var str4 ="";
        if(b>=2){
            for(var i=b;i<a;i++){
                for(var j=0;j<i;j++){
                    if(i==b || i==a-1){
                        str4 += s;
                    }else if(j==0 || j==i-1){
                        str4 += s;
                    }else{
                        str4 += " ";
                    }
                }
                str4 += '\n';
            }
            console.log("空心梯形：\n"+str4);
        }else{
            console.log("上边长至少为2");
        }

    }else if(c==5){
        var str5 ="";
        if(a>=6){
            for(var i=0;i<a;i++){
                for(var j=0;j<a;j++){
                    if((i==0 || i==a-1) || (j==0 || j==a-1)){
                        str5 += s;
                    }
                    else if(a-2>j&&j>1&&a-2>i&&i>1){
                        if(j==2||j==a-3||i==2||i==a-3){
                            str5 += s;
                        }else{
                            str5 += " ";
                        }
                    }else{
                        str5 += " ";
                    }
                }str5 += '\n';
            }
            console.log("回字:\n" + str5);
        }else{
            console.log("边长小于5无法打印回字")
        }
    }
}
       
function cho(a,choice,up,down,Symbol){
    if(a == 1){
        graphical(choice,up,down,Symbol)
    }else if(a == 0){
        hollow(choice,up,down,Symbol)
    }
}
module.exports = cho;