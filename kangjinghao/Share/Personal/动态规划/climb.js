//程序从 i=3 开始迭代，一直到 i=n 结束。每一次迭代，都会计算出多一级台阶的走法数量。
// 迭代过程中只需保留两个临时变量a和b，分别代表了上一次和上上次迭代的结果。
// 为了便于理解，我引入了temp变量。temp代表了当前迭代的结果值。
function getClimbingWays(){
    var n=10;
    if(n<1){
        return 0;
    }
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    var a = 1;
    var b = 2;
    var temp = 0;
    for(let i=3; i<=n; i++){
        temp = a+b;
        a = b;
        b = temp;
    }
    return temp;
}
console.log(getClimbingWays());