/*
    输入邮箱，返回@之前的名字和对应的企业名
*/
window.onload = get;
var gs = new Array("163","网易","qq","腾讯","sina","新浪");
var a ;
function get(){
    var email;
    var email = window.prompt("请输入邮箱",email);
    for(var i = 1; i < email.length;i++){
        var s = email.charAt(i);
        if(s === "@"){
            var n = email.substring(0,i);
            a = i+1;
        }
        if(s === "."){
            var m = email.substring(a,i);
                for(var j = 0;j<gs.length;j++){
                    var g = gs[j];
                   if(g === m){
                       var falg = true;
                       var gg = gs[j+1];
                    }else{
                       var falg = false;
                        var gong = "公司邮箱不匹配！";    
                    }
                    
                    
                }
                break;
            }   
        }
        
        alert("账户："+n);
        if(falg){
            alert("邮箱公司：" + gg);
        }else{
            alert(gong);
        }

    
}