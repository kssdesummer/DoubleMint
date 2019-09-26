'use strict';
// var str = 'jkjfdsjk12jkklhsl';
//自定义求字符串长度
function len(str){
    var i;
    var num=0;
    for ( i in str){
        num ++;
    }
    // console.log('字符串长度：'+num);
    return num;
}
// console.log('字符串长度：'+len(str));
// module.exports = len;

//自定义切割字符串
// var sp = 'jk';
function spli(str,sp){
    var num = len(str);
    var m = len(sp);
    var n = 0;
    var arr = Array();
    var str1 = "";
    if(m>0&&m<=1){
        for ( var i=0;i<num;i++){
            if(str[i]!=sp){
                str1 += str[i];
            }else if(i!=0){
                    console.log(i);
                    arr[n] = str1;
                    str1 = "";
                    n ++;
            }
            }
        if(str1 != ""){
            arr[n] =str1;
        }
    }else if(m>1&&m<=num){
        var str1 = "";//用来记录每次切割的
        for(var i=0;i<num;i++){
            var str2 = "";//用来记录j循环之后得到的值
            for(var j=i;j<i+m;j++){     //条件：每次循环m次，每次从i开始，j=i=0，0+m，0+2m...，跳跃值为1，0 - 0+m中间经历了1，2，3，..，m-httpGet.js
                str2 += str[j];
            }var str3 =str1;
            str1 += str[i];
            if(str2 == sp){
                if(i==0) {
                    str1 = "";
                }else{
                    arr[n] = str3;
                    str1 = "";
                    str3 = "";
                    n++;
                }
                i = i+m-1;
            }
        }
        if(str1 != ""){
            arr[n] = str1;
        }
    }
    else{
        return -1;
    }
    return arr;
}
// console.log("用"+sp+"切割的结果："+spli(str,sp));
// module.exports = spli;

//数组变字符串
// var arr = [httpGet.js,'2','3','6','5','4','8','6','9','8'];
function trans(arr,sp){
    var num = len(arr);
    var str = '';
    var i=0;
    if (num>=2){
        for (i;i<num;i++){
            if(i == num-1){
                str += arr[i];
            }else{
                arr[i] += sp;
                str += arr[i];
            }
        }
    }else if(num == 1){
        str = arr[i];
    }else{
        return -1;
    }
    //console.log(str);
    return str;
}
// console.log("用"+sp+"连接数组的结果："+trans(arr,sp));
// module.exports = trans;

// 字符串搜索
// var a = 'fd'; //搜索i
function search(str,a){
    var num=len(str);
    var m = len(a);
    if(m>0&&m<=1){
        for ( var i=0;i<num;i++){
            if(a == str[i]){
                return i;
            }
        } return '没搜到该元素！';
    }else if(m>1&&m<=num){
        var str1 = "";//用来记录每次切割的
        for(var i=0;i<num;i++) {
            var str2 = "";//用来记录j循环之后得到的值
            for (var j = i; j < i + m; j++) {     //条件：每次循环m次，每次从i开始，j=i=0，0+m，0+2m...，跳跃值为1，0 - 0+m中间经历了1，2，3，..，m-httpGet.js
                str2 += str[j];
            }
            if (str2 == a) {
                return i + "~" + (i + m - 1)
            }
        }
    }else{
        return "搜索的值错误";
    }

}
// console.log('该元素的索引位置: '+search(str,a));
// module.exports = search;
//
//截取字符串，切片
// var a = 3;
// var b = 6;
function part(str,a,b){
    var num=len(str);
    var res = "";
    if (a>b){
        console.log("输入范围有误");
    }else if(a>=num || b>=num){
        console.log("输入超出范围");
    }else if(a<0 || b<0){
        console.log("无法截取位置为负数");
    }else{
        for ( var i=0;i<num;i++){
            if(i>=a && i<=b){
                res +=str[i];
            }
        }
        return res;
    }
}
// console.log( "截取"+a+"到"+b+"的结果："+part(str,a,b));
// module.exports = part;



module.exports = {
    len:len,
    spli:spli,
    trans:trans,
    search:search,
    part:part,
};