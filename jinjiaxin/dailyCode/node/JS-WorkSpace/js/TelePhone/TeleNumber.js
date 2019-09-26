window.onload = get;
function get(){
    var tele = /^1[3|4|5|7|8][0-9]{9}$/;
    while(true){
        var number = window.prompt("请输入手机号。。");
        var n = parseInt(number);
        if(tele.test(n)){
            alert("算你是个手机号！");
            return;
        }else{
            alert("格式不对，再试一次！");
        }
    }
}