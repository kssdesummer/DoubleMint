'use strict';
var a=0;
var b=0;
var count=0;
var i=0;
var d=9;
var str={ };
// 正方形
// for(a;a<9;a++){
//     for(b;b<9;b++){
//         str[b]="* ";   
//     }
//     console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);   
//     b=0;
// }

// 直角三角形
  for(a;a<9;){
        a++;
        for(b;b<a;b++){
            str[b]=" #";
        }
        for(i;i<9;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                i=0;
        console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]); 
        b=0;
    }

正三角形状
for(a;a<5;){
    a++;
    for(b;b<a;){
        var s=5-a;
        for(count;count<s;count++){
            str[count]=" ";
        }
        str[count]=" *"
        b++;
    }
    for(i;i<9;i++){
        if(!str[i]){
            str[i]='';
        }
    }
    i=0;
    b=0;
    count=0;
    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);
}

//菱形

    for(a;a<5;){
            a++;
            for(b;b<a;){
                var s=5-a;
                for(count;count<s;count++){
                    str[count]=" ";
                }
                str[count]=" *"
                b++;
            }
            if(a ==5){
                count=0;
                b=5;
                for(a;a>0;){
                    for(b;b>0;){
                        var s=5-a;
                        for(count;count<s;count++){
                            str[count]=" ";
                        }
                            str[count]=" *";
                            b--;
                            count++;
                    }
                    for(i;i<9;i++){
                        if(!str[i]){
                            str[i]='';
                        }
                    }
                    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);
                    a--;
                    b=a;
                    count=0;
                }
                    return 1;
            }
            for(i;i<9;i++){
                if(!str[i]){
                    str[i]='';
                }
            }
            i=0;
            b=0;
            count=0;
            console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);
        }

// 回形  

    for(a;a<6;a++){
        for(b;b<6;b++){
            if(a==0||a==5||b==0||b==5){
                str[count]=" *";
            }else if((a==2||a==3) && (b==2||b==3)){
                str[count]=" *";
            }else{
                str[count]="  ";
            }
            count++;
        }
        for(i;i<9;i++){
            if(!str[i]){
                str[i]='';
            }
        }
        i=0;
        console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);
        b=0;
        count=0;
    }

    //梯形
 for(a++;a<5;){
    a++;
    for(b;b<a;){
        var s=5-a;
        for(count;count<s;count++){
            str[count]=" ";
        }
        str[count]=" *"
        count++
        b++;
    }
    for(i;i<9;i++){
        if(!str[i]){
            str[i]='';
        }
    }
    i=0;
    b=0;
    count=0;
    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]);
}