'use strict';
var readline = require('readline');
var  rl = readline.createInterface(process.stdin, process.stdout);
console.log("1.正方形");
console.log("2.空心正方形");
console.log("3.等腰直角三角形");
console.log("4.空心等腰直角三角形")
console.log("5.正三角形");
console.log("6.空心正三角形");
console.log("7.菱形");
console.log("8.空心菱形");
console.log("9.回形");
console.log("10.梯形");
console.log("11.空心梯形");
rl.setPrompt('请输入想要打印的图形数字 ：');
rl.prompt();
rl.on('line', function(line) {
    switch(line.trim()) {
        case '1':
        square();
            break;
        case '2':
        square1();
            break;
        case '3':
            triangle();
            break;
        case '4':
            triangle2();
            break;
        case '5':
            triangle1();
            break;
        case '6':
        triangle11();
        break;
        case '7':
            diamond();
            break;
        case '8':
        diamond1();
        break;
        case '9':
        rt();
        break;
        case '10':
        trapezoid();
        break;
        case '11':
            trapezoid1();
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
    rl.prompt();
});

rl.on('close', function() {
    console.log('bye bye!');
    process.exit(0);
});
var a=0;
var i=0;
var b=0;
var str={ };
var count=0;

// 正方形
function square()
{
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的正方形的边长(边长小于10)？",function(answer){
                var a=0;
                var b=0;
                var str={ };
                for(a;a<answer;a++){
                    for(b;b<answer;b++){
                        str[b]=" "+t;   
                    }
                for(i;i<10;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                        i=0;
                    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);   
                    b=0;
        }
            });
        });
}

//空心正方形
function square1()
{
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的空心正方形的边长(边长小于10)？",function(answer){
                var a=0;
                var b=0;
                var str={ };
                for(a;a<answer;a++){
                    for(b;b<answer;b++){
                        var x=answer-1;
                        if(a==0||b==0||a==x||b==x){
                        str[b]=" "+t;   
                        }else{
                        str[b]="  ";   
                        } 
                    }
                for(i;i<10;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                        i=0;
                    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);   
                    b=0;
        }
            });
        });
}

//直角三角形
function triangle(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的等腰直角三角形的边长(相等的腰长应小于10)？",function(answer){
                a=0;
                b=0;
                i=0;
                str={};
                for(a;a<answer;){
                        a++;
                        for(b;b<a;b++){
                            str[b]=" "+t;
                        }
                        for(i;i<10;i++){
                                    if(!str[i]){
                                        str[i]='';
                                    }
                                }
                                i=0;
                        console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]); 
                        b=0;
                    }
        });
    });
}


//空心直角三角形

function triangle2(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的空心等腰直角三角形的边长(相等的腰长应小于10)？",function(answer){
                a=0;
                b=0;
                i=0;
                str={};
                for(a;a<answer;){
                        a++;
                        for(b;b<a;b++){
                            if(b==0||b==a-1||a==a-1||a==answer){
                            str[b]=" "+t;   
                            }else{
                            str[b]="  ";   
                            } 
                        }
                        for(i;i<10;i++){
                                    if(!str[i]){
                                        str[i]='';
                                    }
                                }
                                i=0;
                        console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]); 
                        b=0;
                    }
        });
    });
}

//正三角形
function triangle1(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的等腰三角形的边长(相等的腰长应小于10)？",function(answer){
            a =0;
            b=0;
            count=0;
            i=0;
            str={};
            // 正三角形状
            for(a;a<answer;){
                a++;
                for(b;b<a;){
                    var s=answer-a;
                    for(count;count<s;count++){
                        str[count]=" ";
                    }
                    str[count]=" "+t;
                    b++;
                    count++;
                }
                for(i;i<10;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                i=0;
                b=0;
                count=0;
                console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
            }
            });
        });
}

//空心正三角形状

function triangle11(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的空心等腰三角形的边长(相等的腰长应小于10)？",function(answer){
            a =0;
            b=0;
            count=0;
            i=0;
            str={};
            for(a;a<answer;){
                a++;
                for(b;b<a;){
                    var s=answer-a;
                    for(count;count<s;count++){
                        str[count]=" ";
                    }
                    if(a==answer||b==0||b==a-1){
                        str[count]=" "+t;
                    }else{
                        str[count]="  ";
                    }
                    count++;
                    b++;
                }
                for(i;i<10;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                i=0;
                b=0;
                count=0;
                console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
            }
            });
        });
}

//菱形
function diamond(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的菱形的边长(边长应小于10)？",function(answer){
                a =0;
                b=0;
                count=0;
                i=0;
                str={};
                    for(a;a<answer;){
                            a++;
                            for(b;b<a;){
                                var s=answer-a;
                                for(count;count<s;count++){
                                    str[count]=" ";
                                }
                                str[count]=" "+t;
                                b++;
                            }
                            if(a ==answer){
                                count=0;
                                b=answer;
                                for(a;a>0;){
                                    for(b;b>0;){
                                        var s=answer-a;
                                        for(count;count<s;count++){
                                            str[count]=" ";
                                        }
                                            str[count]=" "+t;
                                            b--;
                                            count++;
                                    }
                                    for(i;i<10;i++){
                                        if(!str[i]){
                                            str[i]='';
                                        }
                                    }
                                    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
                                    a--;
                                    b=a;
                                    count=0;
                                }
                                    return 1;
                            }
                            for(i;i<11;i++){
                                if(!str[i]){
                                    str[i]='';
                                }
                            }
                            i=0;
                            b=0;
                            count=0;
                            console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[10]);
                        }
            });
        });
}

//空心菱形
function diamond1(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的空心菱形的边长(边长应小于10)？",function(answer){
                a =0;
                b=0;
                count=0;
                i=0;
                str={};
                    for(a;a<answer;){
                            a++;
                            for(b;b<a;){
                                var s=answer-a;
                                for(count;count<s;count++){
                                    str[count]=" ";
                                }
                                if(b==0||b==a-1){
                                    str[count]=" "+t;
                                }else{
                                    str[count]="  ";
                                }
                                count++
                                b++;
                            }
                            if(a ==answer){
                                count=0;
                                b=answer;
                                for(a;a>0;){
                                    for(b;b>0;){
                                        var s=answer-a;
                                        for(count;count<s;count++){
                                            str[count]=" ";
                                        }
                                        if(b==a||b==1){
                                            str[count]=" "+t;
                                        }else{
                                            str[count]="  ";
                                        }
                                            b--;
                                            count++;
                                    }
                                    for(i;i<10;i++){
                                        if(!str[i]){
                                            str[i]='';
                                        }
                                    }
                                    console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
                                    a--;
                                    b=a;
                                    count=0;
                                }
                                    return 1;
                            }
                            for(i;i<11;i++){
                                if(!str[i]){
                                    str[i]='';
                                }
                            }
                            i=0;
                            b=0;
                            count=0;
                            console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[10]);
                        }
            });
        });
}

// 回形  
function rt(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的回形的边长(边长大于5小于10)？",function(answer){
                    a =0;
                    b=0;
                    count=0;
                    i=0;
                    str={};
            for(a;a<answer;a++){
                for(b;b<answer;b++){
                    var x=answer-1;
                    var y=answer-3;
                    var z=answer-2;
                    if(a==0||a==x||b==0||b==x){
                        str[count]=" "+t;
                    }else if(2==a  ||a==y|| 2==b||b==y){
                        if(a==1||b==1||a==z||b==z){
                            str[count]="  ";
                        }else{
                            str[count]=" "+t;
                        }
                        
                    }else{
                        str[count]="  ";
                    }
                    count++;
                }
                for(i;i<10;i++){
                    if(!str[i]){
                        str[i]='';
                    }
                }
                i=0;
                console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
                b=0;
                count=0;
            }
            });
        });
}

//梯形
function trapezoid(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的梯形的边长(边长小于10)？",function(answer){
                answer++
            a =0;
            b=0;
            count=0;
            i=0;
            str={};
        for(a++;a<answer;){
            a++;
            for(b;b<a;){
                var s=answer-a;
                for(count;count<s;count++){
                    str[count]=" ";
                }
                str[count]=" "+t;
                count++
                b++;
            }
            for(i;i<11;i++){
                if(!str[i]){
                    str[i]='';
                }
            }
            i=0;
            b=0;
            count=0;
            console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
        }
            });
        });
}

//空心梯形
function trapezoid1(){
    rl.question("请输入边框图案：",function(answer){
        var t=answer;
            rl.question("请输入要打印的空心梯形的边长(边长小于10)？",function(answer){
                answer++
            a =0;
            b=0;
            count=0;
            i=0;
            str={};
            //梯形
        for(a++;a<answer;){
            a++;
            for(b;b<a;){
                var s=answer-a;
                for(count;count<s;count++){
                    str[count]=" ";
                }
                if(a==answer||b==0||b==a-1){
                    str[count]=" "+t;
                }else{
                    str[count]="  ";
                }
                count++
                b++;
            }
            for(i;i<11;i++){
                if(!str[i]){
                    str[i]='';
                }
            }
            i=0;
            b=0;
            count=0;
            console.log(str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]);
        }
            });
        });
}